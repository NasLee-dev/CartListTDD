import styled from "@emotion/styled"
import { useReducer } from "react"
import Title from "./components/Title"
import CartList from "./components/CartList"
import { Item } from "./models/Item"
import { initialState } from "./test/mock"


export default function UI() {
  const [items, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <Title label="YOUR CART" />
      <CartList 
        items={items} 
        dispatch={dispatch}
      />
    </Container>
  )
}

function reducer(state: Item[], action: { type: string, id: number }) {
  switch (action.type) {
    case 'increment':
      return state.map(item => 
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case 'decrement':
      return state.map(item => 
        item.id === action.id && item.quantity > 0 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      );
    default:
      return state;
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`