/* eslint-disable */
import AuthTools from '@/nice-router/auth-tools';

export type DoLoginProps = {
  loginMethod: 'wechat_work_app' | 'wechat_app' | 'mobile_vcode' | 'wechat_mobile' | 'account_password';
};

export default {
  namespace: 'app',
  state: {},
  reducers: {},
  effects: {
    *logout() {
      console.log('logout from app');
      yield AuthTools.logout();
    },
  },
  subscriptions: {},
};
