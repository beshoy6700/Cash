<?php


namespace Modules\JobStructure\Http\Enumeration;


use Spatie\Enum\Enum;

final class JobType extends Enum
{
    const mainJob = 1;
    const subJob = 2;
}
