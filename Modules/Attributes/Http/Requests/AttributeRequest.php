<?php

namespace Modules\Attributes\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class AttributeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
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
