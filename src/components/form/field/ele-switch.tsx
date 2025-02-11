import { Switch, Text, View } from '@tarojs/components';
import classNames from 'classnames';
import { CandidateValue } from '@/nice-router/nice-router-types';
import { toBoolean } from '@/utils/object-utils';

// candidateValues 就是 options
// candidateValues = [{
//   id: '11',
//   title: '男',
//   value: 'true',
// }, {
//   id: '22',
//   title: '女',
//   value: 'false',
// }]

type EleSwitchProps = {
  value?: boolean;
  candidateValues: CandidateValue[];
  disabled?: boolean;
};

function EleSwitch(props: EleSwitchProps) {
  const { value = false, candidateValues = [], disabled, ...others } = props;
  const checked = toBoolean(value);
  const selected = candidateValues.find((it) => toBoolean(it.id) === checked);
  const title = selected ? selected.title : '';
  const switchClass = classNames('ele-switch', {
    disabled: disabled,
  });
  return (
    <View className={switchClass}>
      <Switch disabled={disabled} {...others} checked={checked} />
      <Text className='ele-switch__title'>{title}</Text>
    </View>
  );
}

export default EleSwitch;
