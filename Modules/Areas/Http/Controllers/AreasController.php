<?php

namespace Modules\Areas\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Areas\Entities\Area;
use Modules\Areas\Http\Requests\AreaRequest;
use Modules\Cities\Entities\City;

class AreasController extends Controller
{
    /**
     * to save the admin who login
     * @var
     */
    public $admin_id;

    /**
     * AreasController constructor.
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
            $areas = Area::selection()->orderBy('id', 'DESC')->paginate(PAGINATION_COUNT);
            return view('areas::index', compact('areas'));
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
            $cities = City::pluck('name', 'id');
            if (!$cities) {
                return redirect()->route('areas::index')->with(['error' => 'برجاء التأكد من إضافة المدينة اولا ثم اضافة المنطقه']);
            }
            return view('areas::create', compact('cities'));
        } catch (\Exception $ex) {
            return redirect()->route('areas::index')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);

        }
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(AreaRequest $request)
    {
        try {
            $this->admin_id = auth()->user()->id;
            $input = $request->all();
            $input['user_id'] = $this->admin_id;
            Area::create($input);
            return redirect()->route('areas.create')->with(['success' => 'تم اضافة البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('areas.create')->withInput($input)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $area = Area::find($id);
            if (!$area) {
                return redirect()->route('areas')->with(['error' => 'هذة المنطقة غير موجودة']);
            }
            return view('areas::show', compact('area'));
        } catch (\Exception $ex) {
            return redirect()->route('areas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $area = Area::find($id);
            $cities = City::pluck('name', 'id');
            if (!$cities) {
                return redirect()->route('areas')->with(['error' => 'هذة المنطقة غير موجودة']);
            }
            return view('areas::edit', compact('area', 'cities'));
        } catch (\Exception $ex) {
            return redirect()->route('areas.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(AreaRequest $request, $id)
    {
        try {
            $this->admin_id = auth()->user()->id;
            $area = Area::find($id);
            if (!$area) {
                return redirect()->route('areas.edit', $id)->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            if (!$request->has('active')) {
                $request->request->add(['active' => 0]);
            }
            $area->update($request->except('_token'));
            return redirect()->route('areas')->with(['success' => 'تم تعديل البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('areas.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $area = Area::find($id);
            $status = $area->active == 0 ? 1 : 0;
            $area->update(['active' => $status]);
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
            $area = Area::with('subAreas')->find($id);
            if (!$area) {
                return redirect()->route('areas')->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            $area->delete();
            return redirect()->route('areas')->with(['success' => 'تم حذف البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('areas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {
            $area = Area::onlyTrashed()->with('subAreas')->find($id);
            if (!$area) {
                return redirect()->route('areas')->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            $area->restore();
            return redirect()->route('areas')->with(['success' => 'تم استرجاع البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('areas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $area = Area::onlyTrashed()->with('subAreas')->find($id);
            if (!$area) {
                return redirect()->route('areas')->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            $area->forceDelete();
            return redirect()->route('areas')->with(['success' => 'تم حذف البيانات نهائيا بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('areas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
}
