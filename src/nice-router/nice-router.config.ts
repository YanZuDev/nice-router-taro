import NavigationService from '@/nice-router/navigation-service';
import _ from 'lodash';
import ViewMappingService from '@/nice-router/viewmapping-service';

export interface AppConfiguration {
  name: string;
  baseURL: string;
  version?: string | number;
  appType: string;
  viewConfig: Record<string, any>;
  api: Record<string, string>;
  backendRouterPageBlackList: string[];
  backendRouterPageKeyBlackList: string[];
  loginMode?: 'wechat' | 'mobile' | 'account';
  start?: (config: AppConfiguration, container: any) => void;
  get?: (key: string) => any;
}

const defaultConfig: AppConfiguration = {
  name: 'nice-router',
  baseURL: '',
  version: 1,
  appType: 'nice-router-taro',
  viewConfig: {},
  api: {},
  backendRouterPageBlackList: [],
  backendRouterPageKeyBlackList: [],
  get: (key) => _.get(this, key),
};

// eslint-disable-next-line import/no-mutable-exports
let Config: AppConfiguration = defaultConfig;

Config.start = (config: AppConfiguration, container: any) => {
  NavigationService.container = container;
  Config = _.merge(defaultConfig, config);
  ViewMappingService.viewConfig = Config?.viewConfig;
};

export default Config;
