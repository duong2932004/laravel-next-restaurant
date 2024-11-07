<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Các thuộc tính có thể gán.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_number',
        'role_id',
    ];

    /**
     * Các thuộc tính cần ẩn khi trả về JSON.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Các thuộc tính cần chuyển đổi về kiểu dữ liệu khác.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Thiết lập quan hệ với Role.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    public function peacock_board()
    {
        return $this->belongsTo(Peacock_board::class);
    }
}
