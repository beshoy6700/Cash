<?php

namespace Modules\SubAreas\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Areas\Entities\Area;
use Modules\SubAreas\Entities\SubArea;
use Modules\SubAreas\Http\Requests\SubAreaRequest;

class SubAreasController extends Controller
{
    /**
     * to save the admin who login
     * @var
     */
    public $admin_id;

    /**
     * SubAreasController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        try {
            $subAreas = SubArea::selection()->orderBy('id', 'DESC')->paginate(PAGINATION_COUNT);
            return view('subareas::index', compact('subAreas'));
        } catch (\Exception $ex) {
            return redirect()->route('admin.dashboard')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        try {
            $areas = Area::pluck('name', 'id');
            if (!$areas) {
                return redirect()->route('admin.subAreas')->with(['error' => 'برجاء التأكد من إضافة المدينة اولا ثم اضافة المنطقه']);
            }
            return view('subareas::create', compact('areas'));
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);

        }
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(SubAreaRequest $request)
    {
        try {
            $this->admin_id = auth('admin')->user()->id;
            $input = $request->all();
            $input['admin_id'] = $this->admin_id;
            SubArea::create($input);
            return redirect()->route('admin.subAreas.create')->with(['success' => 'تم اضافة البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas.create')->withInput($input)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
                return redirect()->route('admin.subAreas')->with(['error' => 'هذة المنطقة غير موجودة']);
            }
            return view('subareas::show', compact('area'));
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $subarea = Area::find($id);
            $areas = Area::pluck('name', 'id');
            if (!$areas) {
                return redirect()->route('admin.subAreas')->with(['error' => 'هذة المنطقة غير موجودة']);
            }
            return view('subareas::edit', compact('areas', 'subarea'));
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(SubAreaRequest $request, $id)
    {
        try {
            $this->admin_id = auth('admin')->user()->id;
            $subarea = SubArea::find($id);
            if (!$subarea) {
                return redirect()->route('admin.subAreas.edit', $id)->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            if (!$request->has('active')) {
                $request->request->add(['active' => 0]);
            }
            $subarea->update($request->except('_token'));
            return redirect()->route('admin.subAreas')->with(['success' => 'تم تعديل البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $subArea = SubArea::find($id);
            $status = $subArea->active == 0 ? 1 : 0;
            $subArea->update(['active' => $status]);
            return redirect()->route('admin.subAreas')->with(['success' => 'تم تغيير الحالة بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
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
            $subArea = SubArea::find($id);
            if (!$subArea) {
                return redirect()->route('admin.subAreas')->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            $subArea->delete();
            return redirect()->route('admin.subAreas')->with(['success' => 'تم حذف البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {
            $subArea = SubArea::onlyTrashed()->find($id);
            if (!$subArea) {
                return redirect()->route('admin.subAreas')->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            $subArea->restore();
            return redirect()->route('admin.subAreas')->with(['success' => 'تم استرجاع البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete($id)
    {
        try {
            $subArea = SubArea::onlyTrashed()->find($id);
            if (!$subArea) {
                return redirect()->route('admin.subAreas')->with(['error' => 'هذه المنطقة غير موجودة']);
            }
            $subArea->forceDelete();
            return redirect()->route('admin.subAreas')->with(['success' => 'تم حذف البيانات نهائيا بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.subAreas')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
}
