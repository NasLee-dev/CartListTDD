import { render, screen } from '@testing-library/react'
import App from './App';

test('App 컴포넌트 렌더링 테스트', () => {
  render(<App />);
  expect(screen.getByText('C L E A R C A R T')).toBeInTheDocument();
});