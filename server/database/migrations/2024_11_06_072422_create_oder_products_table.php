<?php

use App\Models\Oder;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('oder_products', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Oder::class)->constrained();
            $table->foreignIdFor(\App\Models\Product::class)->constrained();
            $table->unsignedInteger('quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oder_products');
    }
};
