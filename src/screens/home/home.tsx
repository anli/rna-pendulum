import React from 'react';
import {Colors, IconButton} from 'react-native-paper';
import styled from 'styled-components/native';
import {Status, useTimer} from './hooks';
import {getMinSec} from './utils';

const HomeScreen = () => {
  const {
    topTimer: topTimerPurple,
    bottomTimer: bottomTimerPurple,
    countdown: countdownPurple,
  } = useTimer(180);

  const {
    topTimer: topTimerGreen,
    bottomTimer: bottomTimerGreen,
    countdown: countdownGreen,
  } = useTimer(120);

  const {
    topTimer: topTimerBlack,
    bottomTimer: bottomTimerBlack,
    countdown: countdownBlack,
  } = useTimer(45);

  return (
    <Screen>
      <Top>
        <PurpleSection>
          <Row>
            {topTimerPurple.status !== 'FULL' && (
              <>
                <Hourglass
                  testID="Purple.Hourglass.Top"
                  icon={getIconByStatus(topTimerPurple.status)}
                  color={Colors.white}
                  size={48}
                  disabled={topTimerPurple.status !== 'EMPTY'}
                  onPress={topTimerPurple.start}
                />
                <Countdown>{getMinSec(countdownBlack)}</Countdown>
              </>
            )}
          </Row>
          <Row>
            {bottomTimerPurple.status !== 'FULL' && (
              <>
                <Hourglass
                  testID="Purple.Hourglass.Bottom"
                  icon={getIconByStatus(bottomTimerPurple.status)}
                  color={Colors.white}
                  size={48}
                  disabled={bottomTimerPurple.status !== 'EMPTY'}
                  onPress={bottomTimerPurple.start}
                />
                <Countdown>{getMinSec(countdownPurple)}</Countdown>
              </>
            )}
          </Row>
        </PurpleSection>

        <GreenSection>
          <Row>
            {topTimerGreen.status !== 'FULL' && (
              <>
                <Hourglass
                  testID="Green.Hourglass.Top"
                  icon={getIconByStatus(topTimerGreen.status)}
                  color={Colors.white}
                  size={48}
                  disabled={topTimerGreen.status !== 'EMPTY'}
                  onPress={topTimerGreen.start}
                />
                <Countdown>{getMinSec(countdownBlack)}</Countdown>
              </>
            )}
          </Row>
          <Row>
            {bottomTimerGreen.status !== 'FULL' && (
              <>
                <Hourglass
                  testID="Green.Hourglass.Bottom"
                  icon={getIconByStatus(bottomTimerGreen.status)}
                  color={Colors.white}
                  size={48}
                  disabled={bottomTimerGreen.status !== 'EMPTY'}
                  onPress={bottomTimerGreen.start}
                />
                <Countdown>{getMinSec(countdownGreen)}</Countdown>
              </>
            )}
          </Row>
        </GreenSection>
      </Top>
      <BlackSection>
        <Row>
          {topTimerBlack.status !== 'FULL' && (
            <>
              <Hourglass
                testID="Black.Hourglass.Top"
                icon={getIconByStatus(topTimerBlack.status)}
                color={Colors.white}
                size={48}
                disabled={topTimerBlack.status !== 'EMPTY'}
                onPress={topTimerBlack.start}
              />
              <Countdown>{getMinSec(countdownBlack)}</Countdown>
            </>
          )}
        </Row>
        <Row>
          {bottomTimerBlack.status !== 'FULL' && (
            <>
              <Hourglass
                testID="Black.Hourglass.Bottom"
                icon={getIconByStatus(bottomTimerBlack.status)}
                color={Colors.white}
                size={48}
                disabled={bottomTimerBlack.status !== 'EMPTY'}
                onPress={bottomTimerBlack.start}
              />
              <Countdown>{getMinSec(countdownBlack)}</Countdown>
            </>
          )}
        </Row>
      </BlackSection>
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
`;

const GreenSection = styled.View`
  flex: 1;
  background-color: green;
  align-items: flex-end;
`;

const BlackSection = styled.View`
  flex: 0.5;
  background-color: grey;
  align-items: flex-end;
`;

const Top = styled.View`
  flex: 0.5;
  flex-direction: row;
`;

const Countdown = styled.Text`
  margin-left: 24px;
  margin-right: 24px;
  color: ${Colors.white};
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Hourglass = styled(IconButton)``;

const getIconByStatus = (status: Status): string => {
  if (status === 'FULL') {
    return 'timer-sand-full';
  }

  if (status === 'EMPTY') {
    return 'timer-sand-empty';
  }

  return 'timer-sand';
};
