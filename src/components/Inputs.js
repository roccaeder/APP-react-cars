import { Button, TextField } from "@mui/material";
import styled from "@emotion/styled";

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

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log(e.target.elements.brand.value);
    console.log(e.target.elements.model.value);
    console.log(e.target.elements.year.value);
    console.log(e.target.elements.color.value);
    console.log(e.target.elements.price.value);
  }
  return (
    <>
      <h1>Form for create a Car</h1>
      <FormCar onSubmit={handleSubmit}>
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