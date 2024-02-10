import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { faChevronDown, faChevronUp, faCircleCheck, faCircleQuestion, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/register.css'
import NaverIcon from '../image/naver_icon_circle.png'
import KakaoIcon from '../image/kakao_icon_circle.png'
import Logo from '../image/logo.png'

const USER_REGEX = /^[a-zA-Z0-9가-힣]{2,8}$/; 
const PWD_REGEX = /^(?!.*(\d)\1{2,})(?!.*([A-Za-z])\2{2,})(?!.*(\s))(?=.*[A-Za-z0-9!@#$%^&*()-_+={}[\]:;<>,.?/\\]).{8,16}$/;
const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const Register = () => {

    const [name,setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email,setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [emailCheckClicked, setEmailCheckClicked] = useState(false)
    const [phoneCheckClicked, setPhoneCheckClicked] = useState(false)

    const [emailCheck, setEmailCheck] = useState('')
    const [emailCheckFocus, setEmailCheckFocus] = useState(false)

    const [pwd,setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [pwdInfo, setPwdInfo] = useState(false);
    const [showPwd, setShowPwd] = useState(false)

    const [matchPwd,setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [phoneNum,setPhoneNum] = useState('');
    const [validPhoneNum, setValidPhoneNum] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [checkPhone, setCheckPhone] = useState('')
    const [checkPhoneFocus, setCheckPhoneFocus] = useState(false)

    const [success, setSuccess] = useState(false);

    const [userCategory, setUserCategory] = useState(true);

    const [errorMessages, setErrorMessages] = useState({
        name: '2~8글자 사이로 입력해주세요. 사용불가:초성, 특수기호',
        email: '이메일 형식이 아닙니다. 예시)soullink@email.com',
        pwd: '비밀번호 형식이 올바르지 않습니다.',
        matchPwd : '비밀번호가 일치하지 않습니다.',
        phoneNum : '전화번호가 아닙니다. 예시)01012345678'
    });

    const [agreeContent1,setAgreeContent1] = useState(false)
    const [agreeCheckbox1,setAgreeCheckbox1] = useState(false)

    const [agreeContent2,setAgreeContent2] = useState(false)
    const [agreeCheckbox2,setAgreeCheckbox2] = useState(false)

    const [agreeContent3,setAgreeContent3] = useState(false)
    const [agreeCheckbox3,setAgreeCheckbox3] = useState(false)

    const [agreeContent4,setAgreeContent4] = useState(false)
    const [agreeCheckbox4,setAgreeCheckbox4] = useState(false)

    const [agreeContent5,setAgreeContent5] = useState(false)
    const [agreeCheckbox5,setAgreeCheckbox5] = useState(false)

    const [agreeCheckboxAll,setAgreeCheckboxAll] = useState(false)

    useEffect(() => {
        const result = USER_REGEX.test(name);
        setValidName(result);
    }, [name]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd]);

    useEffect(() => {
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    //useEffect(() => {
    //    setErrMsg('')
    //}, [name, pwd, matchPwd]);

    useEffect(()=> {
        if(agreeCheckbox1 && agreeCheckbox2 &&agreeCheckbox3 && agreeCheckbox4 && agreeCheckbox5)
            setAgreeCheckboxAll(true)
        else{
            setAgreeCheckboxAll(false)
        }
    })

    const agreeAll = ()=> {
        if(agreeCheckboxAll)
        {
            setAgreeCheckbox1(false)
            setAgreeCheckbox2(false)
            setAgreeCheckbox3(false)
            setAgreeCheckbox4(false)
            setAgreeCheckbox5(false)
            setAgreeCheckboxAll(false)
        }
        else{
            setAgreeCheckbox1(true)
            setAgreeCheckbox2(true)
            setAgreeCheckbox3(true)
            setAgreeCheckbox4(true)
            setAgreeCheckbox5(true)
        }
    }

    return (
        <div className="wrap">
            <div className="header">
                <h1><a href="#"><img src={Logo} alt="soullink" /></a></h1>
                <div className="joinTop">
                    <h2>{/*   <span class="slogun_1">SOUL LINK</span> */}</h2>
                </div>

                <h3 className="skip">회원 형태별 가입</h3>
                <div className="button-container">
                    <a href="#" className="button on">일반회원</a>
                    <a href="#" className="button">상담사</a>
                </div>

                <div className='social-container'>
                <h3 className="skip">소셜 회원가입</h3>
                <p>소셜로 간편 회원가입하세요</p>
                <img src={NaverIcon} alt='네이버아이콘' className='icon'/>
                <img src={KakaoIcon} alt='카카오아이콘' className='icon'/>
                </div>
            </div>
            <br/>
            <section className='body-container'>
                <div className="mbr-info">
                    <h4>회원가입하고 다양한 혜택을 누리세요!</h4>
                    <p className="subTx"><strong>*</strong> 필수 입력 정보입니다.</p>
                </div>

                <div className="form_wrap">
                    <form action="">
                        <fieldset className='fieldset-join'>
                        <legend className='skip'>회원가입</legend>
                        <div className="form_cont">
                            <label for="inputName" className={nameFocus || name!=="" ?'label-focus' : 'label-notfocus'}>이름(닉네임) <strong>*</strong></label>
                            <input id="inputName" className="user_name" type="text"  maxlength="8" autoComplete='off'
                            onFocus={()=>setNameFocus(true)} 
                            onBlur={()=>setNameFocus(false)} 
                            onChange={(e)=>setName(e.target.value)} />
                            <input type='button' value={'중복확인'} className='form-btn'/>
                        </div>
                        {nameFocus && !validName &&  (
                            <div className="notice_msg" id="notice_msg_name">
                                <div className='balloon'>
                                    <span className='valid_name'>{errorMessages.name}</span>
                                </div>
                            </div>
                        )}
                
                        <div className="form_cont">
                            <label for="inputEmail" className={emailFocus || email!=='' ?'label-focus' : 'label-notfocus'}>이메일(아이디) <strong>*</strong></label>
                            <input id="inputEmail" className="user_email" type="email"
                            onFocus={()=>setEmailFocus(true)} autoComplete='off'
                            onBlur={()=>setEmailFocus(false)} 
                            onChange={(e)=>setEmail(e.target.value)} />
                            <input type='button' value={emailCheckClicked ? '재전송' : '인증번호 전송' } className='form-btn' 
                            onClick={()=> setEmailCheckClicked(true)}/>
                        </div>
                        {emailFocus && !validEmail && (
                            <div className="notice_msg" id="notice_msg_name">
                                <div className='balloon'>
                                    <span className='valid_name'>{errorMessages.email}</span>
                                </div>
                            </div>
                        )}
                        <div className="form_cont">
                            <label for="inputCheckEmail" className={emailCheckFocus || emailCheck!=='' ?'label-focus' : 'label-notfocus'}>이메일 인증번호 <strong>*</strong></label>
                            <input id="inputCheckEmail" className="user_email" type="text"
                            onFocus={()=>setEmailCheckFocus(true)} autoComplete='off'
                            onBlur={()=>setEmailCheckFocus(false)} 
                            onChange={(e)=>setEmailCheck(e.target.value)}
                            />
                            <input type='button' value={'확인'} className='form-btn'/>
                        </div>

                        <div className="form_cont">
                            <label for="inputPwd" className={pwdFocus || pwd!=='' ?'label-focus' : 'label-notfocus'}>비밀번호(8~16자의 영문,숫자,특수기호) <strong>*</strong></label>
                            <input id="inputPwd" className="user_pwd" type={showPwd ? "text" : "password" }
                            onFocus={()=>setPwdFocus(true)} autoComplete='off' maxLength={16}
                            onBlur={()=>setPwdFocus(false)} 
                            onChange={(e)=>setPwd(e.target.value)} />
                            <button className='question-btn'>
                                <FontAwesomeIcon icon={faCircleQuestion} size='2x'
                                color='#003F51' onClick={()=>setPwdInfo(!pwdInfo)}/>
                            </button>
                            <div className='pwd-enable-btn-cont'>
                            <button className='pwd-enable-btn'>
                                <FontAwesomeIcon icon={faCircleCheck}
                                color={showPwd ? '#003F51' : 'gray'} onClick={()=>setShowPwd(!showPwd)}/>
                                <span style={{fontSize:14}}> 보기</span>
                            </button>
                            </div>
                        </div>
                        {pwdInfo && 
                            <div className='pwd-info-cont'>
                                <p>비밀번호 작성법</p>
                                <ul>
                                    <li>8~16자의 영문, 숫자, 특수기호를 포함(공백입력 불가)</li>
                                    <li>3자 이상 연속 영문/숫자 조합 사용불가(AAA,111)</li>
                                    <li>아이디와 동일한 비밀번호 사용 불가</li>
                                    <li>반복되는 영문/숫자 조합 사용불가(1234,ABCD)</li>
                                    <li>키보드의 연속 패턴은 사용하지 마세요(ASDF)</li>
                                    <li>주기적으로 변경하여 안전하게 관리하세요</li>
                                </ul>
                            </div>
                        }

                        {pwdFocus && !validPwd && (
                            <div className="notice_msg" id="notice_msg_name">
                                <div className='balloon'>
                                    <span className='valid_name'>{errorMessages.pwd}</span>
                                </div>
                            </div>
                        )}

                        <div className="form_cont">
                            <label for="inputMatdchPwd" className={matchFocus || matchPwd!=='' ?'label-focus' : 'label-notfocus'}>비밀번호 확인 <strong>*</strong></label>
                            <input id="inputMatdchPwd" className="user_match_pwd" type="password"
                            onFocus={()=>setMatchFocus(true)} autoComplete='off'
                            onBlur={()=>setMatchFocus(false)} 
                            onChange={(e)=>setMatchPwd(e.target.value)} />
                        </div>
                        {matchFocus && !validMatch && (
                            <div className="notice_msg" id="notice_msg_name">
                                <div className='balloon'>
                                    <span className='valid_name'>{errorMessages.matchPwd}</span>
                                </div>
                            </div>
                        )}

                        <div className="form_cont">
                            <label for="inputPhone" className={phoneFocus || phoneNum!=='' ?'label-focus' : 'label-notfocus'}>핸드폰 번호 <strong>*</strong></label>
                            <input id="inputPhone" className="user_phone" type="text"
                            onFocus={()=>setPhoneFocus(true)} autoComplete='off'
                            onBlur={()=>setPhoneFocus(false)} 
                            onChange={(e)=>setPhoneNum(e.target.value)} />
                             <input type='button' value={phoneCheckClicked ? '재전송' : '인증번호 전송' } className='form-btn' 
                            onClick={()=> setPhoneCheckClicked(true)}/>
                        </div>
                        {phoneFocus && !validPhoneNum && (
                            <div className="notice_msg" id="notice_msg_name">
                                <div className='balloon'>
                                    <span className='valid_name'>{errorMessages.phoneNum}</span>
                                </div>
                            </div>
                        )}

                        <div className="form_cont">
                            <label for="inputCheckPhone" className={checkPhoneFocus || checkPhone!=='' ?'label-focus' : 'label-notfocus'}>핸드폰 번호 확인 <strong>*</strong></label>
                            <input id="inputCheckPhone" className="user_email" type="text"
                            onFocus={()=>setCheckPhoneFocus(true)} autoComplete='off'
                            onBlur={()=>setCheckPhoneFocus(false)} 
                            onChange={(e)=>setCheckPhone(e.target.value)} />
                            <input type='button' value={'확인'} className='form-btn'/>
                        </div>
                        <br />
                        

                        <section className='agree-sec'>
                        <div className="skip">약관동의</div>
                        <ul className='agree-cont'>
                            <li>
                                <div className="agree-title">
                                   <span>[필수]</span> 이용약관 동의
                                </div>
                                <div className='agree-content-btn' onClick={()=>setAgreeContent1(!agreeContent1)}>
                                    <label for='agree1'>내용보기</label>
                                    <FontAwesomeIcon icon={agreeContent1 ? faChevronUp : faChevronDown} id='agree1'/>
                                </div>
                                <FontAwesomeIcon icon={faSquareCheck} className='agree-checkbox1'
                                    onClick={()=>setAgreeCheckbox1(!agreeCheckbox1)}
                                    style={agreeCheckbox1 ? {color: "#74C0FC"}: {color: "#fff"}}
                                    />
                            </li>
                            <div className={agreeContent1 ? 'table-cont' : 'skip'}>
                                <table className='table-border'>
                                    <tr><td>제 1조(목적)</td></tr>
                                    <tr><td>이 약관은 소울링크(이하 '회사'라 함)가 제공하는 서비스의 이용조건과 운영에 관한 제반 사항을 규정하는 것을 목적으로 합니다.</td></tr>
                                    <tr><td>제 2조 (약관의 효력과 변경)</td></tr>
                                    <tr><td>본 약관은 회원이 회원가입 신청 시 동의하여 효력이 발생합니다.</td></tr>
                                    <tr><td>회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 변경된 약관은 회사가 운영하는 웹사이트나 애플리케이션에 공지함으로써 효력이 발생합니다.</td></tr>
                                    <tr><td>제 3조 (서비스의 종류)</td></tr>
                                    <tr><td>회사가 제공하는 서비스 종류는 다음과 같습니다.</td></tr>
                                    <tr><td>1. 서비스서비스1</td></tr>
                                    <tr><td>2. 서비스서비스2</td></tr>
                                    <tr><td>3. 서비스서비스3</td></tr>
                                </table>
                            </div>

                            <li>
                                <div className="agree-title">
                                   <span>[필수]</span> 개인정보 수집 동의
                                </div>
                                <div className='agree-content-btn' onClick={()=>setAgreeContent2(!agreeContent2)}>
                                    <label for='agree2'>내용보기</label>
                                    <FontAwesomeIcon icon={agreeContent2 ? faChevronUp : faChevronDown} id='agree2'/>
                                </div>
                                <FontAwesomeIcon icon={faSquareCheck} className='agree-checkbox1'
                                    onClick={()=>setAgreeCheckbox2(!agreeCheckbox2)}
                                    style={agreeCheckbox2 ? {color: "#74C0FC"}: {color: "#fff"}}
                                    />
                            </li>
                            <div className={agreeContent2 ? 'table-cont' : 'skip'}>
                                <table className='table-border'>
                                <tr><td>제 1조(목적)</td></tr>
                                <tr><td>이 약관은 소울링크(이하 '회사'라 함)가 제공하는 서비스의 이용조건과 운영에 관한 제반 사항을 규정하는 것을 목적으로 합니다.</td></tr>
                                <tr><td>제 2조 (약관의 효력과 변경)</td></tr>
                                <tr><td>본 약관은 회원이 회원가입 신청 시 동의하여 효력이 발생합니다.</td></tr>
                                <tr><td>회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 변경된 약관은 회사가 운영하는 웹사이트나 애플리케이션에 공지함으로써 효력이 발생합니다.</td></tr>
                                <tr><td>제 3조 (개인정보 수집 및 이용 동의)</td></tr>
                                <tr><td>회사는 서비스 제공을 위해 회원의 필수 개인정보를 수집하고 있습니다. 회원은 본인의 개인정보를 제공함으로써 서비스를 이용할 수 있습니다.</td></tr>
                                <tr><td>수집하는 개인정보 항목: [필수 개인정보 항목 기입]</td></tr>
                                <tr><td>개인정보의 수집 및 이용 목적: [수집 및 이용 목적 기입]</td></tr>
                                <tr><td>개인정보의 보유 기간: [보유 기간 기입]</td></tr>
                                <tr><td>제 4조 (동의 철회)</td></tr>
                                <tr><td>회원은 개인정보의 수집 및 이용에 대한 동의를 철회할 수 있습니다. 동의 철회는 회원 탈퇴를 의미하며, 탈퇴 시 수집된 개인정보는 즉시 파기됩니다.</td></tr>
                                </table>
                            </div>
                            <hr className='table-hr'/>
                            <li>
                                <div className="agree-title">
                                    [선택] 개인정보 수집 이용 동의
                                </div>
                                <div className='agree-content-btn' onClick={()=>setAgreeContent3(!agreeContent3)}>
                                    <label for='agree3'>내용보기</label>
                                    <FontAwesomeIcon icon={agreeContent3 ? faChevronUp : faChevronDown} id='agree3'/>
                                </div>
                                <FontAwesomeIcon icon={faSquareCheck} className='agree-checkbox1'
                                    onClick={()=>setAgreeCheckbox3(!agreeCheckbox3)}
                                    style={agreeCheckbox3 ? {color: "#74C0FC"}: {color: "#fff"}}
                                    />
                            </li>
                            <div className={agreeContent3 ? 'table-cont' : 'skip'}>
                                <table className='table-border'>
                                <tr><td>제 1조(목적)</td></tr>
                                <tr><td>이 약관은 소울링크(이하 '회사'라 함)가 제공하는 서비스의 이용조건과 운영에 관한 제반 사항을 규정하는 것을 목적으로 합니다.</td></tr>
                                <tr><td>제 2조 (약관의 효력과 변경)</td></tr>
                                <tr><td>본 약관은 회원이 회원가입 신청 시 동의하여 효력이 발생합니다.</td></tr>
                                <tr><td>회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 변경된 약관은 회사가 운영하는 웹사이트나 애플리케이션에 공지함으로써 효력이 발생합니다.</td></tr>
                                <tr><td>제 3조 (선택적 개인정보 수집 및 이용 동의)</td></tr>
                                <tr><td>회사는 서비스 제공을 위해 회원의 선택적 개인정보를 수집할 수 있습니다. 회원은 본인의 개인정보를 제공할 것을 선택할 수 있습니다.</td></tr>
                                <tr><td>선택적으로 수집하는 개인정보 항목: [선택적 개인정보 항목 기입]</td></tr>
                                <tr><td>선택적 개인정보의 수집 및 이용 목적: [수집 및 이용 목적 기입]</td></tr>
                                <tr><td>선택적 개인정보의 보유 기간: [보유 기간 기입]</td></tr>
                                <tr><td>제 4조 (동의 철회)</td></tr>
                                <tr><td>회원은 선택적 개인정보의 수집 및 이용에 대한 동의를 철회할 수 있습니다. 동의 철회 시 수집된 개인정보는 즉시 파기됩니다.</td></tr>
                                </table>
                            </div>

                            <li>
                                <div className="agree-title">
                                    [선택] 광고성 정보 이메일 수신 동의
                                </div>
                                <div className='agree-content-btn' onClick={()=>setAgreeContent4(!agreeContent4)}>
                                    <label for='agree4'>내용보기</label>
                                    <FontAwesomeIcon icon={agreeContent4 ? faChevronUp : faChevronDown} id='agree4'/>
                                </div>
                                <FontAwesomeIcon icon={faSquareCheck} className='agree-checkbox1'
                                    onClick={()=>setAgreeCheckbox4(!agreeCheckbox4)}
                                    style={agreeCheckbox4 ? {color: "#74C0FC"}: {color: "#fff"}}
                                    />
                            </li>
                            <div className={agreeContent4 ? 'table-cont' : 'skip'}>
                                <table className='table-border'>
                                <tr><td>제 1조(목적)</td></tr>
                                <tr><td>이 약관은 소울링크(이하 '회사'라 함)가 제공하는 서비스의 이용조건과 운영에 관한 제반 사항을 규정하는 것을 목적으로 합니다.</td></tr>
                                <tr><td>제 2조 (약관의 효력과 변경)</td></tr>
                                <tr><td>본 약관은 회원이 회원가입 신청 시 동의하여 효력이 발생합니다.</td></tr>
                                <tr><td>회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 변경된 약관은 회사가 운영하는 웹사이트나 애플리케이션에 공지함으로써 효력이 발생합니다.</td></tr>
                                <tr><td>제 3조 (광고성 정보 이메일 수신 동의)</td></tr>
                                <tr><td>회사는 회원의 동의를 받아 광고성 정보 이메일을 발송할 수 있습니다. 회원은 광고성 정보 이메일 수신에 대한 동의를 선택할 수 있습니다.</td></tr>
                                <tr><td>광고성 정보 이메일 수신 동의에 대한 내용:</td></tr>
                                <tr><td>1. 광고성 정보 이메일 수신에 동의하십니까?</td></tr>
                                <tr><td>2. 동의 시 수신할 광고성 정보의 내용 및 빈도는 다음과 같습니다: [내용 및 빈도 기입]</td></tr>
                                <tr><td>제 4조 (동의 철회)</td></tr>
                                <tr><td>회원은 광고성 정보 이메일 수신 동의를 철회할 수 있습니다. 동의 철회 시 광고성 정보 이메일 발송이 중지됩니다.</td></tr>
                                </table>
                            </div>

                            <li>
                                <div className="agree-title">
                                    [선택] 광고성 정보 SMS 수신 동의
                                </div>
                                <div className='agree-content-btn' onClick={()=>setAgreeContent5(!agreeContent5)}>
                                    <label for='agree5'>내용보기</label>
                                    <FontAwesomeIcon icon={agreeContent5 ? faChevronUp : faChevronDown} id='agree5'/>
                                </div>
                                <FontAwesomeIcon icon={faSquareCheck} className='agree-checkbox1'
                                    onClick={()=>setAgreeCheckbox5(!agreeCheckbox5)}
                                    style={agreeCheckbox5 ? {color: "#74C0FC"}: {color: "#fff"}}
                                    />
                            </li>
                            <div className={agreeContent5 ? 'table-cont' : 'skip'}>
                                <table className='table-border'>
                                <tr><td>제 1조(목적)</td></tr>
                                <tr><td>이 약관은 소울링크(이하 '회사'라 함)가 제공하는 서비스의 이용조건과 운영에 관한 제반 사항을 규정하는 것을 목적으로 합니다.</td></tr>
                                <tr><td>제 2조 (약관의 효력과 변경)</td></tr>
                                <tr><td>본 약관은 회원이 회원가입 신청 시 동의하여 효력이 발생합니다.</td></tr>
                                <tr><td>회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 변경된 약관은 회사가 운영하는 웹사이트나 애플리케이션에 공지함으로써 효력이 발생합니다.</td></tr>
                                <tr><td>제 3조 (개인정보 수집 및 이용 동의)</td></tr>
                                <tr><td>회사는 서비스 제공을 위해 회원의 필수 개인정보를 수집하고 있습니다. 회원은 본인의 개인정보를 제공함으로써 서비스를 이용할 수 있습니다.</td></tr>
                                <tr><td>수집하는 개인정보 항목: [필수 개인정보 항목 기입]</td></tr>
                                <tr><td>개인정보의 수집 및 이용 목적: [수집 및 이용 목적 기입]</td></tr>
                                <tr><td>개인정보의 보유 기간: [보유 기간 기입]</td></tr>
                                <tr><td>제 4조 (동의 철회)</td></tr>
                                <tr><td>회원은 개인정보의 수집 및 이용에 대한 동의를 철회할 수 있습니다. 동의 철회는 회원 탈퇴를 의미하며, 탈퇴 시 수집된 개인정보는 즉시 파기됩니다.</td></tr>
                                </table>
                            </div>
                            <hr className='table-hr-solid'/>
                            <li>
                            <div className="agree-title">
                                필수 동의 항목 및 선택 동의 항목에 모두 동의합니다. 
                            </div>
                            <div className='agree-content-btn'></div>
                            <FontAwesomeIcon icon={faSquareCheck} className='agree-checkbox1'
                                onClick={agreeAll}
                                style={agreeCheckboxAll ? {color: "#74C0FC"}: {color: "#fff"}}
                            />
                            </li>
                        </ul>
                    </section>
                    </fieldset>
                    <br/>
                    <div className='join-btn-sec'>
                        <div className='join-btn-cont'>
                            <button className='join-btn' type='submit'>가입하기</button>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
            <br/>
            {/*footer */}
        </div>
    );
};
export default Register;