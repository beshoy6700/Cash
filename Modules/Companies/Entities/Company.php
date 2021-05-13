<?php

namespace Modules\Companies\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Modules\Areas\Entities\Area;
use Modules\Cities\Entities\City;
use Spatie\Activitylog\Traits\LogsActivity;

class Company extends Model
{
    use SoftDeletes, Notifiable, LogsActivity;

    protected $table = 'companies';
    protected $fillable = [
        'name', 'parent_id', 'slug','logo','mobile','address','phone','email', 'status', 'area_id', 'city_id', 'user_id'
    ];
    protected $dates = ['deleted_at'];
    // column to hidden in query
    protected $hidden = [];
    // attributes will save when updated
    protected static $logAttributes = [
        'name', 'parent_id', 'slug', 'status', 'area_id', 'city_id', 'user_id'
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
    public function scopeMainCompany($query)
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
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function area()
    {
        return $this->belongsTo(Area::class, 'area_id');
    }
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function City()
    {
        return $this->belongsTo(City::class, 'city_id');
    }
    public function _parent()
    {
        return $this->belongsTo(self::class, 'parent_id')->withDefault();
    }
    public function getLogoAttribute($val)
    {
        return ($val !== null) ? asset('images/Companies/logo/' . $val) : "";
    }

    public function count_sub()
    {
        $num =  $this->hasMany(self::class, 'parent_id')->count() ;
        return $num == 0 ? '' : $num;
    }
}
