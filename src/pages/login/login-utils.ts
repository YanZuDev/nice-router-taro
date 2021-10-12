import { isWeapp } from '@/utils/index';
import Taro from '@tarojs/taro';
import AuthTools, { AuthInfoSecurityStatus, AuthInfoType } from '@/nice-router/auth-tools';
import ActionUtil from '@/nice-router/action-util';
import NavigationService from '@/nice-router/navigation-service';
import { ApiConfig } from '@/utils/config';
// @ts-ignore
const wxObj = wx.qy || Taro;

const getCode = () => {
  return new Promise((resolve) => {
    if (isWeapp()) {
      wxObj.login().then((res) => {
        console.log('do wechat login, get code', res.code);
        resolve(res.code);
      });
    }
  });
};

const remoteLogin = ({ params, onCompleted }: { params: any; onCompleted?: () => void }) => {
  console.log('do remote login, params', params);
  NavigationService.post(ApiConfig.Login, params, {
    onSuccess: async (data, resp) => {
      //1. 回调后保存token
      const { authorization } = resp.headers;
      let authInfo: AuthInfoType = {} as AuthInfoType;
      console.log('wx login response, headers', resp.headers);
      if (authorization) {
        // noinspection JSIgnoredPromiseFromCall
        await AuthTools.saveTokenAsync(authorization);
        authInfo = AuthTools.toAuthInfo(authorization);
      }

      //2. 判断是否正常登录
      const successLogin = authInfo.securityStatus === AuthInfoSecurityStatus.CERTIFICATE || data.loginSuccess;
      onCompleted && onCompleted();
      if (!successLogin) {
        return;
      }
      //3. 登录成功后，回调处理
      const callbackAction = { linkToUrl: data.callbackUrl, ...data };
      //4. 如果resp 不是Action或者不包含callbackUrl，则直接后退,
      if (!ActionUtil.isActionLike(callbackAction)) {
        await NavigationService.back();
        return;
      }

      //5.如果有回调URL，直接请求
      await NavigationService.view(
        callbackAction,
        {},
        {
          navigationMethod: 'replace',
          onSuccess: (cbData, cbResp) => {
            console.log('success login an success do callback', cbData);
            if (cbResp.success) {
              NavigationService.back();
            }
          },
        }
      );
    },
  });
};

const LoginUtils = {
  getCode,
  getWxObj: () => wxObj,
  // @ts-ignore 企业微信
  isQYWechat: () => !!wx.qy,
  remoteLogin,
};

export default LoginUtils;
