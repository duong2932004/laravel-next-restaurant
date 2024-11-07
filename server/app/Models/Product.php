<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id',
        'name',
        'avatar',
        'description',
        'price',
        'status',
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
    public function order_product()
    {
        return $this->belongsTo(Oder_product::class);
    }
}
