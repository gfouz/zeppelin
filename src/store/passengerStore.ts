import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import {
  passengerActions,
  PassengerAction,
  PassengerStore,
} from './passengerActions.ts';

const reducer = (state: PassengerStore, action: PassengerAction) => {
  const { type } = action;

  const currentAction = passengerActions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialState = {
  id: undefined,
  role: 'Pasajeros',
  email: undefined,
  first_name: undefined,
  last_name: undefined,
  passport: undefined,
  ticket: undefined,
  booking_code: undefined,
};

// Redux-like patterns store
const passengerState = persist<PassengerStore>(
  (set) => ({
    passenger: initialState,
    dispatch: (action: PassengerAction) =>
      set((state) => reducer(state, action)),
  }),
  {
    name: 'passenger', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const usePassengerStore = create(passengerState);

/*example of how to use the store

import {usePassengerStore} from 'passengerstore'
const passenger = usePassengerStore(state => state.passenger)

Or destructure the state:
const { passenger, dispatch } = usePassengerStore(state => state)

const dispatch = usePassengerStore((state) => state.dispatch)
dispatch({type:'SET_PASSENGER', payload: passenger}) 
*/
