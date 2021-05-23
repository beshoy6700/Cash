<?php

namespace Modules\States\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Admin\Entities\Admin;
use Modules\Cities\Entities\City;
use Modules\Countries\Entities\Country;
use Modules\States\Observers\StateObserver;
use Spatie\Activitylog\Traits\LogsActivity;

class State extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;
    protected $table = 'states';
    protected $fillable = [
        'name','slug','lat','long','active','country_id','admin_id'
    ];
    protected $dates = ['deleted_at'];
    protected $hidden = [];
    protected static $logAttributes =[ 'name','slug','lat','long','active','country_id','admin_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated','deleted'];

    ## Register Observer ##
    protected static function boot()
    {
        parent::boot();
        State::observe(StateObserver::class);
    }

    ##### Scope #######
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    public function scopeSelection($query)
    {
        return $query->select('id', 'name','slug','lat','long','active','country_id','admin_id');
    }

    public function getActive()
    {
        return $this->active == 1 ? 'مفعل' : 'الغاء التفعيل';
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
    public function country()
    {
        return $this->belongsTo(Country::class,'country_id')->with('states');
    }

    public function Cities()
    {
        return $this->hasMany(City::class,'state_id')->with('areas');
    }
}
