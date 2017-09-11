import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe ('Text CommentBox', () => {

  // declare variable outside of beforeEach then reassign varibale 'component' inside beforeEach
  // variable starts out as undefined
  let component;

  beforeEach( () => {
    component = renderComponent(CommentBox);

  });

  it ('has the correct class comment-box', () =>{
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    // chai doesn't require you to use a 2nd set of () around the 2nd part of the matcher
    // chai uses jQuery methods like .find below
    expect (component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

});
