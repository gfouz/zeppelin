import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import {
  checkinactions,
  CheckinAction,
  CheckinStore,
} from './checkinActions.ts';

const reducer = (state: CheckinStore, action: CheckinAction) => {
  const { type } = action;

  const currentAction = checkinactions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialState = {
  status: undefined,
  first_name: undefined,
  last_name: undefined,
  passport: undefined,
  ticket: undefined,
  booking_code: undefined,
};
//Redux-like patterns store
const checkinState = persist<CheckinStore>(
  (set) => ({
    checkin: initialState,
    dispatch: (action: CheckinAction) => set((state) => reducer(state, action)),
  }),
  {
    name: 'checkin', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useCheckinStore = create(checkinState);

/*example of how to use the store

import {useCheckinStore} from 'checkinstore'
const checkin = useCheckinStore(state => state.checkin)

Or destructure the state:
const { checkin, dispatch } = useCheckinStore(state => state)

const dispatch = useCheckinStore((state) => state.dispatch)
dispatch({type:'SET_CHECKIN', payload: checkin}) 
*/
