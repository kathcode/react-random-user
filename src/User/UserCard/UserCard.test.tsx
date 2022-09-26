import { screen, render } from '@testing-library/react';
import UserCard from './UserCard';

test('should render a loading text when there is no user', () => {
  const user = { image: '', firstName: '', lastName: '', phone: '', email: '' };
  render(<UserCard getUser={() => {}} isLoading={true} user={user} />);
  const loadingElement = screen.getByTestId('loading');

  expect(loadingElement.textContent).toBeDefined();
});

test('should render user information if is not loading', () => {
  const user = {
    image: 'img',
    firstName: 'Catalina',
    lastName: 'Meneses',
    phone: '123',
    email: 'email@email',
  };

  render(<UserCard getUser={() => {}} isLoading={false} user={user} />);

  const firstNameElement = screen.getByText('Catalina');
  const lastNameElement = screen.getByText('Meneses');
  const phoneElement = screen.getByText('123');
  const emailElement = screen.getByText('email@email');

  expect(firstNameElement.textContent).toBe('Catalina');
  expect(lastNameElement.textContent).toBe('Meneses');
  expect(phoneElement.textContent).toBe('123');
  expect(emailElement.textContent).toBe('email@email');
});
