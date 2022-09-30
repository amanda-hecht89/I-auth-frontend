import { render, screen } from '@testing-library/react';
import { InputControl, SelectControl, 
  TextAreaControl } from './FormControl.jsx';

test('input control should work', async () => {
  render(
    <InputControl
      label="color"
      name="color"
      required
      placeholder="your favorite color"
    />
  );

  const inputControl = screen.getByLabelText('color');
  expect(inputControl.name).toEqual('color');
  expect(inputControl.placeholder).toEqual('your favorite color');
  expect(inputControl.required).toEqual(true);
});

test('select control should render', async () => {
  render(
    <SelectControl label="shade" name="shade" required>
      <option>Light</option>
      <option>Dark</option>
      <option>Pastel</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('shade');
  expect(selectControl.name).toEqual('shade');
  expect(selectControl.required).toEqual(true);
  expect(selectControl.options.length).toEqual(3);
});

test('text area control should render', async () => {
  render(<TextAreaControl
    required
    label="color bio"
    name="bio"
    placeholder="why do you love the color(s) (optional)" />
  );
  
  const textControl = screen.getByLabelText('color bio');
  expect(textControl.name).toEqual('bio');
  expect(textControl.placeholder)
    .toEqual('why do you love the color(s) (optional)');
  expect(textControl.required).toEqual(true);
});
