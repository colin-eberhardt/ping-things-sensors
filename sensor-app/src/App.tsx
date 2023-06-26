import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Sensors from './pages/Sensors';
import Main from './pages/Main';
import WorkInProgress from './pages/WorkInProgress';
import SensorView from './pages/Sensors/SensorView';
import PageHeader from './components/PageHeader';
import { SensorContextProvider } from './context/SensorContext';

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
    path: "/sensors/:id/edit",
    element: <SensorView />,
  },
  {
    path: "/sensors/add",
    element: <SensorView />,
  }
]);

function App() {
  return (
    <SensorContextProvider>
      <div className="App">
        <PageHeader />
        <RouterProvider router={router} />
      </div>
    </SensorContextProvider>
  );
}

export default App;
