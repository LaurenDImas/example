<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($datas) {
            return [
                'id'        => $person->id,
                'name'      => $person->name,
                'email'     => $person->email,
                'created_at'=> $person->created_at,
                'updated_at'=> $person->updated_at
            ];
        });
    }
}
