import { AppConfiguration } from '@/nice-router/nice-router.config';
import ViewMappingConfig from '@/utils/viewmapping.config';

// const baseURL = 'http://localhost:8080/'; //后端服务地址
const baseURL = 'https://www.tiandtech.com/api/'; //后端服务地址

const ApiConfig = {
  FooterHome: 'app/viewHomePage',
  FooterMe: 'app/viewMePage',
  Login: 'clientLogin',
  BindMobile: 'bindMobile',
  VerifyCode: 'viewVerifyCode/:mobile',
  OSSToken: 'wxappService/customGetOssToken/',
  Logout: 'logout/',
};

const TheCustomizedProjectConfigurationDontUseItDirectly: Omit<AppConfiguration, 'start'> = {
  name: 'Tixwork',
  baseURL,
  version: 1,
  appType: 'mini-program',
  api: ApiConfig,
  backendRouterPageKeyBlackList: ['goBack/', 'goPrevious/'],
  backendRouterPageBlackList: ['NetworkException'],
  viewConfig: ViewMappingConfig,
  // loginMode: 'wechat',
  // loginMode: 'mobile', //包含绑定的微信登录
  loginMode: 'account',
};

console.log('***********   current env  ***********   ');
console.log('config.js is', TheCustomizedProjectConfigurationDontUseItDirectly);

export { ApiConfig, TheCustomizedProjectConfigurationDontUseItDirectly };
