<?php

namespace Modules\Employees\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\SocialStatus\Entities\SocialStatus;
use Spatie\Activitylog\Traits\LogsActivity;

class Employee extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;
    protected $table = 'employees';
    protected $fillable = [
        'code','name','gender','status','date_birth','mobile','collage','address','email','social_status_id','image','user_id'
    ];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = ['code','name','gender','status','date_birth','mobile','collage','address','email','social_status_id','image','user_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];

    /**
     * @param $query
     * @return mixed
     */
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }
    /**
     * @param $query
     * @return mixed
     */
    public function scopeMale($query)
    {
        return $query->where('gender', 1);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeFemale($query)
    {
        return $query->where('gender', 2);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeSelection($query)
    {
        return $query->select('id', 'code','name','gender','status','date_birth','mobile','collage','address','email','social_status_id','image','user_id');
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->status == 1 ? 'مفعل' : 'غير مفعل';
    }

    /**
     * @return string
     */
    public function getGender()
    {
        return $this->gender == 1 ? 'ذكر' : 'أنثي';
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
     * @param $val
     * @return string
     */
    public function getImageAttribute($val)
    {
        return ($val !== null) ? asset('images/Employees/images/'.$val) : "";
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     *
     */
    public function socialStatus()
    {
        return $this->belongsTo(SocialStatus::class,'social_status_id');
    }
}
