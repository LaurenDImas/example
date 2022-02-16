<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserCollection;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public static $modelName    = 'App\Models\User';
    public static $response     = 'User';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $rows    = $request->rows ?? 10;
            $sort    = $request->sort ?? 'id';
            $order   = $request->order ?? 'DESC';
            $search  = $request->search ?? null;

            $datas = self::$modelName;

            //logic for search
            if ($search) {
                $datas = self::$modelName::search($search)->orderBy($sort, $order);
            }else{
                $datas = $datas::orderBy($sort, $order);
            }
            
            if ($rows === 'All'){
                $rows = intval(self::$modelName::count());
            }
            return response()->json([
                'status' => 200,
                'message' => self::$response." data retrieved successfully.",
                'results' => $datas->paginate($rows)
            ]);
        } catch (\Exception $e) {
            $statusCode = ($e->getCode() > 100 && $e->getCode() < 600) ? $e->getCode() : 500;

            return response()->json([
                'status' => $statusCode,
                'message' => $e->getMessage(),
                'results' => null
            ], $statusCode);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        try {
            $request['password'] = Hash::make($request['password']);
            $datas = User::create($request->all());
            return response()->json([
                'status' => 200,
                'message' => self::$response." data store successfully.",
                'results' => $datas
            ]);
        } catch (\Exception $e) {
            $statusCode = ($e->getCode() > 100 && $e->getCode() < 600) ? $e->getCode() : 500;

            return response()->json([
                'status' => $statusCode,
                'message' => $e->getMessage(),
                'results' => null
            ], $statusCode);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        try {
            return response()->json([
                'status' => 200,
                'message' => self::$response." data retrieved successfully.",
                'results' => $user
            ]);
        } catch (\Exception $e) {
            $statusCode = ($e->getCode() > 100 && $e->getCode() < 600) ? $e->getCode() : 500;

            return response()->json([
                'status' => $statusCode,
                'message' => $e->getMessage(),
                'results' => null
            ], $statusCode);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        try {
            $datas = User::findOrFail($id);
            $request['password'] = empty($request['password']) ? $datas->password : Hash::make($request['password']);
            $datas->update($request->all());
            return response()->json([
                'status' => 200,
                'message' => self::$response." data store successfully.",
                'results' => $datas
            ]);
        } catch (\Exception $e) {
            $statusCode = ($e->getCode() > 100 && $e->getCode() < 600) ? $e->getCode() : 500;

            return response()->json([
                'status' => $statusCode,
                'message' => $e->getMessage(),
                'results' => null
            ], $statusCode);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        try {
            return response()->json([
                'status' => 200,
                'message' => self::$response." data delete successfully.",
                'results' => $user->delete()
            ]);
        } catch (\Exception $e) {
            $statusCode = ($e->getCode() > 100 && $e->getCode() < 600) ? $e->getCode() : 500;

            return response()->json([
                'status' => $statusCode,
                'message' => $e->getMessage(),
                'results' => null
            ], $statusCode);
        }
    }


}
