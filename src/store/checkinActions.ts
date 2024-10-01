import { Checkin } from '../checkins.types';

export type CheckinAction = {
  type: string;
  payload: Checkin;
};

export interface CheckinStore {
  checkin: Checkin;
  dispatch: (action: CheckinAction) => void;
}

interface CheckinActions {
  [x: string]: (
    state: CheckinStore,
    action: CheckinAction,
  ) => {
    checkin: Checkin;
    dispatch: (action: CheckinAction) => void;
  };
}

export interface CheckinActionInterface {
  SET_CHECKIN: string;
}

export const CHECKIN_ACTION_TYPES: CheckinActionInterface = {
  SET_CHECKIN: 'SET_CHECKIN',
};

export const checkinactions: CheckinActions = {
  [CHECKIN_ACTION_TYPES.SET_CHECKIN]: (
    state: CheckinStore,
    action: CheckinAction,
  ) => {
    const checkin = { ...action.payload };
    const newState = {
      ...state,
      checkin,
    };
    return newState;
  },
};
