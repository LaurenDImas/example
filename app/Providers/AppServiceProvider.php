<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;
use Image;
use Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('base64image', function ($attribute, $value, $parameters, $validator) {
            try {
                $size = $this->getBase64ImageSize($value);
                return $size <= $parameters[0];
            } catch (\Exception $e) {
                return false;
            }
        });
        
        Validator::extend('base64file', function ($attribute, $value, $parameters, $validator) {
            try {
                $validation = explode('/',$parameters[0]);
                $extension = explode('/', mime_content_type($value))[1];

                return in_array($extension,$validation);
            } catch (\Exception $e) {
                return false;
            }
        });
    }

    public function getBase64ImageSize($base64Image){ //return memory size in B, KB, MB
        try{
            $size_in_bytes = (int) (strlen(rtrim($base64Image, '=')) * 3 / 4);
            $size_in_kb    = $size_in_bytes / 1024;
            $size_in_mb    = $size_in_kb / 1024;
    
            return $size_in_mb;
        }
        catch(Exception $e){
            return false;
        }
    }
}
