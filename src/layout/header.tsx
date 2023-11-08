import { AppShell, Burger, Group } from "@mantine/core";
import { Link } from "react-router-dom";

interface headerProps {
  opened: boolean;
  toggle: () => void;
}

function Header(props: headerProps) {
  const { opened, toggle } = props;
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Link to="/">FAKE STORE</Link>

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </AppShell.Header>
  );
}
export default Header;
