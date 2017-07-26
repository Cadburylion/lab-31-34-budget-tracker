import React from 'react'
import {mount} from 'enzyme'
import CategoryForm from './index.js'

describe('testing CategoryForm', () => {
  test('onComplete should be invoked with the state onSubmit', () => {
    // create a mock function that keeps track of all the calls
    let mockHandleOnComplete = jest.fn()

    // mount component
    let wrapper = mount(
      <CategoryForm onComplete={mockHandleOnComplete} buttonTest='submit' />
    )

    // create a mock state
    let mockState ={name: 'animals', budget: 100}
    wrapper.setState(mockState)

    // submite the form
    wrapper.find('form').simulate('submit')

    // test that the state was passed to onComplete
    let {calls} = mockHandleOnComplete.mock
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toEqual(mockState)
  })

  // test('testing onChange should update the name on the state', () => {
  //   let wrapper = mount(
  //     <CategoryForm onComplete={() => {}} buttonText='submit' />
  //   )
  //
  //   wrapper.find('input').simulate('change', {
  //     target: { name: 'title', value: 'cool', type: 'text'},
  //   })
  //
  //   expect(wrapper.state('title')).toEqual('cool')
  // })
})
