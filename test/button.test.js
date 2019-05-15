import React from 'react';

import { configure, mount } from 'enzyme';
import { expect } from 'chai';

import Button from '../app/components/Button';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Testing button component', function() {
    it('tests button text content', function() {
        const wrapper = mount(<Button />);
        expect(wrapper.find('button').text()).equal('Click-me');
    });
});