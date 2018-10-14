import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';

let wrapped;

beforeEach(()=>{
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('.textarea', () => {
  beforeEach(() => {
    let dummyText = 'new text';
    wrapped.find('textarea').simulate('change', { target: { value: dummyText}});
    wrapped.update();
  });

  it('has a text area user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new text');
  });

  it('clear the text area on form submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  })
})

