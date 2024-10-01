import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { actions, Action, ModelStore } from './actions.ts';

const reducer = (state: ModelStore, action: Action) => {
  const { type } = action;
  const currentAction = actions[type];
  return currentAction ? currentAction(state, action) : state;
};

export const initialModel = {
  name: '',
};
//Redux-like patterns store
const modelState = persist<ModelStore>(
  (set) => ({
    model: initialModel,
    dispatch: (action: Action) => set((state) => reducer(state, action)),
  }),
  {
    name: 'model', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useModelStore = create(modelState);

/*example of how to consume the store

import {useModeltStore} from './store'
const dispatch = useModelStore((state) => state.dispatch)
dispatch({type:'SET_MODEL', payload: model}) 
 "model" must be { name: model_name }
*/
