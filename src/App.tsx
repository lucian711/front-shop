import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./router";
import { globalTheme } from "./theme";

import { AuthProvider } from "@/store/context/auth-context";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider theme={globalTheme}>
          <Router />
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
