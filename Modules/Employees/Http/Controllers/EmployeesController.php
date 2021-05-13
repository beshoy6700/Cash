<?php

namespace Modules\Employees\Http\Controllers;

use App\Repository\Repository;
use App\Traits\AdminTrait;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Queue\Jobs\Job;
use Illuminate\Routing\Controller;
use Modules\Employees\Entities\Employee;

class EmployeesController extends Controller
{
    use AdminTrait;
    private $user_id;
    private $repository;

    /**
     * EmployeesController constructor.
     * @param Employee $employee
     */
    public function __construct(Employee $employee)
    {
        $this->middleware('auth');
        $this->repository = new Repository($employee);
    }
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        try {
            $employees = $this->repository->all();
            if (!$employees) {
                return $this->returnError('dashboard', 'عفوا لا توجد بيانات');
            }
            return view('employees::index', compact('employees'));
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

        return view('employees::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('employees::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('employees::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
