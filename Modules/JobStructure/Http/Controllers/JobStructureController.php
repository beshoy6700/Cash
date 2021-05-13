<?php

namespace Modules\JobStructure\Http\Controllers;

use App\Repository\Repository;
use App\Traits\AdminTrait;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\JobStructure\Http\Enumeration\JobType;
use Modules\JobStructure\Entities\JobStructure;
use Modules\JobStructure\Http\Requests\JobStructureRequst;


class JobStructureController extends Controller
{
    use AdminTrait;

    private $user_id;
    private $repository;

    /**
     * JobStructureController constructor.
     * @param JobStructure $jobStructure
     */
    public function __construct(JobStructure $jobStructure)
    {
        $this->middleware('auth');
        $this->repository = new Repository($jobStructure);
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        try {
            $jobs = $this->repository->all();
            if (!$jobs) {
                return $this->returnError('dashboard', 'عفوا لا توجد بيانات');
            }
            return view('jobstructure::index', compact('jobs'));
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
        $jobs = JobStructure::whereNull('parent_id')->pluck('name', 'id');
        return view('jobstructure::create', compact('jobs'));
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(JobStructureRequst $request)
    {
        try {
            $this->user_id = auth()->user()->id;
            $this->statusRequest($request, 'status');

            if ($request->type == JobType::mainJob) // Main Job
            {
                $request->request->add(['parent_id' => null]);
            }
            $input = $request->all();
            $input['user_id'] = $this->user_id;
            $job = $this->repository->create($input);
            return $this->returnSuccessMessage('jobStructure.create', 'تم إضافة البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure.create');
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
            $job = $this->repository->findById($id);
            if (!$job) {
                return $this->returnError('jobStructure', 'هذة الوظيفة غير موجودة');
            }
            return view('jobstructure::show', compact('job'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure');
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
            $job = $this->repository->show($id);
            $jobs = JobStructure::whereNull('parent_id')->pluck('name', 'id');
            if (!$job) {
                return $this->returnError('jobStructure', 'هذة الوظيفة غير موجودة');
            }
            return view('jobstructure::edit', compact('jobs', 'job'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure');
        }

    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(JobStructureRequst $request, $id)
    {
        try {
            $this->statusRequest($request, 'status');
            $input = $request->all();
            $job = $this->repository->show($id);
            if (!$job) {
                return $this->returnError('jobStructure', 'هذة الوظيفة غير موجودة');
            }
            $this->repository->update($input, $id);
            return $this->returnSuccessMessage('jobStructure', 'تم تعديل البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $job = $this->repository->show($id);
            if (!$job) {
                return $this->returnError('jobStructure', 'هذة الوظيفة غير موجودة');
            }
            $this->repository->ChangeStatus($id, 'status');
            return $this->returnSuccessMessage('jobStructure', 'تم تغيير الحالة بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure');
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        $job = $this->repository->show($id);
        try {
            if (!$job) {
                return $this->returnError('jobStructure', 'هذة الوظيفة غير موجودة');
            }
            $this->repository->delete($id);
            return $this->returnSuccessMessage('jobStructure', 'تم حذف البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {

            $job = $this->repository->showTrashed($id);
            if (!$job) {
                return $this->returnError('jobStructure', 'هذة الوظيفة غير موجودة');
            }
            $this->repository->restore($id);
            return $this->returnSuccessMessage('jobStructure', 'تم استرجاع البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $job = $this->repository->showTrashed($id);
            if (!$job) {
                return $this->returnError('jobStructure', 'هذة الوظيفة غير موجودة');
            }
            $this->repository->deleteForEver($id);
            return $this->returnSuccessMessage('jobStructure', 'تم حذف البيانات نهائيابنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('jobStructure');
        }
    }
}
