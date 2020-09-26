import {render} from '@testing-library/react-native';
import React from 'react';
import HomeScreen from './home';

describe('Home', () => {
  it(`Scenario: See purple timer on Start
    Given any
    When I load the App
    Then I should see purple hourglass at top
    And I should see purple countdown 03:00`, () => {
    const {getByTestId} = render(<HomeScreen />);

    expect(getByTestId('Purple.Timer.Hourglass')).toBeDefined();
    expect(getByTestId('Purple.Row').props.top).toEqual(0);
    expect(getByTestId('Purple.Timer.Countdown').children).toEqual(['03:00']);
  });

  it(`Scenario: See green timer on Start
    Given any
    When I load the App
    Then I should see green hourglass at top
    And I should see green countdown 02:00`, () => {
    const {getByTestId} = render(<HomeScreen />);

    expect(getByTestId('Green.Timer.Hourglass')).toBeDefined();
    expect(getByTestId('Green.Row').props.top).toEqual(0);
    expect(getByTestId('Green.Timer.Countdown').children).toEqual(['02:00']);
  });

  it(`Scenario: See black timer on Start
    Given any
    When I load the App
    Then I should see black hourglass at top
    And I should see black countdown 00:40`, () => {
    const {getByTestId} = render(<HomeScreen />);

    expect(getByTestId('Black.Timer.Hourglass')).toBeDefined();
    expect(getByTestId('Black.Row').props.top).toEqual(0);
    expect(getByTestId('Black.Timer.Countdown').children).toEqual(['00:45']);
  });
});
