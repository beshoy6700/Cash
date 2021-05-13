<?php

namespace Modules\Companies\Http\Controllers;

use App\Repository\Repository;
use App\Traits\AdminTrait;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Areas\Entities\Area;
use Modules\Cities\Entities\City;
use Modules\Companies\Entities\Company;
use Modules\Companies\Http\Enumeration\CompanyType;
use Modules\Companies\Http\Requests\CompanyRequest;

class CompaniesController extends Controller
{
    use AdminTrait;

    private $user_id;
    private $repository;

    /**
     * CompaniesController constructor.
     * @param Company $company
     */
    public function __construct(Company $company)
    {
        $this->middleware('auth');
        $this->repository = new Repository($company);
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        try {
            $companies = $this->repository->all();
            if (!$companies) {
                return $this->returnError('dashboard', 'عفوا لا توجد بيانات');
            }
            return view('companies::index', compact('companies'));
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

        $companies = Company::whereNull('parent_id')->pluck('name','id');
        $cities = City::pluck('name','id');
        $areas = Area::pluck('name','id');
        return view('companies::create', compact('companies','areas','cities'));
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(CompanyRequest $request)
    {
        try {
            $this->user_id = auth()->user()->id;
            $this->statusRequest($request,'status');

            if ($request->type == CompanyType::mainCompany) // Main Company
            {
                $request->request->add(['parent_id' => null]);
            }
            $input = $request->all();
            $input['user_id'] = $this->user_id;
            ####### Upload Logo ########
            if (!empty($input['logo'])) {
                $url = 'images/Companies/logo/';
                $name = $input['name'];
                $file = $input['logo'];
                $input['logo'] = $this->repository->upload($file, $name, $url);
            }
            $company = $this->repository->create($input);
            return $this->returnSuccessMessage('companies.create', 'تم إضافة البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies.create');
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
            $company = $this->repository->findById($id);
            if (!$company) {
                return $this->returnError('companies', __('هذة الشركة غير موجودة'));
            }
            return view('companies::show', compact('company'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies');
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
            $company = $this->repository->show($id);
            $companies = Company::whereNull('parent_id')->pluck('name','id');
            $cities = City::pluck('name','id');
            $areas = Area::pluck('name','id');
            if (!$company) {
                return $this->returnError('companies', 'هذة الشركة غير موجودة');
            }
            return view('companies::edit', compact('company', 'companies','cities','areas'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies');
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(CompanyRequest $request, $id)
    {
        try {
            $this->statusRequest($request,'status');
            $input = $request->all();
            $company = $this->repository->show($id);
            if (!$company) {
                return $this->returnError('companies', 'هذة الشركة غير موجودة');
            }
            ####### Upload Logo ########
            if (!empty($input['logo'])) {
                $url = 'images/Companies/logo/';
                $name = $company->name;
                $file = $input['logo'];
                $input['logo'] = $this->repository->upload($file, $name, $url);
            }
            $this->repository->update($input, $id);
            return $this->returnSuccessMessage('companies', 'تم تعديل البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function ChangeStatus($id)
    {
        try {
            $company = $this->repository->show($id);
            if (!$company) {
                return $this->returnError('companies', 'هذة الشركة غير موجودة');
            }
            $this->repository->ChangeStatus($id,'status');
            return $this->returnSuccessMessage('companies', 'تم تغيير الحالة بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies');
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        $company = $this->repository->show($id);
        try {
            if (!$company) {
                return $this->returnError('companies', 'هذة الشركة غير موجودة');
            }
            $this->repository->delete($id);
            return $this->returnSuccessMessage('companies', 'تم حذف البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore($id)
    {
        try {

            $company = $this->repository->showTrashed($id);
            if (!$company) {
                return $this->returnError('companies', 'هذة الشركة غير موجودة');
            }
            $this->repository->restore($id);
            return $this->returnSuccessMessage('companies', 'تم استرجاع البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies');
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function forceDeleted($id)
    {
        try {
            $company = $this->repository->showTrashed($id);
            if (!$company) {
                return $this->returnError('companies', 'هذة الشركة غير موجودة');
            }
            $this->repository->deleteForEver($id);
            return $this->returnSuccessMessage('companies', 'تم حذف البيانات نهائيابنجاح');
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('companies');
        }
    }
}
