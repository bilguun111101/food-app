import { useState } from "react";
import { useContext, createContext } from "react";

const MenuOrderContext = createContext();

export const MenuOrderContextProvider = props => {
    const { children } = props
    const [orderBackBool, setOrderBackBool] = useState(false);
    const [data, setData] = useState({});
    return(
        <MenuOrderContext.Provider value={{ orderBackBool, setOrderBackBool, data, setData }}>
            { children }
        </MenuOrderContext.Provider>
    )
}

export const useMenuOrderContext = () => useContext(MenuOrderContext)