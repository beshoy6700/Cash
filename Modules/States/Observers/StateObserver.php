<?php

namespace Modules\States\Observers;



use Modules\States\Entities\State;

class StateObserver
{
    /**
     * Handle the country "created" event.
     *
     * @param \Modules\States\Entities\State $state
     * @return void
     */
    public function created(State $state)
    {
        //
    }

    /**
     * Handle the country "updated" event.
     *
     * @param \Modules\States\Entities\State $state
     * @return void
     */
    public function updated(State $state)
    {

            foreach ($state->cities as $city) {
                foreach ($city->areas as $area) {
                    $area->subAreas()->update(['active' => $state->active]);
                }
                $city->areas()->update(['active' => $state->active]);
            }
            $state->cities()->update(['active' => $state->active]);


    }

    public function ChangeStatus(State $state)
    {

            foreach ($state->cities as $city) {
                foreach ($city->areas as $area) {
                    $area->subAreas->update(['active' => $state->active]);
                }
                $city->areas()->update(['active' => $state->active]);
            }
            $state->cities()->update(['active' => $state->active]);

    }

    /**
     * Handle the country "deleted" event.
     *
     * @param \Modules\States\Entities\State $state
     * @return void
     */
    public function deleted(State $state)
    {

            foreach ($state->cities as $city) {
                foreach ($city->areas as $area) {
                    $area->subAreas->delete();
                }
                $city->areas()->delete();
            }
            $state->cities()->delete();
    }

    /**
     * Handle the country "restored" event.
     *
     * @param \Modules\States\Entities\State $state
     * @return void
     */
    public function restored(State $state)
    {

            foreach ($state->onlyTrashed()->cities() as $city) {
                foreach ($city->onlyTrashed()->areas() as $area) {
                    $area->onlyTrashed()->subAreas()->restore();
                }
                $city->onlyTrashed()->areas()->restore();
            }
            $state->onlyTrashed()->cities()->restore();

    }

    /**
     * Handle the country "force deleted" event.
     *
     * @param \Modules\States\Entities\State $state
     * @return void
     */
    public function forceDeleted(State $state)
    {
            foreach ($state->onlyTrashed()->cities() as $city) {
                foreach ($city->onlyTrashed()->areas() as $area) {
                    $area->onlyTrashed()->subAreas()->forceDelete();
                }
                $city->onlyTrashed()->areas()->forceDelete();
            }
            $state->onlyTrashed()->cities()->forceDelete();
    }
}
