import { given, test } from 'sazerac';
import { sensorDataReducer, SensorDataReducerActionTypes } from './sensorDataReducer';

const testState = [
    {    
        id: "0",
        name: "Sensor 1",
        location: "New York, New York",
        latitude: "40.7128° N",
        longitude: "74.0060° W",
        tags:  ["foo ", "bar ", "baz "],
        issueMsg: "error",
        favorite: true,
    }
];

describe('sensorDataReducer', () => {
    const testCases = [
        {
            action: {
                type: SensorDataReducerActionTypes.UPDATE_NAME,
                id: "0",
                payload: "New Name"
            },
            expectedResult: [{
                ...testState[0],
                name: "New Name"
            }]
        }
    ];

    test(sensorDataReducer, () => {
        testCases.map((testCase, index) => given(testState, testCase.action).expect(testCase.expectedResult));
    });
});