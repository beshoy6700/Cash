<?php

namespace Modules\JobStructure\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Modules\JobStructure\Entities\JobStructure;
use Modules\JobStructure\Http\Enumeration\JobType;

class JobStructureRequst extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = JobStructure::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {    //   'name', 'parent_id', 'status', 'slug', 'description', 'user_id'
                return [
                    'name' => 'required|unique:job_structure,name',
                    'slug' => 'nullable|string|unique:job_structure,slug',
                    'type' => ['required', 'in:' . JobType::mainJob .','. JobType::mainJob],
                    'status' => 'required|in:0,1',
                    'description' => 'nullable|string',
                    'parent_id' => 'nullable|exists:job_structure,id'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|unique:job_structure,name,'. $data->id,
                    'slug' => 'nullable|string|unique:job_structure,slug,'. $data->id,
                    'type' => ['required', 'in:' . JobType::mainJob .','. JobType::mainJob],
                    'status' => 'nullable|in:0,1',
                    'description' => 'nullable|string',
                    'parent_id' => 'nullable|exists:job_structure,id'
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
