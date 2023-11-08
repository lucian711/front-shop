import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./router";
import { globalTheme } from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="app">
      <MantineProvider theme={globalTheme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
