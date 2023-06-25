import React from 'react';
import { Grid } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageCard from './components/PageCard';
import PageHeader from './components/PageHeader';
import './App.css';
import Sensors from './pages/Sensors';
import Main from './pages/Main';
import WorkInProgress from './pages/WorkInProgress';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <WorkInProgress />
  },
  {
    path: "/sensors",
    element: <Sensors />,
  },
  {

  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
