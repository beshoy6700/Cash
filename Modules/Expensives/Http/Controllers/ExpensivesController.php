<?php

namespace Modules\Expensives\Http\Controllers;

use App\Traits\AdminTrait;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Expensives\Entities\Expensive;
use Modules\Expensives\Http\Enumeration\ExpensiveType;
use Modules\Expensives\Http\Requests\ExpensiveRequest;
use Modules\Incomes\Entities\Income;

class ExpensivesController extends Controller
{
    use AdminTrait;

    private $repository;

    /**
     * ExpensivesController constructor.
     * @param Expensive $expensive
     */
    public function __construct(Expensive $expensive)
    {
        $this->middleware('auth');
        $this->repository = new Repository($expensive);
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        try {
            $expensives = $this->repository->all();
            if (!$expensives) {
                return $this->returnError('dashboard', 'عفوا لا توجد بيانات');
            }
            return view('expensives::index', compact('expensives'));
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
        try {
            $expensives = Expensive::MainExpensive()->pluck('name', 'id');
            return view('expensives::create', compact('expensives'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('dashboard');
        }
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(ExpensiveRequest $request)
    {
        try {
            $user_id = auth()->user()->id;
            $this->statusRequest($request, 'status');

            if ($request->type == ExpensiveType::mainExpensive) // Main Expensive
            {
                $request->request->add(['parent_id' => null]);
            }
            $input = $request->all();
            $input['user_id'] = $user_id;

            $expensive = $this->repository->create($input);
            return $this->returnSuccessMessage('expensives.create', 'تم إضافة البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives.create');
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
            $expensive = $this->repository->findById($id);
            if (!$expensive) {
                return $this->returnError('expensives', __('هذا التصنيف غير موجود'));
            }
            return view('expensives::show', compact('expensive'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives');
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
            $expensive = $this->repository->show($id);
            $expensives = Expensive::MainExpensive()->pluck('name', 'id');
            if (!$expensive) {
                return $this->returnError('expensives', 'هذا التصنيف غير موجود');
            }
            return view('expensives::edit', compact('expensive'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives');
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        try {
            $this->statusRequest($request, 'status');
            $input = $request->all();
            $expensive = $this->repository->show($id);
            if (!$expensive) {
                return $this->returnError('expensives', 'هذا التصنيف غير موجود');
            }
            $this->repository->update($input, $id);
            return $this->returnSuccessMessage('expensives', 'تم تعديل البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $income = $this->repository->show($id);
            if (!$income) {
                return $this->returnError('expensives', 'هذا التصنيف غير موجود');
            }
            $this->repository->ChangeStatus($id, 'status');
            return $this->returnSuccessMessage('expensives', 'تم تغيير الحالة بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives');
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        $expensive = $this->repository->show($id);
        try {
            if (!$expensive) {
                return $this->returnError('expensive', 'هذا التصنيف غير موجود');
            }
            $this->repository->delete($id);
            return $this->returnSuccessMessage('expensives', 'تم حذف البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives');
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {

            $expensive = $this->repository->showTrashed($id);
            if (!$expensive) {
                return $this->returnError('expensives', 'هذا التصنيف غير موجود');
            }
            $this->repository->restore($id);
            return $this->returnSuccessMessage('expensives', 'تم استرجاع البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $expensive = $this->repository->showTrashed($id);
            if (!$expensive) {
                return $this->returnError('expensives', 'هذا التصنيف غير موجود');
            }
            $this->repository->deleteForEver($id);
            return $this->returnSuccessMessage('expensives', 'تم حذف البيانات نهائيابنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('expensives');
        }
    }
}
