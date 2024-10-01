import { Passenger } from '../passenger.types';

export type PassengerAction = {
  type: string;
  payload: Passenger;
};

export interface PassengerStore {
  passenger: Passenger;
  dispatch: (action: PassengerAction) => void;
}

interface PassengerActions {
  [x: string]: (
    state: PassengerStore,
    action: PassengerAction,
  ) => {
    passenger: Passenger;
    dispatch: (action: PassengerAction) => void;
  };
}

export interface PassengerActionInterface {
  SET_PASSENGER: string;
}

export const PASSENGER_ACTION_TYPES: PassengerActionInterface = {
  SET_PASSENGER: 'SET_PASSENGER',
};

export const passengerActions: PassengerActions = {
  [PASSENGER_ACTION_TYPES.SET_PASSENGER]: (
    state: PassengerStore,
    action: PassengerAction,
  ) => {
    const passenger = { ...action.payload };
    const newState = {
      ...state,
      passenger,
    };
    return newState;
  },
};
