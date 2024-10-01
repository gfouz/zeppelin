import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dropdown from './MotionDropdown.tsx';

describe('renders MotionDropdown', () => {
  it('MotionDropdown closed state', () => {
    render(<Dropdown />);
    const menu = screen.getByRole('menu');
    const button = screen.getByRole('hover-button');
    // Verifica que el menú está en el estado cerrado
    fireEvent.mouseLeave(button);
    expect(menu).toHaveClass('closed');
  });
  it('MotionDropdown open state', () => {
    render(<Dropdown />);
    const button = screen.getByRole('hover-button');
    fireEvent.mouseEnter(button);
    const menu = screen.getByRole('menu');
    // check dropdown opened state
    fireEvent.mouseEnter(button);
    // Verifica que el menú está visible (display: block)
    expect(menu).toHaveClass('open');
    expect(menu).toBeVisible();
  });
});
