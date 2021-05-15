<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckPassword
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $api_password = $request->header('api_password');
        if ($api_password !== env("API_PASSWORD",'CUb1zbMy27FVX95lAnKe5NjIKwGJGEzH36G')) {
            return response()->json(['message' => 'Unauthenticated.']);
        }
        return $next($request);
    }
}
