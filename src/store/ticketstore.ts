import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { ticketactions, TicketAction, TicketStore } from './ticketActions.ts';

const reducer = (state: TicketStore, action: TicketAction) => {
  const { type } = action;
  const currentAction = ticketactions[type];
  return currentAction ? currentAction(state, action) : state;
};

const initialState = {
  ticket_issuer: {
    id: undefined,
    username: undefined,
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    is_staff: undefined,
    date_joined: undefined,
    last_login: undefined,
  },
  flight: {
    id: undefined,
    departure_place: undefined,
    arrival_place: undefined,
    flight_number: undefined,
    departure_time: undefined,
    arrival_time: undefined,
    departure_date: undefined,
    luggage: undefined,
  },
  id: undefined,
  status: undefined,
  airline: undefined,
  first_name: undefined,
  last_name: undefined,
  passport: undefined,
  infant_price: undefined,
  child_price: undefined,
  adult_price: undefined,
  last_reservation_date: undefined,
};
//Redux-like patterns store
const ticketState = persist<TicketStore>(
  (set) => ({
    ticket: initialState,
    dispatch: (action: TicketAction) => set((state) => reducer(state, action)),
  }),
  {
    name: 'flight', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useTicketStore = create(ticketState);

/*example of how to use the store
  
  import {useTicketStore} from 'ticketstore'
  const ticket = useTicketStore( state => state.ticket )
  const dispatch = useTicketStore((state) => state.dispatch)
  dispatch({type:'SET_TICKET', payload: ticket}) 
  */
