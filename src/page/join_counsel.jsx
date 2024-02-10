import React from 'react';
import { useRef, useState, useEffect } from 'react';
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/register.css'
import Logo from '../image/logo.png'
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd,setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [userCategory, setUserCategory] = useState(true);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidName(result);
    }, [pwd]);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd]);

    return (
        <div className="wrap">
            <div className="header">
                <h1><a href="#"><img src={Logo} alt="soullink" /></a></h1>
                <div className="joinTop">
                    <h2>{/*   <span class="slogun_1">SOUL LINK</span> */}</h2>
                </div>
    
                <h3 className="skip">회원 형태별 가입</h3>
                <ul className="snb">
                    <li className={userCategory ? "off" : "on"}><a href="#">일반 회원</a></li>
                    <li className={!userCategory ? "off" : "on"}><a href="#">상담사</a></li>
                </ul>
            </div>
        </div>
    );
};
export default Register;