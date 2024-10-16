import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const index = () => {
  return (
    <div className='wrapper'>
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
                    <label><input type="
                    checkbox" />Lưu mật khẩu</label>
                    <a href="#">Quên mật khẩu</a>
                </div>
                <button type='submit'>
                        Đăng nhập
                </button>
                <div className='register-link'>
                    <p>Bạn chưa có tài khoản? <a href="#">Đăng ký</a></p>
                </div>
            </form>
        </div>
    </div>
  );
};
export default index