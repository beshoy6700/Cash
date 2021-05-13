<?php

namespace Modules\SubAreas\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Areas\Entities\Area;
use Spatie\Activitylog\Traits\LogsActivity;

class SubArea extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;
    protected $table = 'sub_areas';
    protected $fillable = [
        'name','slug','lat','long','active','area_id','user_id'
    ];
    protected $dates = ['deleted_at'];
    protected $hidden = [];
    protected static $logAttributes =[ 'name','slug','lat','long','active','area_id','user_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated','deleted'];
    ##### Scope #######
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    public function scopeSelection($query)
    {
        return $query->select('id', 'name','slug','lat','long','active','area_id','user_id');
    }

    public function getActive()
    {
        return $this->active == 1 ? 'مفعل' : 'غير مفعل';
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
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function area()
    {
        return $this->belongsTo(Area::class,'area_id');
    }

}
