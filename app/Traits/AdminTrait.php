<?php


namespace App\Traits;


use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

trait AdminTrait
{
    public function getCurrentLang()
    {

        return LaravelLocalization::getSupportedLocales();

    }

    public function returnError($route, $msg)
    {
        return redirect()->route($route)->with(['error' => $msg]);
    }

    public function returnErrorWithInput($route, $msg)
    {
        return redirect()->route($route)->withInput()->with(['error' => $msg]);
    }

    /**
     * @param string $key
     * @param $msg
     * @return \Illuminate\Http\RedirectResponse
     */
    public function returnBackWithInput($key = 'error', $msg)
    {
        return redirect()->back()->withInput()->with([$key => $msg]);
    }

    /**
     * @param string $key
     * @param $msg
     * @return \Illuminate\Http\RedirectResponse
     */
    public function returnBack($key = 'error', $msg, $input)
    {
        return redirect()->back()->withInput($input)->with([$key => $msg]);
    }

    public function returnErrorCatch($route)
    {
        return redirect()->route($route)->with(['error' => 'لقد حدث خطأ برجاء المحاولة في وقت لاحق']);
    }

    public function returnSuccessMessage($route, $msg)
    {
        return redirect()->route($route)->with(['success' => $msg]);
    }

    public function statusRequest($request,$column = 'active')
    {
        if ($request->has($column)) {
            $request->request->add([$column => 1]);
        } else {
            $request->request->add([$column => 0]);
        }
    }
}
