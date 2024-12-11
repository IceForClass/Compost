<?php

namespace App\Models;

use App\Http\Controllers\MailController;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Mail\DemoMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

/**
 * Class User
 *
 * @property $id
 * @property $name
 * @property $email
 * @property $email_verified_at
 * @property $password
 * @property $remember_token
 * @property $created_at
 * @property $updated_at
 * @property $centre_id
 * @property $admin
 *
 * @property Centre $centre
 * @property Regist[] $regists
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
    
    protected $perPage = 20;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'email', 'centre_id', 'admin'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function centre()
    {
        return $this->belongsTo(Centre::class, 'centre_id', 'id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function regists()
    {
        return $this->hasMany(Regist::class, 'id', 'user_id');
    }

    protected static function boot()
    {
        parent::boot();
    
        static::creating(function ($user) {
            // Generamos una contraseña aleatoria
            $password = Str::random(10);
            $user->password = bcrypt($password);
    
            // Datos para el correo
            $mailData = [
                'name' => $user->name,
                'email' => $user->email,
                'password' => $password,
            ];
    
            // Enviar correo
            Mail::to($user->email)->send(new DemoMail($mailData));
        });
    }
    
    
    
}