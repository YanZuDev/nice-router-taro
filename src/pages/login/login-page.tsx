import ServerImage from '@/server-image/server-image';
import { Text, View } from '@tarojs/components';
import Config from '@/nice-router/nice-router.config';

import loginLogo from '../../assets/login-logo.png';
import VCodeLoginForm from './vcode-login-from';
import PasswordLoginForm from './password-login-from';
import WechatLoginForm from './wechat-login-form';
import './login.scss';
import { useVisible } from '@/service/use-service';
import WechatMobileLoginForm from './wechat-mobile-login-from';

export default function LoginPage() {
  const { visible, toggle } = useVisible(false);

  return (
    <View className='login-page'>
      <View className='login-page-header'>
        <View className='login-page-header-txt'>
          <Text>{Config.name}</Text>
        </View>
        <View className='login-page-header-logo'>
          <ServerImage src={loginLogo} />
        </View>
      </View>

      <View className='login-page-body'>
        <View className='login-form-brief'>WELCOME TO LOGIN</View>
        <View className='form-form-title'>欢迎登录</View>

        {Config.loginMode === 'wechat' && <WechatLoginForm />}
        {Config.loginMode === 'mobile' && visible && <WechatMobileLoginForm onSwitch={toggle} />}
        {Config.loginMode === 'mobile' && !visible && <VCodeLoginForm onSwitch={toggle} />}
        {Config.loginMode === 'account' && <PasswordLoginForm />}
      </View>
    </View>
  );
}
