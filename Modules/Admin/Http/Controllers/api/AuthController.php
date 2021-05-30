<?php

namespace Modules\Admin\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\GeneralTrait;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;
use \Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use GeneralTrait;

    public function login(Request $request)
    {
        try {
            if ($request->has('email')) {
                $rules = [
                    "email" => "required|exists:admins,email",
                    "password" => "required"
                ];
            } elseif ($request->has('username')) {
                $rules = [
                    "username" => "required|exists:admins,username",
                    "password" => "required"
                ];
            }

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $code = $this->returnCodeAccordingToInput($validator);
                return $this->returnValidationError($code, $validator);
            }
            //login
            if ($request->has('email')) {
                $credentials = $request->only(['email', 'password']);
            } elseif ($request->has('username')) {
                $credentials = $request->only(['username', 'password']);
            }

            $token = Auth::guard('admin-api')->attempt($credentials);
            if (!$token) {
                return $this->returnError('E001', 'بيانات الدخول غير صحيحة');
            }
            $admin = Auth::guard('admin-api')->user();
            $admin->token = $token;
            $admin->role = 'Admin';
            //return token
            return response()->json($admin);
         //   return $this->returnData('data', $admin);
        } catch (\Exception $ex) {
            return $this->returnError($ex->getCode(), $ex->getMessage());
        }

    }

    public function logout(Request $request)
    {
        $token = $request->header('auth-token');
        if ($token) {
            try {
                JWTAuth::setToken($token)->invalidate(); //logout
            } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
                return $this->returnError('', 'some thing went wrongs');
            }
            return $this->returnSuccessMessage('Logged out successfully');
        } else {
            $this->returnError('', 'some thing went wrongs');
        }
    }
}
