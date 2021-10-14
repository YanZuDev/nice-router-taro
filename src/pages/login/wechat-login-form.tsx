import EleButton from '@/components/elements/ele-button';
import './login.scss';
import { useEffect, useState } from 'react';
import LoginUtils from './login-utils';
import AuthTools from '@/nice-router/auth-tools';
import GlobalToast from '@/nice-router/global-toast';
import { isEmpty } from '@/nice-router/nice-router-util';

export default function WechatLoginForm() {
  const [code, setCode] = useState('');

  useEffect(() => {
    LoginUtils.getCode().then(setCode);
  }, []);

  const handleSubmit = async (e) => {
    const theTokenIsLoginToken = await AuthTools.isLoginToken();
    console.log('Is an validate login token??', theTokenIsLoginToken);
    // if (theTokenIsLoginToken) {
    //   return;
    // }

    const onCompleted = () => LoginUtils.getCode().then(setCode);
    const loginMethod = LoginUtils.isQYWechat() ? 'wechat_work_app' : 'wechat_app';
    const { encryptedData, iv } = e.detail;
    const params = { encryptedData, iv, code, loginMethod: loginMethod };
    if (isEmpty(encryptedData)) {
      console.log('用户拒绝了授权');
      return;
    }
    try {
      await LoginUtils.getWxObj().checkSession();
      LoginUtils.remoteLogin({ params, onCompleted });
    } catch (err) {
      GlobalToast.show({ text: '登录失败，稍后重试！' });
      onCompleted();
    }
  };
  return (
    <EleButton className='login-button' openType='getUserInfo' onGetUserInfo={handleSubmit}>
      微信登录
    </EleButton>
  );
}
