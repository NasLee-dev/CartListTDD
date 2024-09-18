import { it, vi } from "vitest"
import { Item } from "../models/Item";
import { fireEvent, render, screen } from "@testing-library/react";
import Product from "./Products";

describe('Product 컴포넌트 descrease, increase 테스트', () => {
  const mockDispatch = vi.fn();
  const item: Item = {
    id: 1,
    name: 'iphone',
    img: "../../public/images/iPhone.png",
    price: "3000000",
    description: "아이폰 16프로",
    quantity: 10,
  };
  beforeEach(() => {
    mockDispatch.mockClear();
  });
  it('decrease 버튼 클릭시 dispatch가 호출되어야 한다.', () => {
    render(<Product item={item} dispatch={mockDispatch} />);
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'decrement', id: item.id });
  });
  it('increase 버튼 클릭시 dispatch가 호출되어야 한다.', () => {
    render(<Product item={item} dispatch={mockDispatch} />);
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'increment', id: item.id });
  });
});