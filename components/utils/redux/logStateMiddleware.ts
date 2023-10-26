const logStateMiddleware = (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: any) => {
    console.log('State before update:', store.getState());
    const result = next(action);
    console.log('State after update:', store.getState());
    return result;
  };
  export default logStateMiddleware;