<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ChangeLanguage
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
        $lang = $request->header('lang');
        app()->setLocale('ar');
        if (isset($lang) && $lang == 'en') {
            app()->setLocale('en');
        }
        return $next($request);
    }
}
