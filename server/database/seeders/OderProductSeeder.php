<?php

namespace Database\Seeders;

use App\Models\Oder_product;
use App\Models\OderProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OderProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OderProduct::factory(10)->create();
    }
}
