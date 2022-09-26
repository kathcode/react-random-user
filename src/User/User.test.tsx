import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import User from './User';

const apiResponse = {
  results: [
    {
      email: 'email',
      phone: '123',
      name: { last: 'Meneses', first: 'Catalina' },
      picture: { large: 'img' },
    },
  ],
};

test('should render the firstName when the user is loaded', async () => {
  const mockRes = { json: jest.fn().mockResolvedValueOnce(apiResponse) };
  const mockedFetch = jest.fn().mockResolvedValueOnce(mockRes as any);
  (global as any).fetch = mockedFetch;

  render(<User />);

  await waitFor(() => {
    const nameElement = screen.getByTestId('firstName');
    expect(nameElement.textContent).toBe('Catalina');
  });
});
