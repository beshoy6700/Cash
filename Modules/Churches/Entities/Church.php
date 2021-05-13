<?php

namespace Modules\Churches\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Admin\Entities\Admin;
use Modules\Churches\Observers\ChurchObserver;
use Modules\Services\Entities\Service;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class Church extends Model
{
    use SoftDeletes, LogsActivity, CausesActivity;
    protected $table = 'churches';
    protected $fillable = [
        'name','address','mobile','phone','active','admin_id'
    ];
    protected $dates = ['deleted_at'];
    protected $hidden =[];
    //Log Activity Package
    protected static $logAttributes = ['name','address','mobile','phone','active','admin_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated','deleted'];
    // Set Log Name
    protected static $logName= 'church';
    ## Register Observer ##
    protected static function boot()
    {
        parent::boot();
        Church::observe(ChurchObserver::class);
    }
    ##### Scope #######
    public function scopeActive($query)
    {
        return $query->where('active',1);
    }
    public function scopeSelection($query)
    {
        return $query->select( 'id','name','address','mobile','phone','active','admin_id');
    }

    public function getActive()
    {
        return $this->active == 1 ? 'مفعل' : 'غير مفعل';
    }

    ##### Relations #######

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function services()
    {
        return $this->hasMany(Service::class,'church_id','id');
    }
    public function admin()
    {
        return $this->belongsTo(Admin::class,'admin_id');
    }
    /**
     * @param string $eventName
     * @return string
     */
    public function getDescriptionForEvent(string $eventName): string
    {
        return "This model has been {$eventName}";
    }

}
