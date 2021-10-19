<?php

namespace Modules\Employees\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Employees\Entities\Employee;

class EmployeesRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = Employee::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    //  'code','name','gender','status','date_birth','mobile','collage','address','email','social_status_id','image','user_id'
                return [
                    'name' => 'required|string|max:150|unique:employees,name',
                    'code' => 'required|string|unique:employees,code',
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
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
