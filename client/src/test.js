import React from 'react';
import { render } from 'react-testing-library';
import {App} from './App';

describe('test', () => {
  test('it renders', () => {

    const props = {
      players: props.players
    }

    render(<App {...props} />)
  })
})