<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oder extends Model
{
    use HasFactory;
    protected $fillable = [
        'oder_status_id',
        'table_id',
        'name_user',
        'message',
    ];
    public function table(){
        return $this->belongsTo(Table::class);
    }
    public function oderStatus(){
        return $this->belongsTo(Oder_status::class);
    }

    public function oderProduct()
    {
        return $this->hasMany(Oder_product::class);
    }
}
