import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

//Grouping of test cases with describe
// describe('Contact Page', () => {
//     // below mentioned multiple test cases can be added
// });
// describe('header loaded correctly',()=>{})

test('Should load the contact page', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Contact Us');
});

//test and it are the same thing for writing test cases
it('Should load the contact form', () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText('Name');
  const emailInput = screen.getByPlaceholderText('Email');
  const messageInput = screen.getByPlaceholderText('Type your message');
  const submitButton = screen.getByRole('button', { name: 'Submit' });
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
