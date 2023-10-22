import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import { Container, Grid } from '@mui/material';


function App() {

  const[data, setData] = useState({
    homeValue:50000,
    downPayment:50000*0.1,
    loanAmount:50000*0.9,
    intrest:10,
    loanTerm:5
  });
  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <Container sx={{mt:0}}>
        <Grid container spacing={0} sx={{mt:0, mb:0, p:2}}>
          <Grid item md={6} xs={12} sx={{mt:0,mb:0, p:2, textAlign:'left'}}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item md={6} xs={12}sx={{mt:0,mb:0,p:2}} alignItems={'center'} justifyContent={'center'} margin={'auto'}>
            <Result data={data}/>
          </Grid>


        </Grid>

      </Container>

    </div>
  );
}

export default App;
