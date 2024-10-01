import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { flightactions, FlightAction, FlightStore } from './flightActions.ts';

const reducer = (state: FlightStore, action: FlightAction) => {
  const { type } = action;
  const currentAction = flightactions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialState = {
  id: undefined,
  isMain: false,
  isConnected: false,
  airline: undefined,
  flight_number: undefined,
  departure_place: undefined,
  arrival_place: undefined,
  departure_time: undefined,
  arrival_time: undefined,
  departure_date: undefined,
  adult_price: undefined,
  child_price: undefined,
  infant_price: undefined,
  luggage: undefined,
};
//Redux-like patterns store
const flightState = persist<FlightStore>(
  (set) => ({
    flight: initialState,
    dispatch: (action: FlightAction) => set((state) => reducer(state, action)),
  }),
  {
    name: 'flight', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useFlightStore = create(flightState);

/*example of how to use the store

import {useFlightStore} from 'flightstore'
const flight = useFlightStore( state => state.flight )
const dispatch = useFlightStore((state) => state.dispatch)
dispatch({type:'SET_FLIGHT', payload: flight}) 
*/
