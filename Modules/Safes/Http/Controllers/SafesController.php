<?php

namespace Modules\Safes\Http\Controllers;

use App\Repository\Repository;
use App\Traits\AdminTrait;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Companies\Entities\Company;
use Modules\Safes\Entities\Safe;
use Modules\Safes\Http\Requests\SafeRequest;

class SafesController extends Controller
{
    use AdminTrait;

    private $user_id;
    private $repository;

    /**
     * CompaniesController constructor.
     * @param Safe $safe
     */
    public function __construct(Safe $safe)
    {
        $this->middleware('auth');
        $this->repository = new Repository($safe);
    }
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        try {
            $safes = $this->repository->all();
            if (!$safes) {
                return $this->returnError('dashboard', 'عفوا لا توجد بيانات');
            }
            return view('safes::index', compact('safes'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('dashboard');
        }
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        $companies = Company::Active()->pluck('name','id');
        return view('safes::create',compact('companies'));
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(SafeRequest $request)
    {
        try {
            $this->user_id = auth()->user()->id;
            $input = $request->all();
            $input['user_id'] = $this->user_id;
            Safe::create($input);
            return redirect()->route('safes.create')->with(['success' => 'تم اضافة البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('safes.create')->withInput($input)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        try {
            $safe = Safe::find($id);
            if (!$safe) {
                return redirect()->route('safes')->with(['error' => 'هذة الخزينة غير موجودة']);
            }
            return view('safes::show', compact('safe'));
        } catch (\Exception $ex) {
            return redirect()->route('safes')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        try {
            $safe = Safe::find($id);
            $companies = Company::Active()->pluck('name', 'id');
            if (!$safe) {
                return redirect()->route('safes')->with(['error' => 'هذة الخزينة غير موجودة']);
            }
            return view('safes::edit', compact('safe', 'companies'));
        } catch (\Exception $ex) {
            return redirect()->route('safes.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }

    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(SafeRequest $request, $id)
    {
        try {
            $this->user_id = auth()->user()->id;
            $safe = Safe::find($id);
            if (!$safe) {
                return redirect()->route('safes.edit', $id)->with(['error' => 'هذه الخزينة غير موجودة']);
            }
            $input=$request->all();
            $this->statusRequest($request);
            $safe->update($input);
            return redirect()->route('safes')->with(['success' => 'تم تعديل البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('safes.edit', $id)->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $safe = Safe::find($id);
            $status = $safe->status == 0 ? 1 : 0;
            $safe->update(['status' => $status]);
            return redirect()->route('safes')->with(['success' => 'تم تغيير الحالة بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('safes')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        try {
            $safe = Safe::find($id);
            if (!$safe) {
                return redirect()->route('safes')->with(['error' => 'هذه الخزينة غير موجودة']);
            }
            $safe->delete();
            return redirect()->route('safes')->with(['success' => 'تم حذف البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('safes')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {
            $safe = Safe::onlyTrashed()->find($id);
            if (!$safe) {
                return redirect()->route('safes')->with(['error' => 'هذه الخزينة غير موجودة']);
            }
            $safe->restore();
            return redirect()->route('safes')->with(['success' => 'تم استرجاع البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('safes')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $safe = Safe::onlyTrashed()->find($id);
            if (!$safe) {
                return redirect()->route('safes')->with(['error' => 'هذه الخزينة غير موجودة']);
            }
            $safe->forceDelete();
            return redirect()->route('safes')->with(['success' => 'تم حذف البيانات نهائيا بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->route('safes')->with(['error' => 'لقد حدث خطأ برجاء المحاولة فيما بعد']);
        }
    }
}
