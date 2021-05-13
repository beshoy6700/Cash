<?php

namespace Modules\SubAreas\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\SubAreas\Entities\SubArea;

class SubAreaRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = SubArea::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    //  'name','slug','lat','long','active','state_id','admin_id'
                return [
                    'name' => 'required|string|max:150|unique:sub_areas,name',
                    'slug' => 'required|string|unique:sub_areas,slug',
                    'lat' => 'nullable|string',
                    'long' => 'nullable|string',
                    'active' => 'required|in:0,1',
                    'area_id'=> 'required|exists:areas,id'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|string|max:150|unique:sub_areas,name,' . $data->id,
                    'slug' => 'required|string|unique:sub_areas,slug,' . $data->id,
                    'lat' => 'nullable|string',
                    'long' => 'nullable|string',
                    'active' => 'required|in:0,1',
                    'area_id'=> 'required|exists:areas,id'
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
            'in' => 'القيمة المدخلة غير صحيحة',
            'area_id.exists' => 'يجب ان تختار من هذه القائمة'
        ];
    }

    public function sanitize()
    {
        $input = $this->all();
        $input['name'] = filter_var($input['name'], FILTER_SANITIZE_STRING);
        $input['slug'] = filter_var($input['slug'], FILTER_SANITIZE_STRING);
        $input['lat'] = filter_var($input['lat'], FILTER_SANITIZE_STRING);
        $input['long'] = filter_var($input['long'], FILTER_SANITIZE_STRING);
        $input['active'] = filter_var($input['active'], FILTER_SANITIZE_NUMBER_INT);
        $input['area_id'] = filter_var($input['area_id'], FILTER_SANITIZE_NUMBER_INT);
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
    }
}
