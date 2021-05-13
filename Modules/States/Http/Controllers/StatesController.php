<?php

namespace Modules\States\Http\Controllers;

use App\Traits\AdminTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Countries\Entities\Country;
use Modules\States\Entities\State;
use Modules\States\Http\Requests\StateRequest;

class StatesController extends Controller
{
    use AdminTrait;
    /**
     * to save the admin who login
     * @var
     */
    public $admin_id;

    /**
     * StatesController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        try {
            $states = State::selection()->orderBy('id', 'DESC')->paginate(PAGINATION_COUNT);
            return view('states::index', compact('states'));
        } catch (\Exception $ex) {
            return redirect()->route('dashboard')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        try {
            $countries = Country::pluck('name', 'id');
            if (!$countries) {
                return redirect()->route('states::index')->with(['error' => 'برجاء التأكد من إضافة الدول اولا ثم اضافة المحافظات']);
            }
            return view('states::create', compact('countries'));
        } catch (\Exception $ex) {
            return redirect()->route('states::index')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);

        }

    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(StateRequest $request)
    {

        try {
            $this->admin_id = auth()->user()->id;
            $input = $request->all();
            $input['user_id'] = $this->admin_id;
            State::create($input);
            return redirect()->route('states.create')->with(['success' => 'تم اضافة البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('states.create')->withInput($input)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        try {
            $state = State::find($id);
            if (!$state) {
                return redirect()->route('countries')->with(['error' => 'هذة المحافظه غير موجودة']);
            }
            return view('states::show', compact('state'));
        } catch (\Exception $ex) {
            return redirect()->route('countries')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        try {
            $state = State::find($id);
            $countries = Country::pluck('name', 'id');
            if (!$state) {
                return redirect()->route('countries')->with(['error' => 'هذة المحافظة غير موجودة']);
            }
            return view('states::edit', compact('state', 'countries'));
        } catch (\Exception $ex) {
            return redirect()->route('countries.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(StateRequest $request, $id)
    {
        try {
            $this->admin_id = auth()->user()->id;
            $state = State::find($id);
            $input = $request->all();
            if (!$state) {
                return redirect()->route('states.edit', $id)->with(['error' => 'هذه المحافظة غير موجودة']);
            }
            $this->statusRequest($request);
            $state->update($input);
            return redirect()->route('states')->with(['success' => 'تم تعديل البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('states.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /***
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $state = State::find($id);
            $status = $state->active == 0 ? 1 : 0;
            $state->update(['active' => $status]);
            return redirect()->route('states')->with(['success' => 'تم تغيير الحالة بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('states')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function destroy($id)
    {
        try {
            $state = State::with('cities')->find($id);
            if (!$state) {
                return redirect()->route('states')->with(['error' => 'هذه المحافظة غير موجودة']);
            }
            $state->delete();
            return redirect()->route('states')->with(['success' => 'تم حذف البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('states')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {
            $state = State::onlyTrashed()->with('cities')->find($id);
            if (!$state) {
                return redirect()->route('states')->with(['error' => 'هذه المحافظة غير موجودة']);
            }
            $state->restore();
            return redirect()->route('states')->with(['success' => 'تم استرجاع البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('states')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $state = State::onlyTrashed()->with('cities')->find($id);
            if (!$state) {
                return redirect()->route('states')->with(['error' => 'هذه المحافظة غير موجودة']);
            }
            $state->forceDelete();
            return redirect()->route('states')->with(['success' => 'تم حذف البيانات نهائيا بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('states')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
}
