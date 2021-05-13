<?php

namespace Modules\Areas\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Cities\Entities\City;
use Modules\SubAreas\Entities\SubArea;
use Spatie\Activitylog\Traits\LogsActivity;

class Area extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;

    protected $table = 'areas';
    protected $fillable = [
        'name', 'slug', 'lat', 'long', 'active', 'city_id', 'user_id'
    ];
    protected $dates = ['deleted_at'];
    protected $hidden = [];
    protected static $logAttributes = ['name', 'slug', 'lat', 'long', 'active', 'city_id', 'user_id'];
    protected static $logOnlyDirty = true;
    //only the `updated` and `deleted` event will get logged automatically
    protected static $recordEvents = ['updated', 'deleted'];

    ##### Scope #######
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    public function scopeSelection($query)
    {
        return $query->select('id', 'name', 'slug', 'lat', 'long', 'active', 'city_id', 'user_id');
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
    public function city()
    {
        return $this->belongsTo(City::class, 'city_id')->with('areas');
    }

    public function subAreas()
    {
        return $this->hasMany(SubArea::class,'area_id');
    }
}
