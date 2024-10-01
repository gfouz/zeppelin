import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import {
  settingActions,
  SettingAction,
  SettingStore,
} from './settingActions.ts';

const reducer = (state: SettingStore, action: SettingAction) => {
  const { type } = action;

  const currentAction = settingActions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialState = {
  id: undefined,
  email: undefined,
  available_days: undefined,
  unavailable_days: undefined,
  whatsapp: undefined,
};

// Redux-like patterns store
const settingState = persist<SettingStore>(
  (set) => ({
    setting: initialState,
    dispatch: (action: SettingAction) => set((state) => reducer(state, action)),
  }),
  {
    name: 'setting', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useSettingStore = create(settingState);

/*example of how to use the store

import {useSettingStore} from 'settingstore'
const setting = useSettingStore(state => state.setting)

Or destructure the state:
const { setting, dispatch } = useSettingStore(state => state)

const dispatch = useSettingStore((state) => state.dispatch)
dispatch({type:'SET_SETTING', payload: setting}) 
*/
