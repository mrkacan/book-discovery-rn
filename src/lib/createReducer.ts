interface Handler<T> {
  [key: string]: {(state: T, action: any): T};
}

export default function createReducer<T>(
  initialState: T,
  handlers: Handler<T>,
) {
  return function reducer(state = initialState, action: any): T {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
