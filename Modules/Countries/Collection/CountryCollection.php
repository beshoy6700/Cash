<?php


namespace Modules\Countries\Collection;


use Illuminate\Database\Eloquent\Collection;

class CountryCollection extends Collection
{
    public function active()
    {
        return $this->filter(function ($country) {
            return $country->status === 1;
        });
    }
}
