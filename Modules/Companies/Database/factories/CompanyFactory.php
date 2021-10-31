<?php
namespace Modules\Companies\Database\factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \Modules\Companies\Entities\Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'slug' => $this->faker->slug(),
            'status' => $this->faker->boolean(),
            'mobile' => $this->faker->phoneNumber,
            'logo' => $this->faker->imageUrl(),
            'user_id' => 1
        ];
    }
}

