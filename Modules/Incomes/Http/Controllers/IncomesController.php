<?php

namespace Modules\Incomes\Http\Controllers;

use App\Repository\Repository;
use App\Traits\AdminTrait;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Incomes\Entities\Income;
use Modules\Incomes\Http\Enumeration\IncomeType;
use Modules\Incomes\Http\Requests\IncomeRequest;

class IncomesController extends Controller
{
    use AdminTrait;

    private $repository;

    /**
     * IncomesController constructor.
     * @param Income $income
     */
    public function __construct(Income $income)
    {
        $this->middleware('auth');
        $this->repository = new Repository($income);
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        try {
            $incomes = $this->repository->all();
            if (!$incomes) {
                return $this->returnError('dashboard', 'عفوا لا توجد بيانات');
            }
            return view('incomes::index', compact('incomes'));
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
            $incomes = Income::whereNull('parent_id')->pluck('name', 'id');
            return view('incomes::create', compact('incomes'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('dashboard');
        }
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(IncomeRequest $request)
    {
        try {
            $user_id = auth()->user()->id;
            $this->statusRequest($request, 'status');

            if ($request->type == IncomeType::mainIncome) // Main Income
            {
                $request->request->add(['parent_id' => null]);
            }
            $input = $request->all();
            $input['user_id'] = $user_id;

            $income = $this->repository->create($input);
            return $this->returnSuccessMessage('incomes.create', 'تم إضافة البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes.create');
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
            $income = $this->repository->findById($id);
            if (!$income) {
                return $this->returnError('incomes', __('هذا التصنيف غير موجود'));
            }
            return view('incomes::show', compact('income'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes');
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
            $income = $this->repository->show($id);
            $incomes = Income::whereNull('parent_id')->pluck('name', 'id');
            if (!$income) {
                return $this->returnError('incomes', 'هذا التصنيف غير موجود');
            }
            return view('incomes::edit', compact('incomes', 'income'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes');
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(IncomeRequest $request, $id)
    {
        try {
            $this->statusRequest($request, 'status');
            $input = $request->all();
            $income = $this->repository->show($id);
            if (!$income) {
                return $this->returnError('incomes', 'هذا التصنيف غير موجود');
            }
            $this->repository->update($input, $id);
            return $this->returnSuccessMessage('incomes', 'تم تعديل البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes');
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
                return $this->returnError('incomes', 'هذا التصنيف غير موجود');
            }
            $this->repository->ChangeStatus($id, 'status');
            return $this->returnSuccessMessage('incomes', 'تم تغيير الحالة بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes');
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        $income = $this->repository->show($id);
        try {
            if (!$income) {
                return $this->returnError('incomes', 'هذا التصنيف غير موجود');
            }
            $this->repository->delete($id);
            return $this->returnSuccessMessage('incomes', 'تم حذف البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {

            $income = $this->repository->showTrashed($id);
            if (!$income) {
                return $this->returnError('incomes', 'هذا التصنيف غير موجود');
            }
            $this->repository->restore($id);
            return $this->returnSuccessMessage('incomes', 'تم استرجاع البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $income = $this->repository->showTrashed($id);
            if (!$income) {
                return $this->returnError('incomes', 'هذا التصنيف غير موجود');
            }
            $this->repository->deleteForEver($id);
            return $this->returnSuccessMessage('incomes', 'تم حذف البيانات نهائيابنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('incomes');
        }
    }
}
