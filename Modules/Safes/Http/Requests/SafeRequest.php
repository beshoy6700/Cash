<?php

namespace Modules\Safes\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Modules\Safes\Entities\Safe;

class SafeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = Safe::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {
                return [
                    'name' => 'required|string|max:150|unique:safes,name',
                    'status' => 'required|in:0,1',
                    'company_id'=> 'required|exists:companies,id'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|string|max:150|unique:safes,name,' . $data->id,
                    'status' => 'nullable|in:0,1',
                    'company_id'=> 'required|exists:companies,id'
                ];

            }
            default:
                break;
        }
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
