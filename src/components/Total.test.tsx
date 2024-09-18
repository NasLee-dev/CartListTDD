import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import TotalCount from "./Total";

describe('Total 컴포넌트 내 totalAmount 테스트', () => {
  const items1 = [
    {
      id: 1,
      img: "../../public/images/iPhone.png",
      name: "iphone16",
      price: "3000000",
      description: "아이폰 16프로",
      quantity: 0,
    },
    {
      id: 2,
      img: "../../public/images/macbook.jpeg",
      name: "Macbook Pro",
      price: "2000000",
      description: "맥북 프로",
      quantity: 0,
    },
    {
      id: 3,
      img: "../../public/images/ipadpro.jpeg",
      name: "ipad pro",
      price: "1000000",
      description: "아이패드 프로",
      quantity: 0,
    },
    {
      id: 4,
      img: "../../public/images/s21.jpg",
      name: "Galaxy S21",
      price: "1500000",
      description: "갤럭시 S21",
      quantity: 0,
    },
  ];
  const items2 = [
    {
      id: 1,
      img: "../../public/images/iPhone.png",
      name: "iphone16",
      price: "3000000",
      description: "아이폰 16프로",
      quantity: 1,
    },
    {
      id: 2,
      img: "../../public/images/macbook.jpeg",
      name: "Macbook Pro",
      price: "2000000",
      description: "맥북 프로",
      quantity: 1,
    },
    {
      id: 3,
      img: "../../public/images/ipadpro.jpeg",
      name: "ipad pro",
      price: "1000000",
      description: "아이패드 프로",
      quantity: 1,
    },
    {
      id: 4,
      img: "../../public/images/s21.jpg",
      name: "Galaxy S21",
      price: "1500000",
      description: "갤럭시 S21",
      quantity: 1,
    },
  ]
  it('items가 비어있을 때 totalAmount는 0이어야 한다.', () => {
    render(<TotalCount items={items1} />);
    expect(screen.getByText('Total :')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  it('items가 비어있지 않을 때 totalAmount는 items의 price * quantity의 총합이어야 한다. + convertKW 처리된 값', () => {
    render(<TotalCount items={items2} />);
    expect(screen.getByText('Total :')).toBeInTheDocument();
    expect(screen.getByText('7,500,000')).toBeInTheDocument();
  });
})