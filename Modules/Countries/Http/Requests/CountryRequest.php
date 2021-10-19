<?php

namespace Modules\Countries\Http\Requests;


use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Foundation\Http\FormRequest;
use Modules\Countries\Entities\Country;

class CountryRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = Country::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    //  'name','slug','lat','long','status','admin_id'
                return [
                    'name' => 'required|string|max:150|unique:countries,name',
                    'slug' => 'required|string|unique:countries,slug',
                    'lat' => 'nullable|string',
                    'long' => 'nullable|string',
                    'status' => 'required|in:0,1',
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|string|max:150|unique:countries,name,' . $data->id,
                    'slug' => 'required|string|unique:countries,slug,' . $data->id,
                    'lat' => 'nullable|string',
                    'long' => 'nullable|string',
                    'status' => 'nullable|in:0,1',
                ];

            }
            default:
                break;
        }
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'required' => 'هذا الحقل مطلوب',
            'unique' => 'هذا الاسم مسجل من قبل في قاعدة البيانات',
            'string' => 'هذا الحقل لابد ان يكون أحرف',
            'max' => 'هذا الحقل لابد الا يزيد عن 150 احرف',
            'in' => 'القيمة المدخلة غير صحيحة'
        ];
    }

    public function sanitize()
    {
        $input = $this->all();
        $input['name'] = filter_var($input['name'], FILTER_SANITIZE_STRING);
        $input['slug'] = filter_var($input['slug'], FILTER_SANITIZE_STRING);
        $input['lat'] = filter_var($input['lat'], FILTER_SANITIZE_STRING);
        $input['long'] = filter_var($input['long'], FILTER_SANITIZE_STRING);
        $input['status'] = filter_var($input['status'], FILTER_SANITIZE_NUMBER_INT);
        $this->replace($input);
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
        //return $this->user()->can('create.countries');
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
