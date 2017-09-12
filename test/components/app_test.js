import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App', () => {

  let component;

  beforeEach( () => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist
  });

  // use 'it' to test a single attribute of a target. returns in terminal like a report.
  // it ('shows the correct text', () => {
  //
  //   // create an instance of App
  //   const component = renderComponent(App);
  //
  //   // use 'expect' to make an 'assertion' about a target
  //   // using Mocha testing framework here
  //   // expect is a function, in 1st part of assertion we pass expect the thing we want to make an assertion about - typically in react we are testing components
  //   // 2nd part of assertion is a 'matcher' - this tells Mocha what we want to test and how it should behave. we pass this part of the assertion the value that we expect.
  //
  //   expect(component).to.contain('React simple starter');
  //
  // });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
