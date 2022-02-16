<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
        return [
            'name' => 'required|string|max:255',
            'email' =>  $email,
            'password' => $password
        ];
    }

}
