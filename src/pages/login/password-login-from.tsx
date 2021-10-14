import EleInput from '@/components/form/field/ele-input';
import { View } from '@tarojs/components';
import { useState } from 'react';
import EleButton from '@/components/elements/ele-button';

import './login.scss';
import AuthTools from '@/nice-router/auth-tools';
import LoginUtils from './login-utils';
import GlobalToast from '@/nice-router/global-toast';
import ElePassword from '@/components/form/field/ele-password';

export default function PasswordForm() {
  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();

  const handleSubmit = async () => {
    const theTokenIsLoginToken = await AuthTools.isLoginToken();
    console.log('Is an validate login token??', theTokenIsLoginToken);

    const params = { username, password, loginMethod: 'account_password' };
    try {
      await LoginUtils.getWxObj().checkSession();
      LoginUtils.remoteLogin({ params });
    } catch (e) {
      GlobalToast.show({ text: '登录失败，稍后重试！' });
    }
  };

  return (
    <>
      <View className='login-form-fields'>
        <EleInput
          className='login-form-fields-input'
          placeholder='请输入用户名'
          name='username'
          value={username}
          onChange={setUsername}
        />
        <ElePassword
          className='login-form-fields-input'
          placeholder='请输入密码'
          name='password'
          value={password}
          onChange={setPassword}
        />
      </View>
      <EleButton className='login-button' onClick={handleSubmit}>
        登录
      </EleButton>
    </>
  );
}
