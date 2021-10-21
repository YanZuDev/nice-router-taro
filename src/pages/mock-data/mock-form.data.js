const treeRoot = {
  title: '娱乐项目',
  value: '1',
  nodes: [
    {
      id: 1,
      title: '麻将',
      value: '麻将1-1',
    },
    {
      id: 2,
      title: '火锅串串',
      value: '火锅串串1-2',
      nodes: [
        {
          id: 3,
          title: '魏蜀吴火锅',
          value: '魏蜀吴火锅1-2-1',
          nodes: [
            {
              id: 4,
              title: '鸭血',
              value: '鸭血1-2-1-1',
              brief: '缺货',
              disabled: true,
            },
            {
              id: 5,
              title: '猪脑',
              value: '猪脑1-2-1-2',
            },
          ],
        },
        {
          id: 6,
          title: '马路边边',
          value: '马路边边1-2-2',
          brief: '暂停营业',
          disabled: true,
        },
      ],
    },
  ],
};

const productList = {
  id: 1,
  type: 'listof',
  displayMode: 'product',
  numColumns: 2,
  items: [{ id: 'p1' }, { id: 'p2' }, { id: 'p3' }, { id: 'p4' }],
  dataContainer: {
    p1: {
      id: 'p1',
      preTag: '自营',
      tags: ['618'],
      brand: '西门子',
      title: '大冰箱，超级大，610L让你生活无忧，心情好才是真的好',
      price: 500.12,
      imageUrl: 'http://www.eastphoto.cn/indexImages/ep-012136603.jpg',
    },
    p2: {
      id: 'p2',
      preTag: '双链小超',
      tags: ['券'],
      brand: '可口可乐',
      title: '300ml，冰霜开心',
      price: 2.5,
      imageUrl:
        'https://m.360buyimg.com/babel/s823x404_jfs/t21784/201/795134266/176047/3dad2026/5b18c66eN8c4deacf.jpg!q70.dpg',
    },
    p3: {
      id: 'p3',
      preTag: '',
      tags: [''],
      brand: '靓家私',
      title: '这是一个超级大的家居',
      price: 200.12,
      imageUrl:
        'https://m.360buyimg.com/babel/s370x259_jfs/t1/20729/24/4177/80676/5c2f1aeaE062589aa/ee7cc78db75d62ed.jpg!q70.dpg',
    },
    p4: {
      id: 'p4',
      preTag: '官方旗舰',
      tags: ['券'],
      brand: '美丽新时代',
      title: '毛巾被，超级大的那么中，估计有100斤，全国包邮',
      price: 30000.55,
      imageUrl:
        'https://m.360buyimg.com/babel/s370x259_jfs/t1/20729/24/4177/80676/5c2f1aeaE062589aa/ee7cc78db75d62ed.jpg!q70.dpg',
    },
  },
};

const mockForm1Data = {
  id: 'test-form',
  pageTitle: '测试form1',
  stepList: [
    {
      title: '选货',
      status: 'success',
    },
    {
      title: '买单',
      selected: true,
    },
    { title: '走人' },
  ],
  actionList: [
    {
      code: 'preStep',
      title: '上一步',
    },
    { code: 'nextStep', title: '下一步', linkToUrl: 'mock-generic-form-2/', navigationMethod: 'reLaunch' },
  ],
  groupList: [
    {
      name: 'fist-group',
      title: '第一组',
      actionList: [
        { id: 1, code: 1, title: '上一步' },
        { id: 2, code: 2, title: '删除记录' },
        { id: 3, code: 'submit', title: '下一步' },
      ],
      fieldList: [
        {
          name: 'ooo-checkbox',
          label: '参与人员',
          type: 'checkbox',
          value: ['women', 'backend-developer'],
          title: '参与人员',
          candidateValues: [
            { id: 'man', title: '男人' },
            { id: 'women', title: '女人' },
            { id: 'backend-developer', title: '后端开发' },
          ],
          rules: [
            {
              required: true,
              message: '参与人员必须要选择的哦',
            },
          ],
        },
        {
          name: 'step-number',
          label: '数量',
          type: 'step-number',
          value: 25,
          max: 40,
          min: 10,
          step: 5,
          title: '只喝啥',
          rules: [
            {
              required: true,
              message: '数量不能为空',
            },
          ],
        },

        {
          name: 'ooo-radio',
          label: '只喝',
          type: 'radio',
          value: 'sprite',
          title: '只喝啥',
          candidateValues: [
            { id: 'coke', title: '可乐' },
            { id: 'sprite', title: '雪碧' },
            { id: 'mao-tai', title: '飞天茅台' },
          ],
          rules: [
            {
              required: true,
              message: '参与人员必须要选择的哦',
            },
          ],
        },

        {
          name: '-1-team-building',
          label: '团建',
          type: 'tree-picker',
          placeholder: '团建项目',
          value: '猪脑1-2-1-2',
          title: 'AAA',
          root: treeRoot,
          rules: [
            {
              required: true,
              message: '团建必须要选择的哦',
            },
          ],
        },
        {
          name: 'a-cook-menu-picker',
          label: '菜品',
          type: 'picker',
          placeholder: '请点餐',
          title: 'AAA',
          candidateValues: [
            {
              id: 1,
              title: '鱼',
              candidateValues: [
                {
                  id: 11,
                  title: '红烧',
                  candidateValues: [
                    { id: 111, title: '半条' },
                    { id: 112, title: '一斤' },
                    { id: 113, title: '二斤' },
                    { id: 114, title: '三斤' },
                  ],
                },
                {
                  id: 12,
                  title: '清蒸',
                  candidateValues: [
                    { id: 123, title: '半条' },
                    { id: 122, title: '一斤' },
                    { id: 123, title: '二斤' },
                    { id: 124, title: '三斤' },
                  ],
                },
              ],
            },
            {
              id: 2,
              title: '猪肉',
              candidateValues: [
                {
                  id: 21,
                  name: '红烧',
                  candidateValues: [
                    { id: 211, title: '一碗' },
                    { id: 212, title: '二碗' },
                    { id: 213, title: '三碗' },
                    { id: 214, title: '一盆' },
                  ],
                },
                {
                  id: 22,
                  title: '油炸',
                  candidateValues: [
                    { id: 223, title: '二两' },
                    { id: 222, title: '半斤' },
                    { id: 223, title: '一桶' },
                  ],
                },
              ],
            },
          ],
        },

        {
          name: '-1-team-building3333',
          label: '扫码ID',
          type: 'qr-scan',
          placeholder: '团建项目',
          value: '猪脑1-2-1-2',
          title: 'AAA',
        },
        {
          name: '22-1-region',
          label: '省市区',
          type: 'region-picker',
          placeholder: '选择省市区',
          value: '四川省-成都市-金牛区',
          title: 'AAA',
        },

        {
          name: '111-display',
          label: '这个不应该展示',
          type: 'display-field',
          disabled: true,
          value: {
            kids: [{ id: '8', type: 'listof', ...productList }],
          },
        },

        {
          name: '0-phone',
          label: '手机号',
          type: 'phone',
          placeholder: '输入手机号',
          disabled: true,
          value: 13880964614,
          rules: [
            {
              required: true,
              message: '要填写手机号哦',
            },
            {
              pattern: /^1\d{10}$/,
              message: '手机号码格式不对',
            },
          ],
        },
        {
          name: '1-favorite',
          label: '爱好',
          type: 'multi-select',
          placeholder: '请选择你的最爱',
          tips: '不能填写男女关系',
          value: ['pia-pia'],
          candidateValues: [
            { title: '吃饭', id: 'eat' },
            { title: '睡觉', id: 'sleep' },
            { title: '打豆豆', id: 'pia-pia' },
            { title: '唱歌', id: 'sing-song' },
          ],
          rules: [
            {
              required: true,
              message: '还没选择你的最爱哦',
            },
          ],
        },
        {
          name: '2-your-favorite',
          label: '爱好222',
          type: 'multi-select',
          placeholder: '请选择你的最爱22222',
          tips: '不能填写男女关系222222',
          value: ['sing-song3'],
          candidateValues: [
            { title: '吃饭2', id: 'eat3' },
            { title: '睡觉3', id: 'sleep2' },
            { title: '打豆豆4', id: 'pia-pia2' },
            { title: '唱歌5', id: 'sing-song3' },
          ],
          rules: [
            {
              required: true,
              message: '还没选择你的最爱哦',
            },
          ],
        },
        {
          name: '3-real-name',
          label: '姓名',
          type: 'text',
          placeholder: '请输入您的真实姓名',
          tips: '这里需要填写你的真实姓名哦',
          value: '张三',
          rules: [
            {
              required: true,
              message: '真实姓名不能为空',
            },
            {
              min: 2,
              max: 32,
              type: 'string',
              message: '真实姓名长度不能超过32位,也不能少于2位',
            },
          ],
        },
        {
          name: '4-age',
          label: '年龄',
          type: 'integer',
          placeholder: '请输入您的年龄',

          value: 19,
          rules: [
            {
              required: true,
              message: '年龄必填',
            },
            {
              max: 180,
              type: 'integer',
              message: '最大年纪为180',
            },
            {
              min: 5,
              type: 'integer',
              message: '最小年纪为5',
            },
          ],
        },
        {
          name: '5-gender',
          label: '性别',
          type: 'boolean',

          value: true,

          candidateValues: [
            {
              title: '男',
              id: true,
            },
            {
              title: '女',
              id: false,
            },
          ],
        },
      ],
    },
    {
      name: 'second-group',
      title: '第二组',
      fieldList: [
        {
          name: '6-height',
          label: '身高（cm）',
          type: 'double',
          placeholder: '输入身高',
          value: 182.0,
          rules: [
            {
              required: true,
              min: 20,
              max: 300,
              type: 'number',
              message: '最少20，最多3000',
            },
          ],
        },
        {
          name: '7-deposit',
          label: '存款',
          type: 'money',
          placeholder: '输入存款余额',
          value: 2000,
          rules: [
            {
              required: true,
              type: 'number',
              message: '怎么也有点存款吧',
            },
          ],
        },
        {
          name: '7-1-code',
          label: '验证码',
          type: 'vcode',
          placeholder: '请输入验证码',
          value: 873421,
          linkToUrl: 'sendVerifyCode/13880964614/',
          rules: [
            {
              required: true,
              message: '验证码不能为空',
            },
          ],
        },
        {
          name: '8-start-date',
          label: '开始日期',

          type: 'date',
          value: 1585278389758,
          placeholder: '应该填写开始日期',
          rules: [
            {
              required: true,
              message: '开始日期是必须的',
            },
          ],
        },
        {
          name: '9-datetime',
          label: '约会时间',
          type: 'datetime',
          value: 1585278389758,
          placeholder: '请选择约会时间',
          rules: [
            {
              required: true,
              message: '约会时间是必须的',
            },
          ],
        },
        {
          name: '11-photos',
          label: '生活照',

          type: 'image',
          placeholder: '请详细描述一下你所有的学习经历',
          maxLength: 8,
          value: 'https://nice-router.oss-cn-chengdu.aliyuncs.com/avatar-3.jpg',
          rules: [
            {
              required: true,
              message: '怎么着也得上传一张生活照吧',
            },
          ],
        },
        {
          name: '10-avatar',
          label: '头像',
          type: 'image',
          placeholder: '这里是你的头像',
          maxLength: 3,
        },
        {
          name: '12-job-title',
          label: '工种',

          type: 'single-select',
          placeholder: '请选择职位',
          value: 'role2',
          candidateValues: [
            { title: '铲墙工', id: 'role1' },
            { title: '木工', id: 'role2' },
            { title: '水电工', id: 'role3' },
          ],
        },
        {
          name: '13-description',
          label: '详细描述',

          type: 'long-text',
          placeholder: '请详细描述一下你所有的学习经历',
          value: '学习雷锋好榜样，忠于革命主与党，爱憎分明不忘本，立场见底斗志强',
          rules: [
            {
              required: true,
              max: 500,
              min: 10,
              type: 'string',
              message: '这玩意最多填500字,最少10个字',
            },
          ],
        },
        {
          name: '14-user-selector',
          label: '选工长',

          type: 'object-picker',
          placeholder: '快点选个工长',
          linkToUrl: '/find/user/12345/',
          searchAction: {
            linkToUrl: '/find/user/12345/',
          },
          maxSelectCount: 3,
        },
      ],
    },
  ],
};

export default mockForm1Data;
