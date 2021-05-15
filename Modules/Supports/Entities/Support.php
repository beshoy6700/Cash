<?php

namespace Modules\Supports\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Admin\Entities\Admin;
use Modules\Companies\Entities\Company;
use Spatie\Activitylog\Traits\LogsActivity;

class Support extends Model
{
    use HasFactory, SoftDeletes, Notifiable, LogsActivity;
    protected $table = 'supports';
    protected $fillable = ['date','title','code','attach','subject','type_support_id','status','status_support_id',
        'company_id','user_id','admin_id'];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = [
        'date','title','code','attach','subject','type_support_id','status','status_support_id',
        'company_id','user_id','admin_id'
    ];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];
    protected $casts = [
        'status' => 'boolean',
    ];

    protected static function newFactory()
    {
        return \Modules\Supports\Database\factories\SupportFactory::new();
    }
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
    public function typeSupport()
    {
        return $this->belongsTo(TypeSupport::class, 'type_support_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function statusSupport()
    {
        return $this->belongsTo(TypeSupport::class, 'status_support_id');
    }
    public function supportReplies()
    {
        return $this->hasMany(SupportReply::class, 'support_id');
    }
    public function getAttachAttribute($val)
    {
        return ($val !== null) ? asset('images/Support/ticket/' . $val) : "";
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
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
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }
}
