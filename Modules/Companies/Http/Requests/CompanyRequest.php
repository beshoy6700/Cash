<?php

namespace Modules\Companies\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Modules\Companies\Entities\Company;
use Modules\Companies\Http\Enumeration\CompanyType;

class CompanyRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = Company::find($this->id);

        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    //   'name', 'parent_id', 'slug', 'status', 'area_id', 'sub_area_id', 'user_id'
                return [
                    'name' => 'required|unique:companies,name',
                    'slug' => 'required|string|unique:companies,slug',
                    'type' => ['required','in:'.CompanyType::mainCompany.','.CompanyType::mainCompany],
                    'status' => 'required|in:0,1',
                    'area_id' =>'nullable|exists:areas,id',
                    'city_id' =>'nullable|exists:cities,id',
                    'parent_id' => 'nullable|exists:companies,id'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|unique:companies,name,'. $data->id,
                    'slug' => 'required|string|unique:companies,slug,'. $data->id,
                    'type' => ['required','in:'.CompanyType::mainCompany.','.CompanyType::mainCompany],
                    'status' => 'nullable|in:0,1',
                    'area_id' =>'nullable|exists:areas,id',
                    'city_id' =>'nullable|exists:cities,id',
                    'parent_id' => 'nullable|exists:companies,id'
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
