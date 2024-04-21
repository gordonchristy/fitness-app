import { createContext } from "react";

//This is my AppContext object that allows users datat to be cahred with components using the ApppContext.Provider component and the useContext hook.

const AppContext = createContext({
    users: [],
});

export default AppContext;