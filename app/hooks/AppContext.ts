import { createContext } from "react";
interface IAppContext{
  idElementFocus?: string
}
export const AppContext = createContext<IAppContext>({})