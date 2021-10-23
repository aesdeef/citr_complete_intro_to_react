import { createContext } from "react";

// we don't intend to use the default value, but it could be used by TypeScript to get the types
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
