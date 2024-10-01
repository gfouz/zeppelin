import { Setting } from '../settings.types';

export type SettingAction = {
  type: string;
  payload: Setting;
};

export interface SettingStore {
  setting: Setting;
  dispatch: (action: SettingAction) => void;
}

interface SettingActions {
  [x: string]: (
    state: SettingStore,
    action: SettingAction,
  ) => {
    setting: Setting;
    dispatch: (action: SettingAction) => void;
  };
}

export interface SettingActionInterface {
  SET_SETTING: string;
}

export const SETTING_ACTION_TYPES: SettingActionInterface = {
  SET_SETTING: 'SET_SETTING',
};

export const settingActions: SettingActions = {
  [SETTING_ACTION_TYPES.SET_SETTING]: (
    state: SettingStore,
    action: SettingAction,
  ) => {
    const setting = { ...action.payload };
    const newState = {
      ...state,
      setting,
    };
    return newState;
  },
};
