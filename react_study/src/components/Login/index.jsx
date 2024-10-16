import React, { useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Index = () => {  // Đổi 'index' thành 'Index'

 const [action, setAction] = useState('');
 const registerLink = () => {
    setAction('active')
 } 
 const loginLink = () => {
    setAction('')
 } 
  return (
    <div className={`wrapper ${action}`}>
        <div className='form-box login'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Tên đăng nhập' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Mật khẩu' required />
                    <RiLockPasswordFill className='icon'  />
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox" />Lưu mật khẩu</label>
                    <a href="#">Quên mật khẩu</a>
                </div>
                <button type='submit'>
                        Đăng nhập
                </button>
                <div className='register-link'>
                    <p>Bạn chưa có tài khoản? <a href="#" onClick={registerLink}>Đăng ký</a></p>
                </div>
            </form>
        </div>
        <div className='form-box register'>
            <form action="">
                <h1>Đăng ký</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Tên đăng nhập' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='Email' required />
                    <MdEmail className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Mật khẩu' required />
                    <RiLockPasswordFill className='icon'  />
                </div>
                <div className='remember-forgot'>
                    <label><input type="checkbox" />I agree to the terms & conditions </label>
                </div>
                <button type='submit'>
                        Đăng ký
                </button>
                <div className='register-link'>
                    <p>Already have an account?<a href="#" onClick={loginLink}>Đăng nhập</a></p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Index;
