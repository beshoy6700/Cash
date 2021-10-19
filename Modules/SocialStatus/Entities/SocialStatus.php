<?php

namespace Modules\SocialStatus\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;

class SocialStatus extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;
    protected $table = 'social_status';
    protected $fillable = ['name','description','status','num','admin_id'];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];

    // attributes will save when updated
    protected static $logAttributes = ['name','status','num','admin_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];

    /**
     * @param $query
     * @return mixed
     */
    public function scopeStatus($query)
    {
        return $query->where('status', 1);
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
}
