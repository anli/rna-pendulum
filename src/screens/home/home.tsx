import React from 'react';
import {useWindowDimensions} from 'react-native';
import styled from 'styled-components/native';
import {Timer} from './components';
import {useTimer} from './hooks';

const HomeScreen = () => {
  const {timer: timerPurple, countdown: countdownPurple} = useTimer(180);
  const {timer: timerGreen, countdown: countdownGreen} = useTimer(120);
  const {timer: timerBlack, countdown: countdownBlack} = useTimer(45);

  const windowHeight = useWindowDimensions().height;
  const TOP_MARGIN_PER_TWO = windowHeight / 4;

  return (
    <Screen>
      <Top>
        <PurpleSection>
          <Row
            testID="Purple.Row"
            top={timerPurple.isTop ? 0 : TOP_MARGIN_PER_TWO}
            totalCount={2}>
            <Timer
              testID="Purple.Timer"
              status={timerPurple.status}
              onPress={timerPurple.flip}
              countdown={countdownPurple}
            />
          </Row>
        </PurpleSection>
        <GreenSection>
          <Row
            testID="Green.Row"
            top={timerGreen.isTop ? 0 : TOP_MARGIN_PER_TWO}
            totalCount={2}>
            <Timer
              testID="Green.Timer"
              status={timerGreen.status}
              onPress={timerGreen.flip}
              countdown={countdownGreen}
            />
          </Row>
        </GreenSection>
      </Top>
      <Bottom>
        <BlackSection>
          <Row
            testID="Black.Row"
            top={timerBlack.isTop ? 0 : TOP_MARGIN_PER_TWO}
            totalCount={2}>
            <Timer
              testID="Black.Timer"
              status={timerBlack.status}
              onPress={timerBlack.flip}
              countdown={countdownBlack}
            />
          </Row>
        </BlackSection>
      </Bottom>
    </Screen>
  );
};

export default HomeScreen;

const Screen = styled.View`
  flex: 1;
`;

const PurpleSection = styled.View`
  flex: 1;
  background-color: purple;
  align-items: flex-end;
  padding-right: 16px;
`;

const GreenSection = styled.View`
  flex: 1;
  background-color: green;
  align-items: flex-end;
  padding-right: 16px;
`;

const BlackSection = styled.View`
  flex: 1;
  background-color: grey;
  align-items: flex-end;
  padding-right: 16px;
`;

const Top = styled.View`
  flex: 0.5;
  flex-direction: row;
`;

const Bottom = styled.View`
  flex: 0.5;
  flex-direction: row;
`;

const Row = styled.View<{top: number; totalCount: number}>`
  flex: ${({totalCount}) => 1 / totalCount};
  top: ${({top}) => top + 'px'};
`;
