<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Regist>
 */
class RegistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\Regist::class;

    public function definition(): array
    {
        return [
            'user_id' => '1',
            'cicle_id' => '1',
            'composter_id' => \App\Models\Composter::pluck('id')->random(),
            'date' => $this->faker->date(),
            'cicle_start' => $this->faker->boolean(),
        ];
    }
}
