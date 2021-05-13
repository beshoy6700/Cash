<?php


namespace Modules\Companies\Http\Enumeration;


use Spatie\Enum\Enum;

final class CompanyType extends Enum
{
    const mainCompany = 1;
    const subCompany = 2;
}
