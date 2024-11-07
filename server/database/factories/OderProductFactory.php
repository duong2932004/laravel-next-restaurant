<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Oder_product>
 */
class OderProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id'=>$this->faker->numberBetween(1,100),
            'oder_id'=>$this->faker->numberBetween(1,100),
            'quantity'=>$this->faker->numberBetween(1,10),
        ];
    }
}
