import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Router from "./router";
import { globalTheme } from "./theme";

function App() {
  return (
    <div className="app">
      <MantineProvider theme={globalTheme}>
        <Router />
      </MantineProvider>
    </div>
  );
}

export default App;
