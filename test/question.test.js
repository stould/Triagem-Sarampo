import React from 'react';

import { configure, mount } from 'enzyme';
import { expect } from 'chai';

import Question from '../app/components/Question';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Testing Question component', function() {
    it('tests Question radio button default checked', function() {
        const wrapper = mount(<Question />);
        const radioButtons = wrapper.find('input');
        expect(radioButtons).to.have.lengthOf(2);

        const radio1 = radioButtons.get(0);
        const radio2 = radioButtons.get(1);
        
        expect(radio1.props).to.have.own.property('defaultChecked');
        expect(radio2.props).not.to.have.own.property('defaultChecked');
    });
});