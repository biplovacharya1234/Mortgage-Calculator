import { InputLabel, Typography,FormControl,Select,MenuItem } from '@mui/material'
import * as React from 'react';

function TenureSelect({data,setData}) {


  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value
    });
  };
  return (
    <>
    <Typography mb={1}>Tenure</Typography>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Years</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={data.loanTerm}
    label="Year"
    onChange={handleChange}>

    <MenuItem value={1}>1 Year</MenuItem>
    <MenuItem value={2}>2 Years</MenuItem>
    <MenuItem value={3}>3 Years</MenuItem>
    <MenuItem value={4}>4 Years</MenuItem>
    <MenuItem value={5}>5 Years</MenuItem>
    <MenuItem value={6}>6 Years</MenuItem>
    <MenuItem value={7}>7 Years</MenuItem>
    <MenuItem value={8}>8 Years</MenuItem>
    <MenuItem value={9}>9 Years</MenuItem>
    <MenuItem value={10}>10 Years</MenuItem>

  </Select>
</FormControl>
    </>
  )
}

export default TenureSelect
