import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { ShowAllCars } from "../services/CarFetch";

export const Main = () => {

  const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    margin-top: 32px;
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
    --ms-overflow-style: none;
    scrollbar-width: none;
  `;

  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function GetData() {
      const data = await ShowAllCars();
      setCars(data);
    }

    GetData();
  },[]);

  return (
      <ContainerGrid>
        { cars.map((car) =>{
          return (
            <Card
              key={car.id}
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              color={car.color}
              price={car.price}
            ></Card>
          );
        })}
      </ContainerGrid>
  );
}
