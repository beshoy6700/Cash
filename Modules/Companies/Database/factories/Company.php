<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use Modules\Companies\Entities\Company;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'name' => $faker->word(),
        'slug' => $faker->slug(),
        'status' => $faker->boolean(),
        'mobile' => $faker->phoneNumber,
        'logo' => $faker->imageUrl(),
        'user_id' => 1
        //    'admin_id' => mt_rand(1, 50)
    ];
});
//   factory(Modules\Companies\Entities\Company::class, 100)->create();
