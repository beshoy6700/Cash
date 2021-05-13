<?php

namespace Modules\States\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\States\Entities\State;

class StateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = State::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    //   'name','slug','lat','long','active','country_id','admin_id'
                return [
                    'name' => 'required|string|max:150|unique:states,name',
                    'slug' => 'required|string|unique:states,slug',
                    'lat' => 'nullable|string',
                    'long' => 'nullable|string',
                    'active' => 'required|in:0,1',
                    'country_id'=> 'required|exists:countries,id'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|string|max:150|unique:states,name,'.$data->id,
                    'slug' => 'required|string|unique:states,slug,'.$data->id,
                    'lat' => 'nullable|string',
                    'long' => 'nullable|string',
                    'active' => 'nullable|in:0,1',
                    'country_id'=> 'required|integer|exists:countries,id'
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
            'country_id.exists' => 'يجب ان تختار من هذه القائمة'
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
        $input['country_id'] = filter_var($input['country_id'], FILTER_SANITIZE_NUMBER_INT);
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
