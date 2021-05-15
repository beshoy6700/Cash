<?php

namespace Modules\Users\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
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
            $rules = [
                "email" => "required|exists:users,email",
                "password" => "required"
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $code = $this->returnCodeAccordingToInput($validator);
                return $this->returnValidationError($code, $validator);
            }
            //login
            $credentials = $request->only(['email', 'password']);
            $token = Auth::guard('user-api')->attempt($credentials);
            if (!$token) {
                return $this->returnError('E001', 'بيانات الدخول غير صحيحة');
            }
            $user = Auth::guard('user-api')->user();
            $user->api_token = $token;
            //return token
            return $this->returnData('user', $user);
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
    public function profile(Request $request)
    {
        try {

        }catch (\Exception $ex){
            $this->returnError('', 'some thing went wrongs');
        }
        return response()->json();
    }
}
