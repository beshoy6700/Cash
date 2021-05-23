<?php
define('PAGINATION_COUNT', 10);


function uploadImage($folder, $image)
{
    $image->store('/', $folder);
    $filename = $image->hashName();
    $path = 'images/' . $folder . '/' . $filename;
    return $path;
}

##### Countries ######
/**
 * @return mixed
 */
function get_countries_count()
{
    return \Modules\Countries\Entities\Country::count();
}

function get_countries_count_active()
{
    return \Modules\Countries\Entities\Country::where('active', 1)->count();
}

##### States ######
/**
 * @return mixed
 */
function get_states_count()
{
    return \Modules\States\Entities\State::count();
}

/**
 * @return mixed
 */
function get_states_count_active()
{
    return \Modules\States\Entities\State::where('active', 1)->count();
}

##### Cities ######
/**
 * @return mixed
 */
function get_cities_count()
{
    return \Modules\Cities\Entities\City::count();
}

/**
 * @return mixed
 */
function get_cities_count_active()
{
    return \Modules\Cities\Entities\City::where('active', 1)->count();
}

### areas ####
/**
 * @return mixed
 */
function get_areas_count()
{
    return \Modules\Areas\Entities\Area::count();
}

/**
 * @return mixed
 */
function get_areas_count_active()
{
    return \Modules\Areas\Entities\Area::where('active', 1)->count();
}

### SubAreas ####
/**
 * @return mixed
 */
function get_subAreas_count()
{
    return \Modules\SubAreas\Entities\SubArea::count();
}

/**
 * @return mixed
 */
function get_subAreas_count_active()
{
    return \Modules\SubAreas\Entities\SubArea::where('active', 1)->count();
}
### Companies ####
/**
 * @return mixed
 */
function get_companies_count()
{
    return \Modules\Companies\Entities\Company::count();
}

/**
 * @return mixed
 */
function get_companies_count_active()
{
    return \Modules\Companies\Entities\Company::where('status', 1)->count();
}
### Safes ####
/**
 * @return mixed
 */
function get_safes_count()
{
    return \Modules\Safes\Entities\Safe::count();
}

/**
 * @return mixed
 */
function get_safes_count_active()
{
    return \Modules\Safes\Entities\Safe::where('status', 1)->count();
}
### Incomes ####
/**
 * @return mixed
 */
function get_incomes_count()
{
    return \Modules\Incomes\Entities\Income::count();
}

/**
 * @return mixed
 */
function get_incomes_count_active()
{
    return \Modules\Incomes\Entities\Income::where('status', 1)->count();
}
###### Expensives #########
/**
 * @return mixed
 */
function get_expensives_count()
{
    return \Modules\Expensives\Entities\Expensive::count();
}

/**
 * @return mixed
 */
function get_expensives_count_active()
{
    return \Modules\Expensives\Entities\Expensive::where('status', 1)->count();
}
