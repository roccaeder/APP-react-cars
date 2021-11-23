import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { CreateCar } from "../services/CarFetch";

const FormCar = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  gap: 8px;
`;

export const Inputs = () => {

  async function handleSubmit(e) {
    e.preventDefault();
  
    const newCar = {
      brand: e.target.elements.brand.value,
      model: e.target.elements.model.value,
      year: parseInt(e.target.elements.year.value),
      color: e.target.elements.color.value,
      price: parseInt(e.target.elements.price.value)
    }
    await CreateCar(newCar);
    window.location.reload(false);

  }
  return (
    <>
      <FormCar onSubmit={handleSubmit}>
      <h1>FORM TO CREATE CAR</h1>
        <TextField
          id="outlined-basic"
          name="brand"
          label="Brand"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="model"
          label="Model"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="year"
          label="Year"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="color"
          label="Color"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="price"
          label="Price"
          variant="outlined"
        />
        <Button type="submit" variant="contained">Create</Button>
      </FormCar>
    </>
  );
}