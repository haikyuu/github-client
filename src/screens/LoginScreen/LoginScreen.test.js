import React from 'react'
import renderer from 'react-test-renderer'
import { LoginScreen } from '@screens'

it('renders the LoginScreen from snapshot', () => {
  expect(renderer.create(
    <LoginScreen />
  )).toMatchSnapshot()
})

it('renders the message given', () => {

	const component = renderer.create(
    	<LoginScreen />
	)
	const response = 'token'
	component.getInstance().displayResponse(response)
	expect(component).toMatchSnapshot()
})
