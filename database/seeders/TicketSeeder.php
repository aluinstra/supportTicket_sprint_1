<?php

namespace Database\Seeders;

use App\Models\Ticket as ModelsCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         ModelsCategory::factory()
            ->count(10)
            ->create();
    }
}
