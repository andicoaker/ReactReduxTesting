import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {

  it('handles action with unknown type', () => {
    // expecting whatever the reducuer returns to be an array
    // expect(commentReducer()).to.be.instanceof(Array);

    // checks to see if it is absolute identical object, asserting the array will be empty
    expect(commentReducer(undefined, {})).to.eql([]);

  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = {type: SAVE_COMMENT, payload: 'new comment' };

    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
