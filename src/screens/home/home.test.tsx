import {render} from '@testing-library/react-native';
import React from 'react';
import HomeScreen from './home';

describe('Home', () => {
  it(`Scenario: See purple, green, black timer
    Given any
    When I load the App
    Then I should see purple timer
    And I should see green timer
    And I should see black timer`, () => {
    const {getByTestId} = render(<HomeScreen />);

    expect(getByTestId('Purple.Hourglass.Bottom')).toBeDefined();

    expect(getByTestId('Green.Hourglass.Bottom')).toBeDefined();

    expect(getByTestId('Black.Hourglass.Bottom')).toBeDefined();
  });
});
