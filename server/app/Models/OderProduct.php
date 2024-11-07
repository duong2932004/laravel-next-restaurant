<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OderProduct extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'oder_id',
        'quantity'
    ];
    public function product(){
        return $this->belongsTo(Product::class);
    }
    public function order(){
        return $this->belongsTo(Oder::class);
    }
}
