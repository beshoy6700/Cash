<?php

namespace Modules\Churches\Observers;

use Modules\Churches\Entities\Church;

class ChurchObserver
{
    /**
     * Handle the church "created" event.
     *
     * @param  \Modules\Churches\Entities\Church  $church
     * @return void
     */
    public function created(Church $church)
    {
        //
    }

    /**
     * Handle the church "updated" event.
     *
     * @param  \Modules\Churches\Entities\Church  $church
     * @return void
     */
    public function updated(Church $church)
    {
        $church->services()->update(['active'=> $church->active ]);
    }

    /**
     * Handle the church "deleted" event.
     *
     * @param  \Modules\Churches\Entities\Church  $church
     * @return void
     */
    public function deleted(Church $church)
    {
        $church->services()->delete();
    }

    /**
     * Handle the church "restored" event.
     *
     * @param  \Modules\Churches\Entities\Church  $church
     * @return void
     */
    public function restored(Church $church)
    {
        $church->services()->onlyTrashed()->restore();
    }

    /**
     * Handle the church "force deleted" event.
     *
     * @param  \Modules\Churches\Entities\Church  $church
     * @return void
     */
    public function forceDeleted(Church $church)
    {
        //onlyTrashed()->find($id)->forceDelete();
    }
}
