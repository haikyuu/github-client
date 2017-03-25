import React from 'react'
import renderer from 'react-test-renderer'
import { RepoScreen } from '@screens'

it('renders the RepoScreen from snapshot', () => {
  expect(renderer.create(
    <RepoScreen />
  )).toMatchSnapshot()
})

it('renders the message given', () => {

	const component = renderer.create(
    	<RepoScreen />
	)
	const response = 'repo not found'
	component.getInstance().displayResponse(response)
	expect(component).toMatchSnapshot()
})
