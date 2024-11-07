<?php

namespace Database\Seeders;

use App\Models\Oder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Oder::factory(100)->create();
    }
}
