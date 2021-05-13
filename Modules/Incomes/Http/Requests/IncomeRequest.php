<?php

namespace Modules\Incomes\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Incomes\Entities\Income;
use Modules\Incomes\Http\Enumeration\IncomeType;

class IncomeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $data = Income::find($this->id);
        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {
                return [
                    'name' => 'required|unique:incomes,name',
                    'description' => 'nullable|string',
                    'type' => ['required','in:'.IncomeType::mainIncome.','.IncomeType::mainIncome],
                    'status' => 'required|in:0,1',
                    'parent_id' => 'nullable|exists:incomes,id'
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'name' => 'required|unique:incomes,name,'. $data->id,
                    'slug' => 'required|string|unique:incomes,slug,'. $data->id,
                    'type' => ['required','in:'.IncomeType::mainIncome.','.IncomeType::mainIncome],
                    'status' => 'nullable|in:0,1',
                    'parent_id' => 'nullable|exists:incomes,id'
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
