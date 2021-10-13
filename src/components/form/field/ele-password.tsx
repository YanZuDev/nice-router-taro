import { View } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import { AtInputProps } from 'taro-ui/types/input';
import { useVisible } from '@/service/use-service';
import ActionIcon from '@/components/action-icon/action-icon';


export default function ElePassword(props: AtInputProps) {
  const { visible, toggle } = useVisible();
  return (
    <View>
      <AtInput
        placeholder='请输入密码'
        type={visible ? 'text' : 'password'}
        border={false}
        maxlength={12}
        {...props} >
        <View onClick={toggle}>
          {visible ? <ActionIcon icon='eye' /> : <ActionIcon icon={'eye-off'} />}
        </View>
      </AtInput>
    </View>
  );
}
