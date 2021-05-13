<?php

namespace Modules\Countries\Http\Controllers;

use App\Traits\AdminTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Countries\Entities\Country;
use Modules\Countries\Http\Requests\CountryRequest;
use PHPUnit\Framework\Constraint\Count;

class CountriesController extends Controller
{
    use AdminTrait;
    /**
     * to save the admin who login
     * @var
     */
    public $admin_id;

    /**
     * CountriesController constructor.
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
              $countries = Country::selection()->orderBy('id','DESC')->paginate(PAGINATION_COUNT);
            return view('countries::index', compact('countries'));
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
        return view('countries::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(CountryRequest $request)
    {
        try {
            $this->admin_id = auth()->user()->id;
            $input = $request->all();
            $input['user_id'] = $this->admin_id;
            Country::create($input);
            return redirect()->route('countries.create')->with(['success' => 'تم اضافة البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('countries.create')->withInput($input)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $country = Country::find($id);
            if (!$country) {
                return redirect()->route('countries')->with(['error' => 'هذة الدولة غير موجودة']);
            }
            return view('countries::show',compact('country'));
        }catch (\Exception $ex){
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
            $country = Country::find($id);
            if (!$country) {
                return redirect()->route('countries')->with(['error' => 'هذة الدولة غير موجودة']);
            }
            return view('countries::edit',compact('country'));
        }catch (\Exception $ex){
            return redirect()->route('countries.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }

    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(CountryRequest $request, $id)
    {
        try {
            $this->admin_id = auth()->user()->id;
            $this->statusRequest($request);
            $input = $request->all();
            $country = Country::with(['states'])->find($id);
            if (!$country) {
                return redirect()->route('countries.edit', $id)->with(['error' => 'هذه الدولة غير موجودة']);
            }
            $country->update($input);
            return redirect()->route('countries')->with(['success' => 'تم تعديل البيانات بنجاح']);
        }catch (\Exception $ex){
            return redirect()->route('countries.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $country = Country::find($id);
            $status = $country->active == 0 ? 1 : 0;
            $country->update(['active'=> $status ]);
            return redirect()->route('countries')->with(['success' => 'تم تغيير الحالة بنجاح']);
        }catch (\Exception $ex){
            return redirect()->route('countries')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $country = Country::with('states')->find($id);
            if (!$country) {
                return redirect()->route('countries')->with(['error' => 'هذه الدولة غير موجودة']);
            }
            $country->delete();
            return redirect()->route('countries')->with(['success' => 'تم حذف البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('countries')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {
            $country = Country::onlyTrashed()->with('states')->find($id);
            if (!$country) {
                return redirect()->route('countries')->with(['error' => 'هذه الدولة غير موجودة']);
            }
            $country->restore();
            return redirect()->route('countries')->with(['success' => 'تم استرجاع البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('countries')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $country = Country::onlyTrashed()->with('states')->find($id);
            if (!$country) {
                return redirect()->route('countries')->with(['error' => 'هذه الدولة غير موجودة']);
            }
            $country->forceDelete();
            return redirect()->route('countries')->with(['success' => 'تم حذف البيانات نهائيا بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('countries')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
}
