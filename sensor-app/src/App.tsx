import React from 'react';
import { Grid } from '@mui/material';
import PageCard from './components/PageCard';
import PageHeader from './components/PageHeader';
import './App.css';

const cardOptions = ["Issues", "Notifications", "Exploration", "Sensors"]

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Grid container spacing={0}>
        {cardOptions.map((cardOption:string) => <Grid item xs={8}><PageCard title={cardOption}/></Grid>)}
      </Grid>
    </div>
  );
}

export default App;
