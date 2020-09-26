import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Colors, IconButton} from 'react-native-paper';
import styled from 'styled-components/native';

const FlipTracker = ({count}: {count: number}) => {
  const windowHeight = useWindowDimensions().height;
  const trackers = [
    {counter: 2, top: windowHeight / 16},
    {counter: 1, top: windowHeight / 4},
    {counter: 3, top: windowHeight / 4},
  ];

  return (
    <FlipTrackerContainer>
      {trackers.map(({counter, top}) => (
        <Tracker
          icon={count < counter ? 'circle' : 'circle-outline'}
          color={Colors.white}
          size={16}
          top={top}
        />
      ))}
    </FlipTrackerContainer>
  );
};

export default FlipTracker;

const FlipTrackerContainer = styled.View``;

const Tracker = styled(IconButton)<{top: number}>`
  top: ${({top}) => top + 'px'};
`;
