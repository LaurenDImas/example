<?php
namespace App\Helpers;
use File;
use Auth;

class Helper{
    public static function imageUpload($path,$data,$name=null,$currentData=null)
    {

        $destinationPath = public_path($path);
        if(File::exists(public_path($path.$currentData))){
            File::delete(public_path($path.$currentData));
        }
        if(!File::isDirectory($destinationPath)){
            File::makeDirectory($destinationPath, 0777, true, true);
        }

        $image_parts = explode(";base64,", $data);
        preg_match('~:(.*?)/~', $image_parts[0], $output);
        $image_type_aux = explode($output[1].'/', $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
        $uniqid = uniqid();
        $fileName = $uniqid.'.'.strtolower(str_replace(' ','',$name)).'.' . $image_type;
        $file = $destinationPath . $fileName;
        file_put_contents($file, $image_base64);
        return $fileName;
    }
}