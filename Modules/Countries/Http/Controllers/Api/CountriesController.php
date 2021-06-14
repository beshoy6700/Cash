<?php

namespace Modules\Countries\Http\Controllers\Api;


use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Countries\Entities\Country;
use Modules\Countries\Http\Requests\CountryRequest;

class CountriesController extends Controller
{
    use GeneralTrait;

    /**
     * to save the admin who login
     * @var
     */

    /**
     * CountriesController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth.guard:admin-api');
    }

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function getList()
    {
        try {
            $data = Country::selection()->orderBy('id', 'DESC')->get();
        //    $data['active'] = $data->active();
            // $data = Country::selection()->orderBy('id', 'DESC')->get();

            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            return $this->returnData('countries', $data);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create(CountryRequest $request)
    {
        try {
            $admin_id = auth()->user()->id;
            $input = $request->all();
            $input['admin_id'] = $admin_id;
            /*       $validated = $request->validated();
                   return $validated;*/
            $country = Country::create($input);
            return $this->returnData('country',$country);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
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
            $data = Country::find($id);
            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            return $this->returnData('country', $data);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit(CountryRequest $request)
    {
        try {
            $input['admin_id'] = auth()->user()->id;
            $this->statusRequest($request);
            $input = $request->all();
            $data = Country::find($request->id);
            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            $data->update($input);
            return $this->returnData('country', $data);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
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
            $country->update(['active' => $status]);
            return redirect()->route('countries')->with(['success' => 'تم تغيير الحالة بنجاح']);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
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
            $data = Country::with('states')->find($id);
            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            $data->delete();
            return $this->returnSuccessMessage('تم حذف البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {
            $data = Country::onlyTrashed()->with('states')->find($id);
            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            $data->restore();
            return $this->returnSuccessMessage('تم استرجاع البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $data = Country::onlyTrashed()->with('states')->find($id);
            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            $data->forceDelete();
            return $this->returnSuccessMessage('تم حذف البيانات نهائيا بنجاح');
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }
    }
}
