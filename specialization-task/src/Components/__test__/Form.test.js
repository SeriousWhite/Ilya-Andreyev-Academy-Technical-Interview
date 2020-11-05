import React from 'react';
import Form from '../Form';
import { mount } from 'enzyme';

const messages = {
  firstNameRequired: 'The First Name is required',
  lastNameRequired: 'The Last Name is required',
  dobRequired: 'The DOB is required',
  genderRequired: 'The Gender is required',
  firstNameLength: 'The First Name should not be longer than 30 symbols',
  lastNameLength: 'The Last Name should not be longer than 30 symbols',
}

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed. Tellus cras adipiscing enim eu turpis egestas pretium.';

describe('Form', () => {
  it.each([
    messages.firstNameRequired,
    messages.lastNameRequired,
    messages.dobRequired,
    messages.genderRequired,
  ])('submit form expect 4 required errors', async (message) => {
    const wrapper = await mount(<Form />);

    const button = wrapper.find('[type="button"]');
    button.simulate('click');

    const ul = wrapper.find('ul');
    expect(ul.text()).toContain(message);
  });

  it.each([
    messages.firstNameLength,
    messages.lastNameLength,
  ])('submit form not expect 2 length errors', async (message) => {
    const wrapper = await mount(<Form />);

    const button = wrapper.find('[type="button"]');
    button.simulate('click');

    const ul = wrapper.find('ul');
    expect(ul.text()).not.toContain(message);
  });

  it.each([
    messages.lastNameRequired,
    messages.dobRequired,
    messages.genderRequired,
  ])('submit form expect 3 required errors', async (message) => {
    const wrapper = await mount(<Form />);
    const firstNameInput = wrapper.find('input[name="firstName"]');
    firstNameInput.simulate('change', { target: { name: 'firstName', value: 'First name' }});

    const button = wrapper.find('[type="button"]');
    button.simulate('click');

    const ul = wrapper.find('ul');
    expect(ul.text()).toContain(message);
  });

  it.each([
    messages.firstNameRequired,
    messages.firstNameLength,
    messages.lastNameLength,
  ])('submit form not expect 1 required error and 2 length errors', async (message) => {
    const wrapper = await mount(<Form />);
    const firstNameInput = wrapper.find('input[name="firstName"]');
    firstNameInput.simulate('change', { target: { name: 'firstName', value: 'First name' }});

    const button = wrapper.find('[type="button"]');
    button.simulate('click');

    const ul = wrapper.find('ul');
    expect(ul.text()).not.toContain(message);
  });

  it('submit form expect gender required', async () => {
    const wrapper = await mount(<Form />);
    const firstNameInput = wrapper.find('input[name="firstName"]');
    firstNameInput.simulate('change', { target: { name: 'firstName', value: 'First name' }});
    const lastNameInput = wrapper.find('input[name="lastName"]');
    lastNameInput.simulate('change', { target: { name: 'lastName', value: 'Last name' }});
    const dobInput = wrapper.find('input[name="DOB"]');
    dobInput.simulate('change', { target: { name: 'DOB', value: '2020-11-12T15:12' }});

    const button = wrapper.find('[type="button"]');
    button.simulate('click');

    const ul = wrapper.find('ul');
    expect(ul.text()).toEqual(messages.genderRequired);
  });

  it.each([
    messages.firstNameLength,
    messages.lastNameLength,
  ])('submit form expect 2 length errors', async (message) => {
    const wrapper = await mount(<Form />);
    const firstNameInput = wrapper.find('input[name="firstName"]');
    firstNameInput.simulate('change', { target: { name: 'firstName', value: longText }});
    const lastNameInput = wrapper.find('input[name="lastName"]');
    lastNameInput.simulate('change', { target: { name: 'lastName', value: longText }});

    const button = wrapper.find('[type="button"]');
    button.simulate('click');

    const ul = wrapper.find('ul');
    expect(ul.text()).toContain(message);
  });
});
