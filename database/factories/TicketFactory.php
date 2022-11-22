<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'titel' => $this->faker->word(),
            'status' => $this->faker->word(),
            'created_by' => $this->faker->numberBetween(1,10),
            'details' => $this->faker->text(2500),
            'appointed_to' => $this->faker->numberBetween(1,10),
        ];
    }
}

    
