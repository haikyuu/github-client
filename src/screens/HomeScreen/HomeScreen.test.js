import React from 'react'
import renderer from 'react-test-renderer'
import { HomeScreen } from '@screens'

it('renders the HomeScreen from snapshot', () => {
	const navigation = {
		navigate: ()=>null
	}
  expect(renderer.create(
    <HomeScreen navigation={navigation}/>
  )).toMatchSnapshot()
})
