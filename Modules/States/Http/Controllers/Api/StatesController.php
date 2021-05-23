<?php

namespace Modules\States\Http\Controllers\Api;

use App\Traits\AdminTrait;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Countries\Entities\Country;
use Modules\States\Entities\State;
use Modules\States\Http\Requests\StateRequest;

class StatesController extends Controller
{
    use GeneralTrait;

    /**
     * StatesController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth.guard:admin-api');
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function getList()
    {
        try {
            $data = State::selection()->orderBy('id', 'DESC')->get();
            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            return $this->returnData('states', $data);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create(StateRequest $request)
    {
        try {
            $admin_id = auth()->user()->id;
            $input = $request->all();
            $input['admin_id'] = $admin_id;
            $state = State::create($input);
            return $this->returnData($state);
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
            $data = State::find($id);
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
