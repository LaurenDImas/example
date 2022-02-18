<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public static function search($search){
        return self::where(function ($query) use ($search) {
            return  $query->where('name', 'LIKE', '%' . $search . '%');
        });
    }
}
