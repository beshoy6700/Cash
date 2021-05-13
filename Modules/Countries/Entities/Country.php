<?php

namespace Modules\Countries\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Admin\Entities\Admin;
use Modules\Countries\Observers\CountryObserver;
use Modules\States\Entities\State;
use Spatie\Activitylog\Traits\LogsActivity;

class Country extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;

    protected $table = 'countries';
    protected $fillable = [
        'name', 'slug', 'lat', 'long', 'active', 'user_id'
    ];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = ['name', 'slug', 'lat', 'long', 'active', 'user_id'];
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
     * @param $query
     * @return mixed
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeSelection($query)
    {
        return $query->select('id', 'name', 'slug', 'lat', 'long', 'active', 'user_id');
    }

    /**
     * @return string
     */
    public function getActive()
    {
        return $this->active == 1 ? 'مفعل' : 'الغاء التفعيل';
    }
    ##### Relations #######

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function states()
    {
        return $this->hasMany(State::class, 'country_id')->with('cities');
    }

}
