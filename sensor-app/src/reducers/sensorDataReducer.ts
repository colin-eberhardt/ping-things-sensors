import { ISensorDataItem } from "../data/sensorData";

interface ISensorDataReducerAction {
    type: SensorDataReducerActionTypes,
    payload: string;
}

export enum SensorDataReducerActionTypes {
    UPDATE_NAME = "update name",
    UPDATE_LOCATION = "update location",
    UPDATE_LATITUDE = "update latitude",
    UPDATE_LONGITUDE = "update longitude"
}

export const sensorDataReducer = (sensorState:any, action:ISensorDataReducerAction) => {
    console.log(sensorState)
    switch(action.type){
        case SensorDataReducerActionTypes.UPDATE_NAME: 
            return {...sensorState, name: action.payload}
        case SensorDataReducerActionTypes.UPDATE_LOCATION: 
            return {...sensorState, location: action.payload}
        case SensorDataReducerActionTypes.UPDATE_LATITUDE: 
            return {...sensorState, latitude: action.payload}
        case SensorDataReducerActionTypes.UPDATE_LONGITUDE: 
            return {...sensorState, longitude: action.payload}
    default: 
        return sensorState
    }
};