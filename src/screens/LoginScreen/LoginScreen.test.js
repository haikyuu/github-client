import React from 'react'
import renderer from 'react-test-renderer'
import { LoginScreen } from '@screens'

it('renders the LoginScreen from snapshot', () => {
  expect(renderer.create(
    <LoginScreen />
  )).toMatchSnapshot()
})
