<?php

namespace Modules\Churches\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Modules\Churches\Entities\Church;
use Modules\Churches\Http\Requests\ChurchRequest;
use Spatie\Activitylog\Models\Activity;

class ChurchesController extends Controller
{
    /**
     * ChurchesController constructor.
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
          //  return Activity::all()->last();
           // return Auth::user()->activity;
            $churches = Church::selection()->paginate(PAGINATION_COUNT);
            return view('churches::index',compact('churches'));
        }catch (\Exception $ex){
            return redirect()->route('admin.dashboard')->with(['error'=>'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('churches::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(ChurchRequest $request)
    {
        try {
            $input = $request->all();
            $input['admin_id'] = 1;//auth('admin')->user()->id;
            Church::create($input);
            return redirect()->route('admin.churches.create')->with(['success' => 'تم اضافة البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.churches.create')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        return view('churches::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        $church = Church::selection()->find($id);
        if (!$church) {
            return redirect()->route('admin.churches')->with(['error' => 'هذه الكنيسة غير موجودة']);
        }
        return view('churches::edit', compact('church'));
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(ChurchRequest $request, $id)
    {
        try {
            $church = Church::selection()->find($id);
            if (!$church) {
                return redirect()->route('admin.churches.edit', $id)->with(['error' => 'هذه الكنيسة غير موجودة']);
            }
            if (!$request->has('active')) {
                $request->request->add(['active' => 0]);
            }
            $church->update($request->except('_token'));
            return redirect()->route('admin.churches')->with(['success' => 'تم تعديل البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.churches.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);

        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
   public function ChangeStatus($id)
   {
       try {
            $church = Church::find($id);
           $status = $church->active == 0 ? 1 : 0;
           $church->update(['active'=> $status ]);
           return redirect()->route('admin.churches')->with(['success' => 'تم تغيير الحالة بنجاح']);
       }catch (\Exception $ex){
           return redirect()->route('admin.churches')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
       }
   }
    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Response
     */
    public function deleted($id)
    {
        try {
            $church = Church::select()->find($id);
            if (!$church) {
                return redirect()->route('admin.churches')->with(['error' => 'هذه الكنيسة غير موجودة']);
            }
            $church->delete();
            return redirect()->route('admin.churches')->with(['success' => 'تم حذف البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('admin.churches.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    public function restored(Church $church)
    {

    }

    public function forceDeleted(Church $church)
    {
        //
    }
}
