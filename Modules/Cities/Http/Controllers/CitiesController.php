<?php

namespace Modules\Cities\Http\Controllers;

use App\Traits\AdminTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Cities\Entities\City;
use Modules\Cities\Http\Requests\CityRequest;
use Modules\States\Entities\State;

class CitiesController extends Controller
{
    use AdminTrait;
    /**
     * to save the admin who login
     * @var
     */
    public $admin_id;

    /**
     * CitiesController constructor.
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
            $cities = City::selection()->orderBy('id', 'DESC')->paginate(PAGINATION_COUNT);
            if (!$cities){
               return redirect()->route('dashboard')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
            }
            return view('cities::index', compact('cities'));
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
            $states = State::pluck('name', 'id');
            if (!$states) {
                return redirect()->route('cities')->with(['error' => 'برجاء التأكد من إضافة المحافظة اولا ثم اضافة المدينه']);
            }
            return view('cities::create', compact('states'));
        } catch (\Exception $ex) {
            return redirect()->route('cities')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);

        }
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(CityRequest $request)
    {
        try {
            $this->admin_id = auth()->user()->id;
            $input = $request->all();
            $input['user_id'] = $this->admin_id;
            City::create($input);
            return redirect()->route('cities.create')->with(['success' => 'تم اضافة البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('cities.create')->withInput($input)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $city = City::find($id);
            if (!$city) {
                return redirect()->route('cities')->with(['error' => 'هذة المدينة غير موجودة']);
            }
            return view('cities::show', compact('city'));
        } catch (\Exception $ex) {
            return redirect()->route('cities')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $city = City::find($id);
            $states = State::pluck('name', 'id');
            if (!$city) {
                return redirect()->route('cities')->with(['error' => 'هذة المدينة غير موجودة']);
            }
            return view('cities::edit', compact('city', 'states'));
        } catch (\Exception $ex) {
            return redirect()->route('cities.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(CityRequest $request, $id)
    {
        try {
            $this->admin_id = auth()->user()->id;
            $city = City::find($id);
            if (!$city) {
                return redirect()->route('cities.edit', $id)->with(['error' => 'هذه المدينة غير موجودة']);
            }
            $input=$request->all();
            $this->statusRequest($request);
            $city->update($input);
            return redirect()->route('cities')->with(['success' => 'تم تعديل البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('cities.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $city = City::find($id);
            $status = $city->active == 0 ? 1 : 0;
            $city->update(['active' => $status]);
            return redirect()->route('cities')->with(['success' => 'تم تغيير الحالة بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('cities')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $city = City::with('areas')->find($id);
            if (!$city) {
                return redirect()->route('cities')->with(['error' => 'هذه المدينة غير موجودة']);
            }
            $city->delete();
            return redirect()->route('cities')->with(['success' => 'تم حذف البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('cities')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {
            $city = City::onlyTrashed()->with('areas')->find($id);
            if (!$city) {
                return redirect()->route('cities')->with(['error' => 'هذه المدينة غير موجودة']);
            }
            $city->restore();
            return redirect()->route('cities')->with(['success' => 'تم استرجاع البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('cities')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $city = City::onlyTrashed()->with('areas')->find($id);
            if (!$city) {
                return redirect()->route('cities')->with(['error' => 'هذه المدينة غير موجودة']);
            }
            $city->forceDelete();
            return redirect()->route('cities')->with(['success' => 'تم حذف البيانات نهائيا بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('cities')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
}
