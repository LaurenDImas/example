<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public static function search($search){
        return self::where(function ($query) use ($search) {
            return  $query->where('barang', 'LIKE', '%' . $search . '%');
        });
    }

    public function serviceCategory(){
        // unit_id from asset
        // id from  Service Category
        return $this->belongsTo(ServiceCategory::class, 'unit_id', 'id');
    }

    public function supplier(){
        return $this->belongsTo(Supplier::class, 'supplier_id', 'id');
    }

    public function condition(){
        return $this->belongsTo(Condition::class, 'condition_id', 'id');
    }
    
}
