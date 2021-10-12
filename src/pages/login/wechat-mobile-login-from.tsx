import { View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import { noop } from '@/nice-router/nice-router-util';
import EleButton from '@/components/elements/ele-button';

import './login.scss';
import LoginUtils from './login-utils';
import AuthTools from '@/nice-router/auth-tools';
import GlobalToast from '@/nice-router/global-toast';

export default function WechatMobileLoginForm(props) {
  const { onShowVCode = noop } = props;

  const [code, setCode] = useState('');

  useEffect(() => {
    LoginUtils.getCode().then(setCode);
  }, []);

  const handleSubmit = async (e) => {
    const theTokenIsLoginToken = await AuthTools.isLoginToken();
    console.log('Is an validate login token??', theTokenIsLoginToken);

    const onCompleted = () => LoginUtils.getCode().then(setCode);
    const { encryptedData, iv } = e.detail;
    const params = { encryptedData, iv, code, loginMethod: 'wechat_mobile' };
    try {
      await LoginUtils.getWxObj().checkSession();
      LoginUtils.remoteLogin({ params, onCompleted });
    } catch (e) {
      GlobalToast.show({ text: '登录失败，稍后重试！' });
      onCompleted();
    }
  };

  return (
    <>
      <EleButton openType='getPhoneNumber' className='login-button' onGetPhoneNumber={handleSubmit}>
        使用微信绑定的手机号
      </EleButton>
      <View className='login-form-fields-switch'>
        <EleButton mode='ghost' onClick={onShowVCode}>
          其他手机号码
        </EleButton>
      </View>
    </>
  );
}
