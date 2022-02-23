<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\{Menu};

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = [
            //Dashboard
            [
                "name"          => "Dashboard & Apps",
                "header"        => "main",
                "router_link"   => "",
                "icon"          => "",
                "unique_id"      => 'dashboard_1',
                "position"      => 0,
                "children"      => [
                    [
                        "name"          => "Dashboard",
                        "router_link"   => "dashboard",
                        "icon"          => "icon-Layout-4-blocks",
                        "position"      => 0,
                        "unique_id"      => 'dashboard_1_1',
                        "children"      => []
                    ]
                ]
            ],

            //Master
            [
                "name"          => "Master",
                "header"        => "main",
                "router_link"   => "",
                "icon"          => "",
                "position"      => 1,
                "unique_id"      => "master_1",
                "children"      => [
                    [
                        "name"          => "Users",
                        "router_link"   => "users",
                        "icon"          => "icon-User",
                        "position"      => 0,
                        "unique_id"      => "master_1_1",
                        "children"      => []
                    ],[
                        "name"          => "Roles",
                        "router_link"   => "roles",
                        "icon"          => "fa fa-unlock",
                        "position"      => 1,
                        "unique_id"      => "master_1_2",
                        "children"      => []
                    ],
                ],
            ],
        ];
        
        // $data  = Menu::get()->pluck('id')->toArray();
        // $array = [1,2,3,4,5];
        // dump($data);
        // dump($array);
        // dd(array_diff($data,$array));
        $this->children($menus);
    }

    public function children($menus,$parentId =null){
        foreach ($menus as $i => $menu) {
            $parent = Menu::whereUniqueId($menu['unique_id'])->first();
            if(empty($parent)){
                $parent = new Menu();
            }
            $parent->parent_id     = $parentId;
            $parent->name          = $menu['name'];
            $parent->router_link   = $menu['router_link'] ?? null;
            $parent->icon          = $menu['icon'] ?? null;
            $parent->position      = $menu['position'];
            $parent->unique_id      = $menu['unique_id'];
            $parent->save();
            if(count($menu['children']) > 0){
                $this->children($menus[$i]['children'],$parent->id);
            }
        }
        return $menus;
    } 
}
