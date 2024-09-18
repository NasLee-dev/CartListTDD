import styled from "@emotion/styled"
import Product from "./Products"
import { Item } from "../models/Item";
import Button from "./Button";

interface CartListProps {
  items: Item[];
  dispatch: React.Dispatch<{ type: string, id: number }>
}

export default function CartList({ items, dispatch }: CartListProps) {
  const handleClearCart = () => {
    dispatch({ type: "clear", id: items.map(item => item.id)[0] });
  }
  return (
    <Container>
      {
        items.map(item => 
          <Product 
            key={item.id}
            item={item}
            dispatch={dispatch}
          />
        )
      }
      <Button color="danger" size="large"
        onClick={handleClearCart}
        style={{
          color: 'red',
          border: '1px solid red'
        }}
      >C L E A R {" "} C A R T</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 1000px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightGray;
  border-radius: 10px;
  gap: 10px;
`