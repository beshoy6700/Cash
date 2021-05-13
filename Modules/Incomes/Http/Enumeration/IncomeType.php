<?php


namespace Modules\Incomes\Http\Enumeration;

use Spatie\Enum\Enum;

final class IncomeType extends Enum
{
    const mainIncome = 1;
    const subIncome = 2;
}
