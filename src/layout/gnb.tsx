import { AppShell, NavLink } from "@mantine/core";

import menuData from "../mockData/menu.json";

interface menuData {
  id: number;
  name: string;
}

function Gnb() {
  const data: { name: string; path: string }[] = menuData.categories;

  return (
    <AppShell.Navbar p="md">
      {data.map((item, index) => {
        return <NavLink key={index} label={item.name} href={item.path} />;
      })}
    </AppShell.Navbar>
  );
}
export default Gnb;
