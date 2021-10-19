<?php

namespace Modules\SocialStatus\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\SocialStatus\Entities\SocialStatus;

class CreateSocialStatusRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = SocialStatus::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    //  name','description
                return [
                    'name' => 'required|string|max:150|unique:social_status,name',
                    'description' => 'nullable|string'
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
