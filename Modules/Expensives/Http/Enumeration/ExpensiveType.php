<?php


namespace Modules\Expensives\Http\Enumeration;

use Spatie\Enum\Enum;

final class ExpensiveType extends Enum
{
    const mainExpensive = 1;
    const subExpensive = 2;
}
