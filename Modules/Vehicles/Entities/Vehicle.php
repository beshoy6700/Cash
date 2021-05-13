<?php

namespace Modules\Vehicles\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Admin\Entities\Admin;
use Modules\Churches\Entities\Church;
use Spatie\Activitylog\Traits\LogsActivity;

class Vehicle extends Model
{
    use SoftDeletes, LogsActivity, Notifiable;

    protected $table = 'vehicles';
    protected $fillable = [
        'code', 'name', 'board_chr', 'board_num', 'description', 'status', 'vehicles_type_id', 'church_id', 'admin_id'
    ];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = [
        'code', 'name', 'board_chr', 'board_num', 'description', 'status', 'vehicles_type_id', 'church_id', 'admin_id'
    ];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];

    ##### Scope #######
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeSelection($query)
    {
        return $query->select('id', 'code', 'name', 'board_chr', 'board_num', 'status', 'vehicles_type_id', 'church_id', 'admin_id');
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->status == 1 ? 'مفعل' : 'غير مفعل';
    }

    public function getPhotoAttribute($val)
    {
        return ($val !== null) ? asset('images/Vehicles/Licenses/' . $val) : "";
    }
    #### Begin relations #########

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

    public function church()
    {
        return $this->belongsTo(Church::class, 'church_id');
    }

    public function vehiclesType()
    {
        return $this->belongsTo(VehicleType::class, 'vehicles_type_id');
    }
}
