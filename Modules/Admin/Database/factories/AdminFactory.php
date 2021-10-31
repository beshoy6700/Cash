<?php
namespace Modules\Admin\Database\factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Admin\Entities\Admin;

class AdminFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Admin::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 'name','username' ,'email','image','password'
            'name' => $this->faker->name,
            'username' => $this->faker->userName,
            'email' => $this->faker->email,
            'image' => $this->faker->imageUrl(),
            'password' => bcrypt('123456789')

        ];
    }
}

