<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;
use Validator;
use App\Models\User;

class AuthController extends Controller
{
    public static $modelName    = 'App\Models\User';

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());       
        }

        $user = self::$modelName::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()
            ->json(['data' => $user,'access_token' => $token, 'token_type' => 'Bearer', ]);
    }

    public function login(Request $request)
    {
        // dd($request->all());
        $this->validate($request, [
            'email' => 'required|exists:users,email',
            'password' => 'required'
        ]);
        
        if (!Auth::attempt($request->only('email', 'password')))
        {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = self::$modelName::whereEmail($request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        
        return response()->json(['status' => 'success', 'data' => auth()->user(), 'token' => $token], 200);
        
    }

    // method for user logout and delete token
    public function logout()
    {
        {
            try {
                //log user out
                Auth::guard('web')->logout();
    
                return response()->json('', 204);
            } catch (\Exception $e) {
                //return error message
                return response()->json('error_logout', 500);
            }
        }
    }
}
