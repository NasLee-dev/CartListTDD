import styled from "@emotion/styled"
import { useReducer } from "react"
import Title from "./components/Title"
import CartList from "./components/CartList"

interface State {
  count: number
  action: {
    type: string
  }
}

export default function UI() {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <Container>
      <Title label="YOUR CART" />
      <CartList />
    </Container>
  )
}

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
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