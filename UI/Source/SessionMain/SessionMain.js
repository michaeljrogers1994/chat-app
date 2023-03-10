const SessionMain = React.createContext();

export const Provider = (props) => {
    const [main, setMain] = React.useState({});
  
    return (
      <SessionMain.Provider
        value={{
          main,
          setMain,
        }}
      >
        {props.children}
      </SessionMain.Provider>
    );
  };
  
  export const SessionMainConsumer = (props) => (
    <SessionMain.Consumer>
      {(v) => props.children(v.main, v.setMain)}
    </SessionMain.Consumer>
  );
  
  export { SessionMain };
  
  export function useMain() {
    return React.useContext(SessionMain);
  }
  