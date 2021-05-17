<?php

namespace Modules\Roles\Http\Controllers;

use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Routing\Controller;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    use GeneralTrait;

    /**
     * RolesController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth.guard:admin-api');
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function getList(Request $request)
    {
        try {
            $data = Role::select('name', 'guard_name')->with(['permissions' => function ($q) {
                $q->select('name', 'guard_name');
            }])->get();
            if (!$data) {
                return $this->returnError('E001', 'خطأ (E001) لا توجد بيانات');
            }
            return $this->returnData('roles', $data);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }

    }

    /**
     * Show the form for creating a new resource.
     * @return \Illuminate\Http\JsonResponse
     */
    public function createRole(Request $request)
    {
        try {
            // Create a manager role for users authenticating with the admin guard:
            $role = Role::create([
                'name' => $request->name,
                'guard_name' => $request->guard_name
            ]);
            return $this->returnSuccessMessage('تم اضافة البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage($ex));
        }
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createPermission(Request $request)
    {
        try {
            $data = $request->all();
            $model = Permission::create([
                'name' => $data['name'],
                'guard_name' => $data['guard_name']
            ]);
            $model->assignRole($data['role']);
            /* for ($i = 0; $i < count($data['role']); $i++) {
                 $model->assignRole($data['role'][$i]);
             }*/
            return $this->returnSuccessMessage('تم اضافة البيانات بنجاح');
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {

        return view('roles::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('roles::edit');
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
     * @param Request $request
     * @return array
     */
    public function assignRole(Request $request)
    {
        try {
            $roles = $request->roles;
            $user = auth()->user();
            $user->assignRole($roles);
            return $this->returnSuccessMessage();
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }

    }
    /**
     * @param Request $request
     * @return array
     */
    public function assignPermission(Request $request)
    {
        try {
            $permission = $request->permission;
            $user = auth()->user();
            $user->givePermissionTo($permission);
            return $this->returnSuccessMessage();
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }

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
