<?php


namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Admin\Entities\Admin;
use Modules\Admin\Http\Requests\ProfileRequest;

class ProfileController extends Controller
{
    public function editProfile()
    {
        $id = auth('admin')->user()->id;
        $admin = Admin::find($id);
        $admin->password = '';
        return view('admin::editProfile', compact('admin'));
    }

    public function updateProfile(ProfileRequest $request)
    {
        try {
            $id = auth('admin')->user()->id;
            $admin = Admin::find($id);
            if ($request->filled('password')){
             $request->merge(['password'=>bcrypt($request->password)]);
            }
            unset($request['id'],$request['password_confirmation']);
            $admin->update($request->all());
            return redirect()->back()->with(['success' => 'تم تحديث البيانات بنجاح']);
        } catch (\Exception $ex) {
            return redirect()->back()->with(['error' => 'هناك خطأ ما يرجي المحاولة فيما بعد'.$ex]);
        }
    }
}