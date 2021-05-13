<?php

namespace Modules\JobStructure\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class JobStructure extends Model
{
    protected $table = 'job_structure';
    protected $fillable = ['name', 'parent_id', 'status', 'slug', 'description', 'user_id'];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = ['name', 'parent_id', 'status', 'slug', 'description', 'user_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];
    protected $casts = [
        'status' => 'boolean',
    ];

    ##### Scope #######
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }

    public function scopeMainJob($query)
    {
        return $query->whereNull('parent_id');
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->status == 1 ? 'مفعل' : 'غير مفعل';
    }
    #### Begin relations #########

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function _parent()
    {
        return $this->belongsTo(self::class, 'parent_id')->withDefault();
    }

    public function count_sub()
    {
        $num = $this->hasMany(self::class, 'parent_id')->count();
        return $num == 0 ? '' : $num;
    }
}
