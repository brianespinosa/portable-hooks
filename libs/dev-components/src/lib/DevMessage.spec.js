import { render } from '@testing-library/react';
import DevMessage from './DevMessage';
describe('DevMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DevMessage />);
    expect(baseElement).toBeTruthy();
  });
});
