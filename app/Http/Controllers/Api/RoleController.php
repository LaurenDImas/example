<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Http\Resources\RoleCollection;
use App\Http\Requests\RoleRequest;
use Illuminate\Support\Facades\Hash;

class RoleController extends Controller
{
    public static $modelName    = 'App\Models\Role';
    public static $response     = 'Role';

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
    public function store(RoleRequest $request)
    {
        try {
            $datas = Role::create($request->all());
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
    public function show(Role $role)
    {
        try {
            return response()->json([
                'status' => 200,
                'message' => self::$response." data retrieved successfully.",
                'results' => $role
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
    public function update(RoleRequest $request, $id)
    {
        try {
            $datas = Role::findOrFail($id);
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
    public function destroy(Role $role)
    {
        try {
            return response()->json([
                'status' => 200,
                'message' => self::$response." data delete successfully.",
                'results' => $role->delete()
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

    public function listSelectRole(Request $request)
    {
        try {
            $term = trim($request->term);
            $posts = self::$modelName::select('id','name as text')
                ->where('name', 'LIKE',  '%' . $term. '%')
                ->orderBy('id', 'asc')->simplePaginate(6);
        
            $morePages=true;
            $pagination_obj= json_encode($posts);
            if (empty($posts->nextPageUrl())){
                $morePages=false;
            }
            $results = array(
                "results" => $posts->items(),
                "pagination" => array(
                    "more" => $morePages
                )
            );
            return response()->json($results);
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
