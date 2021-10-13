const ViewMappingConfig = {
  'com.tiandtech.appview.MePage': {
    pageName: '/pages/me/me-page',
    stateAction: 'me/save',
  },
  LoginForm: {
    pageName: '/pages/login/login-page',
  },
  'com.tiandtech.appview.HomePage': {
    pageName: '/pages/home/home-page',
    stateAction: 'home/save',
  },

  'com.mock': [
    {
      pageName: '/pages/listof-page',
      stateAction: 'listofpage/save',
    },
    {
      pageName: '/pages/listof-page2',
      stateAction: 'listofpage2/save',
    },
  ],
};

export default ViewMappingConfig;
