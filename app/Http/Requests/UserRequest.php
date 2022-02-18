<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Auth;
use App\Models\User;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $email      = 'required|string|email|max:255|unique:users';
        $password   = 'required|string|min:8|confirmed';
        if($this->route('user')){
            $email      = 'required|string|email|max:255|unique:users,email,'.$this->route('user');
            $password   = 'nullable|string|min:8|confirmed';
        }

        $data = User::find(request()->route('user'));
        if($data && ($data->photo === request()->photo)){
            $photo = 'required';
        }else{
            $photo = 'required|base64image:1|base64file:png/jpg/jpeg/pdf';
        }

        return [
            'name'      => 'required|string|max:255',
            'role_id'   => 'required',
            'photo'     => $photo,
            'email'     => $email,
            'password'  => $password
        ];
    }

    public function messages()
    {
        return [
            'photo.base64image'        => 'Maximum upload file 1 mb.',
            'photo.base64file'        => 'Extension must be png/jpg/jpeg.',
        ];
    }

}
