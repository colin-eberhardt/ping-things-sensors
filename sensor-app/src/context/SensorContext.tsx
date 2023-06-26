import React, { useReducer } from 'react';
import { sensorData } from '../data/sensorData';
import { sensorDataReducer } from '../reducers/sensorDataReducer'; 

const SensorContext = React.createContext<any>({});

export const SensorContextProvider = ({children}:any) => {
    const [ sensorsState, dispatch ] = useReducer(sensorDataReducer, sensorData);

    return (
        <SensorContext.Provider value={{ sensorsState, dispatch }}>
          {children}
        </SensorContext.Provider>
      );
}

export default SensorContext