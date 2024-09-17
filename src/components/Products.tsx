import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Item } from '../models/Item';

interface ProductProps {
  item: Item;
  dispatch: React.Dispatch<{ type: string, id: number }>;
}

export default function Product({ item, dispatch }: ProductProps) {
  return (
    <Container>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        height: '100%'
      }}>
        <div>
          <img 
            src={item.img}
            alt="iphone16"
            width="100px"
            height="100px"
          />
        </div>
        <DescriptionDiv css={centerOrder}>
          <p>
            제품명 : {item.name}
          </p>
          <p>
            가격 : {item.price}
          </p>
        </DescriptionDiv>
      </div>
        <QuantityControl>
          <button
            onClick={() => {
              dispatch({ type: 'decrement', id: item.id });
            }}
          >-</button>
          <input 
            type="text"
            value={item.quantity}
          />
          <button
            onClick={() => {
              dispatch({ type: 'increment', id: item.id });
            }}
          >+</button>
        </QuantityControl>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: gray;
`;

const centerOrder = css`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 5px;
`;

const DescriptionDiv = styled.div`
  flex-grow: 1; /* Take remaining space */
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    width: 30px;
    height: 30px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }

  input {
    width: 40px;
    height: 25px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
