import { Ticket } from '../tickets.types';

export type TicketAction = {
  type: string;
  payload: Ticket;
};
export interface TicketStore {
  ticket: Ticket;
  dispatch: (action: TicketAction) => void;
}

interface TicketActions {
  [x: string]: (
    state: TicketStore,
    action: TicketAction,
  ) => {
    ticket: Ticket;
    dispatch: (action: TicketAction) => void;
  };
}

export interface TicketActionInterface {
  SET_TICKET: string;
}
export const FLIGHT_ACTION_TYPES: TicketActionInterface = {
  SET_TICKET: 'SET_TICKET',
};

export const ticketactions: TicketActions = {
  [FLIGHT_ACTION_TYPES.SET_TICKET]: (
    state: TicketStore,
    action: TicketAction,
  ) => {
    const ticket = { ...action.payload };
    const newState = {
      ...state,
      ticket,
    };
    return newState;
  },
};
