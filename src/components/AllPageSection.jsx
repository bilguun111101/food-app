import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersistentDrawerLeft from "./Navbar/Navbar";
import { lightTheme, darkTheme } from "../themes";
import { useSettingsContext } from "../Settings";
import SignInSide from "./SignIn/SignIn";
import { Button } from "@mui/material";
import MenuSection from "./Home/Menu";
import SignUp from "./SignUp/Signup";
import _ from "lodash";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      text: "#000",
      trans: "0.4s",
    },
  },
});

const secTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
      text: "#FFF",
    },
  },
});

const AllPageSection = () => {
  const { colorChange } = useSettingsContext();

  return (
    <ThemeProvider theme={colorChange ? theme : secTheme}>
      <BrowserRouter>
        <PersistentDrawerLeft />
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<MenuSection />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AllPageSection;
