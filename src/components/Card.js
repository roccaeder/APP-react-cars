import styled from "@emotion/styled"
import { Button } from "@mui/material";
import { DeleteCar } from "../services/CarFetch";
import { ContentL, ContentS, ContentXL } from "./Types";

export const Card = (props) => {
  
  const ContainerCard = styled.div`
    width: 150px;
    height: 220px;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `;

  async function handleDeletElement(){
    console.log("delete", props.id);
    await DeleteCar(props.id);
    window.location.reload(false);
  }

  return (
    <ContainerCard>
      <ContentL>{props.brand}</ContentL>
      <ContentS>{props.model}</ContentS>
      <ContentS>{props.color}</ContentS>
      <ContentS>{props.year}</ContentS>
      <ContentXL>{`$${props.price}.00`}</ContentXL>
      <Button id={props.id} onClick={handleDeletElement} variant="contained">
        Delete
      </Button>
    </ContainerCard>
  );
}