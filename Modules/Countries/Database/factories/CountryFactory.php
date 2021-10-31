<?php
namespace Modules\Countries\Database\factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CountryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \Modules\Countries\Entities\Country::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //  'name', 'slug', 'lat', 'long', 'status', 'admin_id'

            'name' => $this->faker->country,
            'slug' => $this->faker->slug,
            'status' => $this->faker->boolean,
            'admin_id' => 1
        ];
    }
}

