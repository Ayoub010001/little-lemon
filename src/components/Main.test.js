import { render, screen } from '@testing-library/react';
import {initializeTimes, updateTimes} from './Main';

test('initialize', () => {
    const ExpectedOutput = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const result = initializeTimes();
    expect(result).toEqual(ExpectedOutput);
});

test('UpdateTimes', () => {
    const oldState = initializeTimes();
    const newState = updateTimes(oldState);
    expect(oldState).toEqual(newState);
});