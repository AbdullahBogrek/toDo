import "./App.css";

import Container from "./components/Container";
import { FormProvider } from "./contexts/FormContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <FormProvider>
          <Container />
        </FormProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
 
export default App;
