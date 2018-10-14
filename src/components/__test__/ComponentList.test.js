import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentList from "../CommentList";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['comment1', 'comment2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('should render equal number of li', () => {
  expect( wrapped.find('li').length).toEqual(2);
});

it('should display right comment text', () => {
  expect( wrapped.render().text()).toContain('comment1');
  expect( wrapped.render().text()).toContain('comment2');
})