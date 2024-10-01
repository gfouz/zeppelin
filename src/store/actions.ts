export interface Model {
  name?: string;
}

export type Action = {
  type: string;
  payload: Model;
};
export interface ModelStore {
  model?: Model;
  dispatch: (action: Action) => void;
}

interface Actions {
  [x: string]: (
    state: ModelStore,
    action: Action,
  ) => {
    model?: Model;
    dispatch: (action: Action) => void;
  };
}
export interface ActionTypes {
  SET_MODEL: string;
}
export const ACTION_TYPES: ActionTypes = {
  SET_MODEL: 'SET_MODEL',
};
export const actions: Actions = {
  [ACTION_TYPES.SET_MODEL]: (state: ModelStore, action: Action) => {
    const model = { ...action.payload };
    const newState = {
      ...state,
      model,
    };
    return newState;
  },
};

//---------------UserStore------------------------------------

export interface User {
  id?: string;
  token?: string;
}

export type UserAction = {
  type: string;
  payload: User;
};
export interface UserStore {
  user: User;
  dispatch: (action: UserAction) => void;
}

interface UserActions {
  [x: string]: (
    state: UserStore,
    action: UserAction,
  ) => {
    user: User;
    dispatch: (action: UserAction) => void;
  };
}

export interface UserActionInterface {
  SET_USER: string;
  LOG_OUT: string;
}
export const USER_ACTION_TYPES: UserActionInterface = {
  SET_USER: 'SET_USER',
  LOG_OUT: 'LOG_OUT',
};

export const useractions: UserActions = {
  [USER_ACTION_TYPES.SET_USER]: (state: UserStore, action: UserAction) => {
    const user = { ...action.payload };
    const newState = {
      ...state,
      user,
    };
    return newState;
  },
  [USER_ACTION_TYPES.LOG_OUT]: (state: UserStore, action: UserAction) => {
    const user = { ...action.payload };
    const newState = {
      ...state,
      user,
    };
    return newState;
  },
};
