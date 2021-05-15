<?php

namespace Modules\Supports\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Spatie\Activitylog\Traits\LogsActivity;

class StatusSupport extends Model
{
    use HasFactory, SoftDeletes, Notifiable, LogsActivity;

    protected $table = 'status_supports';
    protected $fillable = ['name','level','status','admin_id'];

    protected static function newFactory()
    {
        return \Modules\Supports\Database\factories\StatusSupportFactory::new();
    }
}
