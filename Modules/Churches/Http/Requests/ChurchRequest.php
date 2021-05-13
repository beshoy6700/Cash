<?php

namespace Modules\Churches\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Churches\Entities\Church;

class ChurchRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = Church::find($this->id);
        switch($this->method())
        {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    // 'name','address','mobile','phone','active','admin_id'
                return [
                    'name' => 'required|string|unique:churches,name',
                    'address' => 'required|string',
                    'mobile' => 'required|digits:11|unique:churches,mobile|regex:/^([0-9\s\-\+\(\)]*)$/',
                    'phone' => 'nullable|digits:11|regex:/^([0-9\s\-\+\(\)]*)$/',
                    'active' => 'required|in:0,1',
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|string|unique:churches,name,'.$data->id,
                    'address' => 'required|string',
                    'mobile' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|digits:11|unique:churches,mobile,'.$data->id,
                    'phone' => 'nullable|digits:11|regex:/^([0-9\s\-\+\(\)]*)$/',
                    'active' => 'nullable|in:0,1',
                ];

            }
            default:break;
        }
    }
    /**
     * @return array
     */
    public function messages()
    {
        return [
            'required' => 'هذا الحقل مطلوب',
            'name.unique' => 'اسم الكنيسة مسجل من قبل في قاعدة البيانات',
            'mobile.unique' => 'رقم الموبايل مسجل من قبل في قاعدة البيانات',
            'name.string' => 'اسم الكنيسة لابد ان يكون أحرف',
            'name.max' => 'اسم الكنيسة لابد الا يزيد عن 100 احرف',
            'digits' => 'رقم الموبايل لابد ان يكون 11 رقم',
            'regex' => 'رقم الموبايل لابد ان يكون ارقام',
            'in' => 'القيمة المدخلة غير صحيحة'
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
}
