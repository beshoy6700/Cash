<?php

namespace App\Http\Middleware;

use App\Traits\GeneralTrait;
use Closure;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use JWTAuth;

class AssignGuard extends BaseMiddleware
{
    use GeneralTrait;

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($guard != null) {
            auth()->shouldUse($guard); //shoud you user guard / table
            $token = $request->header('token');
            /* $request->headers->set('token', (string)$token, true);
             $request->headers->set('Authorization', 'Bearer ' . $token, true);*/
            try {
                //     $user = $this->auth->authenticate($request);  //check authenticted user
                $user = JWTAuth::parseToken()->authenticate();

                // Beshoy Edit
                /*    if (!$user) {
                        return $this->returnError('401', 'Unauthenticated user');
                    }*/
            } catch (TokenExpiredException $e) {
                return $this->returnError('401', 'Unauthenticated user');
            } catch (JWTException $e) {
                return $this->returnError('t01', 'token_invalid ' . $e->getMessage());
            }
        }
        return $next($request);
    }
}
