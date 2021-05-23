<?php

namespace Modules\Countries\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Modules\Admin\Entities\Admin;
use Modules\Countries\Collection\CountryCollection;
use Modules\Countries\Observers\CountryObserver;
use Modules\States\Entities\State;
use Spatie\Activitylog\Traits\LogsActivity;

class Country extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;

    protected $table = 'countries';
    protected $fillable = [
        'name', 'slug', 'lat', 'long', 'status', 'admin_id'
    ];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = ['name', 'slug', 'lat', 'long', 'status', 'admin_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];


    ## Register Observer ##
    protected static function boot()
    {
        parent::boot();
        Country::observe(CountryObserver::class);
    }
    ##### Scope #######
    /**
     * Create a new Eloquent Collection instance.
     *
     * @param  array  $models
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function newCollection(array $models = [])
    {
        return new CountryCollection($models);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeStatus($query)
    {
        return $query->where('status', 1);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeSelection($query)
    {
        return $query->select('id', 'name', 'slug', 'lat', 'long', 'status', 'admin_id');
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->status == 1 ? 'مفعل' : 'الغاء التفعيل';
    }
    ##### Relations #######

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function states()
    {
        return $this->hasMany(State::class, 'country_id')->with('cities');
    }

}
