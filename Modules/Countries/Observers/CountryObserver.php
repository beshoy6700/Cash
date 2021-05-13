<?php

namespace Modules\Countries\Observers;


use Modules\Countries\Entities\Country;

class CountryObserver
{
    /**
     * Handle the country "created" event.
     *
     * @param \Modules\Countries\Entities\Country $country
     * @return void
     */
    public function created(Country $country)
    {
        //
    }

    /**
     * Handle the country "updated" event.
     *
     * @param \Modules\Countries\Entities\Country $country
     * @return void
     */
    public function updated(Country $country)
    {
        foreach ($country->states as $state) {
            foreach ($state->cities as $city) {
                foreach ($city->areas as $area) {
                    $area->subAreas()->update(['active' => $country->active]);
                }
                $city->areas()->update(['active' => $country->active]);
            }
            $state->cities()->update(['active' => $country->active]);
        }
        $country->states()->update(['active' => $country->active]);
    }

    public function ChangeStatus(Country $country)
    {
        foreach ($country->states as $state) {
            foreach ($state->cities as $city) {
                foreach ($city->areas as $area) {
                    $area->subAreas->update(['active' => $country->active]);
                }
                $city->areas()->update(['active' => $country->active]);
            }
            $state->cities()->update(['active' => $country->active]);
        }
        $country->states()->update(['active' => $country->active]);
    }

    /**
     * Handle the country "deleted" event.
     *
     * @param \Modules\Countries\Entities\Country $country
     * @return void
     */
    public function deleted(Country $country)
    {
        foreach ($country->states as $state) {
            foreach ($state->cities as $city) {
                foreach ($city->areas as $area) {
                    $area->subAreas->delete();
                }
                $city->areas()->delete();
            }
            $state->cities()->delete();
        }
        $country->states()->delete();
    }

    /**
     * Handle the country "restored" event.
     *
     * @param \Modules\Countries\Entities\Country $country
     * @return void
     */
    public function restored(Country $country)
    {
        foreach ($country->states as $state) {
            foreach ($state->onlyTrashed()->cities() as $city) {
                foreach ($city->onlyTrashed()->areas() as $area) {
                    $area->onlyTrashed()->subAreas()->restore();
                }
                $city->onlyTrashed()->areas()->restore();
            }
            $state->onlyTrashed()->cities()->restore();
        }
        $country->onlyTrashed()->states()->restore();
    }

    /**
     * Handle the country "force deleted" event.
     *
     * @param \Modules\Countries\Entities\Country $country
     * @return void
     */
    public function forceDeleted(Country $country)
    {
        foreach ($country->states as $state) {
            foreach ($state->onlyTrashed()->cities() as $city) {
                foreach ($city->onlyTrashed()->areas() as $area) {
                    $area->onlyTrashed()->subAreas()->forceDelete();
                }
                $city->onlyTrashed()->areas()->forceDelete();
            }
            $state->onlyTrashed()->cities()->forceDelete();
        }
        $country->onlyTrashed()->states()->forceDelete();
    }
}
