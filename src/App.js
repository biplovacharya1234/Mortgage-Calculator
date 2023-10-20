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
    downPayment:25000,
    loanAmount:1000,
    loanTerm:5
  })

  return (
    <div className="App">
      <Navbar />
      <Container sx={{border:'2px solid white', mt:5}}>
        <Grid container spacing={0} sx={{border:'2px solid red',mt:5, mb:5, p:2}}>
          <Grid item md={6} xs={12} sx={{border: "2px solid pink",mt:5,mb:5, p:2, textAlign:'left'}}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect />
          </Grid>
          <Grid item md={6} xs={12}sx={{border: "2px solid green",mt:5,mb:5,p:2}}>
            <Result />
          </Grid>


        </Grid>

      </Container>

    </div>
  );
}

export default App;
