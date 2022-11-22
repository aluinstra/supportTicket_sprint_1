<?php

namespace Database\Seeders;

use App\Models\User as ModelsCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
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
