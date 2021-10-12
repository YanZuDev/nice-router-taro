import { useEffect, useState } from 'react';
import { View } from '@tarojs/components';

import './home.scss';
import NavigationService from '@/nice-router/navigation-service';

function HomePage(props) {
  const [info, setInfo] = useState({});
  useEffect(() => {
    NavigationService.ajax('system/user/list', {}, { onSuccess: setInfo });
  }, []);

  return <View className='home-page'>{JSON.stringify(info)}</View>;
}

export default HomePage;
