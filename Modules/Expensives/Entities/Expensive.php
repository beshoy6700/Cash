<?php

namespace Modules\Expensives\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Tags\HasTags;

class Expensive extends Model
{
    use HasFactory, SoftDeletes, Notifiable, LogsActivity, HasTags;

    protected $table = 'expensives';

    protected $fillable = [
        'name','parent_id','status','description','user_id'
    ];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = [
        'name','parent_id','status','description','user_id'
    ];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];
    protected $casts = [
        'status' => 'boolean',
    ];

    protected static function newFactory()
    {
        return \Modules\Expensives\Database\factories\ExpensiveFactory::new();
    }
    ########## Scope ############
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }
    ####### Main Expensive #######
    public function scopeMainExpensive($query)
    {
        return $query->whereNull('parent_id');
    }
    ########## Status ##########
    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->status == 1 ? 'مفعل' : 'غير مفعل';
    }
    ####### Begin relations #########
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
