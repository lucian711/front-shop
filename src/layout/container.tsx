import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

function Container() {
  return (
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  );
}
export default Container;
