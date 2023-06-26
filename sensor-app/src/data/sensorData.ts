 export const sensorData = [
    {    
        id: "0",
        name: "Sensor 1",
        location: "New York, New York",
        latitude: "40.7128° N",
        longitude: "74.0060° W",
        tags:  ["foo ", "bar ", "baz "],
        issueMsg: "error",
        favorite: true,
    },
    {    
        id: "1",
        name: "Sensor 2",
        location: "Alexandria, Virginia",
        latitude: "38.8048° N",
        longitude: "77.0469° W",
        tags: ["some ", "other ", "tag"],
        issueMsg: "warning",
        favorite: true
    },
    {    
        id: "2", 
        name: 'Sensor 3',
        location: "Los Angeles, California", 
        latitude: "34.0522° N", 
        longitude: "118.2437° W", 
        tags: ["foo", "tag"],
        issueMsg: "success",
        favorite: false
    },
    {
        id: "3",
        name: 'Sensor 4', 
        location: "Dallas, Texas",
        latitude: "32.7767° N", 
        longitude: "96.7970° W",
        tags: ["tag "], 
        issueMsg: "success", 
        favorite: false
    },
    {
        id: "4", 
        name: 'Sensor 5',
        location: "Philadelphia, Pennsylvania",
        latitude: "39.9526° N",
        longitude: "75.1652° W",
        tags: ["some ", "tag "],
        issueMsg: "warning",
        favorite: false
    }
 ];

 export interface ISensorDataItem {
    id?: number,
    name: string,
    location: string,
    latitude: string,
    longitude: string,
    tags: string[],
    issueMsg: string,
    favorite: boolean
 }

 export type ISensorData = ISensorDataItem[];