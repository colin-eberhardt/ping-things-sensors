import { ISensorDataItem } from "../data/sensorData";

export interface ISensorDataReducerAction {
    type: SensorDataReducerActionTypes,
    id: number;
    payload: any; 
}

export enum SensorDataReducerActionTypes {
    UPDATE_NAME = "update name",
    UPDATE_LOCATION = "update location",
    UPDATE_LATITUDE = "update latitude",
    UPDATE_LONGITUDE = "update longitude",
    UPDATE_FAVORITE = "update favorite",
    UPDATE_TAGS = "update tags",
    ADD_SENSOR = "add sensor"
};

const newSensorState =     {    
    id: Math.random().toString(),
    name: "",
    location: "",
    latitude: "",
    longitude: "",
    tags:  [],
    favorite: false,
}


export const sensorDataReducer = (sensorsState:any, action:ISensorDataReducerAction) => {
    switch(action.type){
        case SensorDataReducerActionTypes.UPDATE_NAME: 
            return sensorsState.map((record:ISensorDataItem) => {
                if(record.id === action.id){
                    return { ...record, name: action.payload}
                }
                else{
                    return record
                }
            });
        case SensorDataReducerActionTypes.UPDATE_LOCATION: 
            return sensorsState.map((record:ISensorDataItem) => {
                if(record.id === action.id){
                    return { ...record, location: action.payload}
                }
                else{
                    return record
                }
            });
        case SensorDataReducerActionTypes.UPDATE_LATITUDE: 
            return sensorsState.map((record:ISensorDataItem) => {
                if(record.id === action.id){
                    return { ...record, latitude: action.payload}
                }
                else{
                    return record
                }
            });
        case SensorDataReducerActionTypes.UPDATE_LONGITUDE: 
            return sensorsState.map((record:ISensorDataItem) => {
                if(record.id === action.id){
                    return { ...record, longitude: action.payload}
                }
                else{
                    return record
                }
            });
        case SensorDataReducerActionTypes.UPDATE_FAVORITE: 
            return sensorsState.map((record:ISensorDataItem) => {
                if(record.id === action.id){
                    return { ...record, favorite: action.payload}
                }
                else{
                    return record
                }
            });
        case SensorDataReducerActionTypes.ADD_SENSOR: 
            return [...sensorsState, action.payload];
        default: 
            return sensorsState
    }
};