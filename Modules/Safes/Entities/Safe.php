<?php

namespace Modules\Safes\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Areas\Entities\Area;
use Modules\Companies\Entities\Company;
use Spatie\Activitylog\Traits\LogsActivity;

class Safe extends Model
{
    use HasFactory, SoftDeletes, Notifiable, LogsActivity;
    protected $table = 'safes';

    protected $fillable = [
        'name', 'status', 'company_id', 'user_id'
    ];

    protected static function newFactory()
    {
        return \Modules\Safes\Database\factories\SafeFactory::new();
    }

    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = [
        'name', 'status', 'company_id', 'user_id'
    ];
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
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
