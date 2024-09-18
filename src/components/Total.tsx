import { useMemo } from "react";
import { Item } from "../models/Item";
import { convertKW } from "../utils/kw";
import styled from "@emotion/styled";

interface TotalCountProps {
  items: Item[];
}

export default function TotalCount({ items }: TotalCountProps) {
  const totalAmount = useMemo(() => {
    return items.reduce((acc, cur) => {
      return acc + Number(cur.price) * cur.quantity;
    }, 0);
  }, [items]);

  return (
    <Container>
      <h1>Total :</h1>
      <h1>{items.length > 0 ? convertKW(totalAmount) : 0}</h1>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
