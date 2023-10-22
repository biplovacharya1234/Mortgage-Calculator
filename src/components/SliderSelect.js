import React from 'react';
import SliderComponent from './common/SliderComponent';
import { Stack } from '@mui/material';

function SliderSelect({data, setData}) {
  return (
    <Stack gap={0}>
      <SliderComponent
        defaultValue={data.homeValue}
        min={10000}
        max={100000}
        steps={1000}
        unit='$'
        titleText={"Home Value"}
        value={data.homeValue}
        onChange={(e, value) => setData({...data,
          downPayment:value*0.1,
          loanAmount:value*0.9,
          homeValue: value })}
        amount={data.homeValue}/>
      <SliderComponent
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={500}
        unit='$'
        titleText={"Down Payment"}
        value={data.downPayment}
        onChange={(e, value) => setData({...data,
          loanAmount:data.homeValue-value,
          downPayment: value })}
        amount={data.downPayment}/>
      <SliderComponent
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={500}
        unit='$'
        titleText={"Loan Amount"}
        value={data.loanAmount}
        onChange={(e, value) => setData({...data,
        downPayment:data.homeValue-value,
        loanAmount: value })}
        amount={data.loanAmount} />
      <SliderComponent
        defaultValue={data.intrest}
        min={0}
        max={20}
        steps={1}
        unit='%'
        titleText={"Intrest Rate"}
        value={data.intrest}
        onChange={(e, value) => setData({...data, intrest: value })}
        amount={data.intrest} />
    </Stack>
  )
}

export default SliderSelect
