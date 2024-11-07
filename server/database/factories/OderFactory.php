<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Oder>
 */
class OderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'oder_status_id'=> $this->faker->numberBetween(1,5),
            'table_id'=> $this->faker->numberBetween(1,10),
            'name_user'=> $this->faker->name(),
            'message'  => $this->faker->realText(),
        ];
    }
}
