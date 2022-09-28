import AllPageSection from "./components/AllPageSection";
import { MenuOrderContextProvider } from "./MenuOrderContext";
import { SettingsContextProvider } from "./Settings";
import { SignContextProvider } from "./SignContext";
import { TitleContextProvider } from "./TitleContext";

function App() {
  return (
    <>
      <SettingsContextProvider>
        <SignContextProvider>
          <TitleContextProvider>
            <MenuOrderContextProvider>
              <AllPageSection />
            </MenuOrderContextProvider>
          </TitleContextProvider>
        </SignContextProvider>
      </SettingsContextProvider>
    </>
  );
}

export default App;
