import React from 'react';
import SliderComponent from './common/SliderComponent';
import { Stack } from '@mui/material';

function SliderSelect(data, setData) {
  return (
    <Stack gap={0}>
      <SliderComponent
        defaultValue={data.homeValue}
        value={data.homeValue}
        min={10000}
        max={100000}
        steps={1000}
        titleText={"Home Value"}
        unit='$'
        onChange={(e, value) => setData({ homeValue: value })}
        amount={data.homeValue}/>
      <SliderComponent
        defaultValue={data.downPayment}
        min={5000}
        max={50000}
        steps={500}
        unit='$'/>
      <SliderComponent
        defaultValue={data.loanAmount}
        min={0}
        max={2000}
        steps={100}
        unit='$' />
      <SliderComponent
        defaultValue={data.loanTerm}
        min={0}
        max={10}
        steps={1}
        unit='Year' />
    </Stack>
  )
}

export default SliderSelect
