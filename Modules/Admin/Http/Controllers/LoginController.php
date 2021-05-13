<?php

namespace Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Admin\Http\Requests\LoginRequest;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function getLogin()
    {
        return view('admin::Login');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Response
     */
    public function store(LoginRequest $request)
    {
        $remember_me = $request->has('remember_me') ? true : false;
        if (auth()->guard('admin')->attempt(['email' => $request->input('email'),
            'password' => $request->input('password')])) {
            return redirect()->route('admin.dashboard');
        }

        return redirect()->back()->with(['error' => 'email or password dont match']);
    }

    /***
     *  logout
     */
    public function logout()
    {
        $guard = $this->getGuard();
        $guard->logout();
        return redirect()->route('admin.login');
    }

    private function getGuard()
    {
        return auth('admin');
    }

}
