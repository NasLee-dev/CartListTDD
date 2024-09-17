import styled from "@emotion/styled"
import Product from "./Products"
import { Item } from "../models/Item";

interface CartListProps {
  items: Item[];
  dispatch: React.Dispatch<{ type: string, id: number }>
}


export default function CartList({ items, dispatch }: CartListProps) {
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