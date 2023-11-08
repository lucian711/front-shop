import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Container from "./container";
import Footer from "./footer";
import Gnb from "./gnb";
import Header from "./header";

function Layout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header toggle={toggle} opened={opened} />
      <Gnb />
      <Container />
      <Footer />
    </AppShell>
  );
}

export default Layout;
