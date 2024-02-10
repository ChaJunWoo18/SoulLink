import React from 'react';
import '../css/login.css'
import Logo from '../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import NaverLoginBtn from '../image/naver_login.png'
import KakaoLoginBtn from '../image/kakao_login.png'
import { useState } from 'react';
const Login = () => {
  const [isButtonPressed, setButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setButtonPressed(!isButtonPressed);
  };

  return (
    <div className='container'>
      <div className='title'>
        <h1><a><img src={Logo} alt='소울링크' /></a></h1>
      </div>

      <div className='sec_user'>
        <input type='button' value="일반 회원" className={isButtonPressed ? 'pressed-button' : 'normal-button'}
      onClick={handleButtonClick} disabled={isButtonPressed}/>

        <input type='button' value="상담사" className={!isButtonPressed ? 'pressed-button' : 'normal-button'}
      onClick={handleButtonClick} disabled={!isButtonPressed}/>
      </div>


      <form action='#' method='post' className='loginForm'>
        <fieldset>
        <div className='id_pw_btn_sec'>
          <div className='id_pw_sec'>
            <label className="input-container">
              <div className='icon-container'>
                <FontAwesomeIcon icon={faUser} 
                style={{ fontSize: '1.5em',color: '#003F51'}} />
              </div>
              <input type='text' name='user_id' placeholder='아이디(이메일)' />
            </label>
          
            <label className="input-container">
              <div className='icon-container'>
                <FontAwesomeIcon icon={faLock}
                style={{ fontSize: '1.5em',color: '#003F51'}} />
              </div>
              <input type='password' name='user_pw' placeholder='비밀번호' />
            </label>
          </div>

          <div className='login_btn_container'><button type='submit' className='login_btn'>로그인</button></div>
          </div>
          <div className="row">
              <label className='checkbox-container'>
                <input type="checkbox" name='login_y' className='login_y' />
                <span>자동 로그인</span>
              </label>
            <a href='#' className='idpw_search'>아이디(이메일)/비밀번호 찾기</a>
          </div>
        </fieldset>
      </form>
      <div className='hr-sect'>간편 로그인</div>
      <div className='social-container'>
        <div className='social-btn-container'>
        <button className='social-login-btn'><img src={NaverLoginBtn} alt="네이버로그인" /></button>
        <div className='space'></div>
        <button className='social-login-btn'><img src={KakaoLoginBtn} alt="카카오로그인" /></button>
        </div>
      </div>
      <a href='#' className='join_link'>회원이 아니신가요? 회원가입</a>
    </div>
  );
};
export default Login;
