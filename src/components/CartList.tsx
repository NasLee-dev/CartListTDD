import styled from "@emotion/styled"
import { colors } from "../styles/globalStyles"
import Product from "./Products"

export default function CartList() {
  return (
    <Container>
      <Product />
    </Container>
  )
}

const Container = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightGray;
  border-radius: 10px;
`