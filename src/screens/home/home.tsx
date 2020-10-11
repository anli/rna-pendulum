import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {FlipTracker, Timer} from './components';
import {useTimer} from './hooks';

const HomeScreen = () => {
  const {timer: timerPurple, countdown: countdownPurple} = useTimer(180);
  const {timer: timerGreen, countdown: countdownGreen} = useTimer(120);
  const {timer: timerBlack, countdown: countdownBlack} = useTimer(45);

  const windowHeight = useWindowDimensions().height;
  const TOP_MARGIN_PER_TWO = windowHeight / 4;

  const reset = () => {
    timerPurple.reset();
    timerGreen.reset();
    timerBlack.reset();
  };

  return (
    <Screen>
      <Top>
        <PurpleSection>
          <FlipTracker count={timerPurple.flipCount} />
          <PurpleTimerRow>
            <Line />
            <Row
              testID="Purple.Row"
              top={timerPurple.isTop ? 0 : TOP_MARGIN_PER_TWO}
              totalCount={2}>
              <Timer
                testID="Purple.Timer"
                status={timerPurple.status}
                onPress={timerPurple.flip}
                countdown={countdownPurple}
                disabled={timerPurple.flipCount >= 3}
              />
            </Row>
          </PurpleTimerRow>
        </PurpleSection>
        <GreenSection>
          <Container>
            <Line />

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
          </Container>
        </GreenSection>
      </Top>
      <Bottom>
        <Buttons>
          <ResetButton mode="contained" onPress={reset}>
            Reset
          </ResetButton>
        </Buttons>
        <BlackSection>
          <Container>
            <Line />
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
          </Container>
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
  flex-direction: row;
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

const PurpleTimerRow = styled.View`
  flex: 1;
  margin-left: -24px;
`;

const Buttons = styled.View`
  flex: 1;
  background-color: grey;
  justify-content: flex-end;
`;

const ResetButton = styled(Button)`
  margin: 8px 8px 8px 8px;
`;

const Line = styled.View`
  border-bottom-color: white;
  border-bottom-width: 1px;
  top: 50%;
  width: 100px;
  align-self: center;
  margin-left: 24px;
`;

const Container = styled.View`
  flex: 1;
`;
