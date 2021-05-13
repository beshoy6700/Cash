<?php

namespace Modules\Attributes\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Admin\Entities\Admin;
use Spatie\Activitylog\Traits\LogsActivity;

class Attribute extends Model
{
    use SoftDeletes, LogsActivity, Notifiable;
    protected $table = 'attributes';
    protected $fillable = ['name','admin_id'];

    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = [
        'name', 'admin_id'
    ];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];

    /**
     * @return BelongsTo
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

    public function attributesSet()
    {
        return $this->hasMany(AttributeSet::class,'attribute_id');
    }
}
