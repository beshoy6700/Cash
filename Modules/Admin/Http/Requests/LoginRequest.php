<?php

namespace Modules\Admin\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class LoginRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'email|required|exists:admin,email',
            'password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'البريد الإلكتروني مطلوب.',
            'email.email' => 'ادخل عنوان بريد إلكتروني صالح.',
            'password.required' =>'',
            'email.exists' => 'البريد الالكتروني او كلمة غير مطابقين'
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

      /**
        *  For Api Validation
        */
        public function failedValidation(Validator $validator)
        {
            $errors = $validator->errors(); // Here is your array of errors
            $response = response()->json([
                'message' => $errors->messages(),
            ], 400);
            throw new HttpResponseException($response);
        }
}
