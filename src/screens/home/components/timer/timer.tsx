import React from 'react';
import {Colors, IconButton} from 'react-native-paper';
import styled from 'styled-components/native';
import getMinSec from './get-min-sec';

const Timer = ({status, onPress, countdown, testID, disabled = false}: any) => {
  const isEnabled = !disabled && status === 'FULL';
  return (
    <TimerContainer onTouchEnd={() => isEnabled && onPress()}>
      <Hourglass
        testID={`${testID}.Hourglass`}
        icon={getIconByStatus(status)}
        color={Colors.white}
        size={40}
        disabled={!isEnabled}
        onPress={() => {}}
      />
      <Countdown testID={`${testID}.Countdown`}>
        {getMinSec(countdown)}
      </Countdown>
    </TimerContainer>
  );
};

export default Timer;

const Countdown = styled.Text`
  color: ${Colors.white};
  font-size: 36px;
`;

const TimerContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Hourglass = styled(IconButton)``;

const getIconByStatus = (status: 'FULL' | 'RUNNING'): string => {
  if (status === 'FULL') {
    return 'timer-sand-full';
  }

  return 'timer-sand';
};
