import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Colors, IconButton} from 'react-native-paper';
import styled from 'styled-components/native';

const FlipTracker = ({count}: {count: number}) => {
  const windowHeight = useWindowDimensions().height;
  return (
    <FlipTrackerContainer>
      <SecondTracker
        icon={count < 2 ? 'circle' : 'circle-outline'}
        color={Colors.white}
        size={16}
        top={windowHeight / 16}
      />
      <FirstTracker
        icon={count < 1 ? 'circle' : 'circle-outline'}
        color={Colors.white}
        size={16}
        top={windowHeight / 4}
      />
      <ThirdTracker
        icon={count < 3 ? 'circle' : 'circle-outline'}
        color={Colors.white}
        size={16}
        top={windowHeight / 4}
      />
    </FlipTrackerContainer>
  );
};

export default FlipTracker;

const FlipTrackerContainer = styled.View``;

const FirstTracker = styled(IconButton)<{top: number}>`
  top: ${({top}) => top + 'px'};
`;

const SecondTracker = styled(IconButton)<{top: number}>`
  top: ${({top}) => top + 'px'};
`;

const ThirdTracker = styled(IconButton)<{top: number}>`
  top: ${({top}) => top + 'px'};
`;
