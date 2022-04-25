import { Pag } from '../index';
import { render, screen } from '@testing-library/react';
import { data } from './data';

describe('Pagination', () => {
  it('should render a Pagination', () => {
    render(<Pag {...data} />);
    const element = screen.getByTestId('test-id-pagination');
    expect(element).toBeInTheDocument();
  });
});
