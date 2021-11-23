import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { ShowCarById, UpdateCar } from "../services/CarFetch";
import { useEffect, useState } from "react";

const FormCar = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  gap: 8px;
`;

const InsertData = styled.input`
position: static;
width: 260px;
height: 40px;
left: 0px;
top: 28px;
background: #FFFFFF;
border: 1px solid #2F80ED;
box-sizing: border-box;
border-radius: 8px;
padding: 8px 16px;
font-family: "Roboto";
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
`;

export const EditCar = () => {

  const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
  
    const newCar = {
      brand: brand,
      model: model,
      year: parseInt(year),
      color: color,
      price: parseInt(price)
    }
    const id = JSON.parse(sessionStorage.getItem("id"));
    console.log(newCar, id);
    await UpdateCar(id, newCar);

    history.push("/");
  }

  useEffect(() => {
    const id = JSON.parse(sessionStorage.getItem("id"));
    ShowCarById(id).then(data => {
      setBrand(data.brand);
      setModel(data.model);
      setYear(data.year);
      setColor(data.color);
      setPrice(data.price);
    });
  },[]);

  return (
    <>
      <FormCar onSubmit={handleSubmit}>
      <h1>FORM TO EDIT CAR</h1>
        <InsertData
          id="outlined-basic"
          name="brand"       
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
        <InsertData
          id="outlined-basic"
          name="model"        
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <InsertData
          id="outlined-basic"
          name="year"        
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <InsertData
          id="outlined-basic"
          name="color"       
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <InsertData
          id="outlined-basic"
          name="price"          
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <Button type="submit" variant="contained" >Edit</Button>
      </FormCar>
    </>
  );
}