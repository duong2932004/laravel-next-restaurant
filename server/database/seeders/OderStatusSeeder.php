<?php

namespace Database\Seeders;

use App\Models\Oder_status;
use App\Models\OderStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OderStatus::factory(5)->create();
    }
}
