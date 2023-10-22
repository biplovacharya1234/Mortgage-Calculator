import React from 'react';
import { Container, Slider, Stack, Typography } from '@mui/material';

function SliderComponent({ defaultValue, min, max, steps, titleText, unit, amount,value,onChange}) {//destructuring of props
  return (
      <>
      <Stack>
        <Typography variant='subtitle1'>{titleText}</Typography>
        <Typography variant='h5'>{unit}{amount}</Typography>
      </Stack>
      <Slider defaultValue={defaultValue} min={min} max={max} aria-label="Default" valueLabelDisplay="auto" step={steps} onChange={onChange} value={value} marks/>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography color="text.secondary">{unit} {min}</Typography>
        <Typography color="text.secondary">{unit} {max}</Typography>
      </Stack>

      </>
  )
}

export default SliderComponent
