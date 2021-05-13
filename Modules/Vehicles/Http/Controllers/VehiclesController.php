<?php

namespace Modules\Vehicles\Http\Controllers;

use App\Repository\Repository;
use App\Traits\AdminTrait;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Vehicles\Entities\Vehicle;

class VehiclesController extends Controller
{
    use AdminTrait;

    private $user_id;
    private $repository;

    public function __construct(Vehicle $vehicles)
    {
        $this->middleware('auth');
        $this->repository = new Repository($vehicles);
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function index()
    {
        try {
            $vehicles = $this->repository->all();
            if (!$vehicles) {
                return $this->returnError('admin.dashboard', 'لاتوجد بيانات');
            }
            return view('vehicles::index', compact('vehicles'));
        } catch (\Exception $ex) {
            return $this->returnErrorCatch('admin.dashboard');
        }

    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('vehicles::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('vehicles::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('vehicles::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
