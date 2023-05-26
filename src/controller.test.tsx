import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Controller from './controller';
import { shallow } from 'enzyme';

const props = {
  buttonSize: 20,
  dragX: 2,
  height: 20,
  isControlByKeyBoard: false,
  isThin: false,
  onBlur: () => {},
  onFocus: () => {},
  onInteractEnd: () => {},
  onMouseDown: () => {},
  showBubble: false,
  value: 20,
  isTouchDevice: false,
  max: 30,
  min: 0,
  buttonHeight: 10,
  shouldDisplayValue: true,
  shouldAnimateNumber: true,
};

describe('Controller', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Controller {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render correct when isThin set to true', () => {
    const tree = renderer.create(<Controller {...{ ...props, isThin: true }} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render correct when shouldAnimateNumber set to false', () => {
    const tree = renderer.create(<Controller {...{ ...props, shouldAnimateNumber: false }} />);
    expect(tree).toMatchSnapshot();
  });

  it('should stop propagation any click event', () => {
    const tree = shallow(<Controller {...props} />);
    const stopPropagation = jest.fn();

    tree
      .find('div')
      .at(0)
      .simulate('click', { stopPropagation });
    expect(stopPropagation).toBeCalled();
  });
});
