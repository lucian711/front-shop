import { AppShell, Burger, Group, ActionIcon, Box } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

import { Icon } from "@/components";
import { useAuthContext } from "@/store/context/auth-context";
interface headerProps {
  opened: boolean;
  toggle: () => void;
}

function Header(props: headerProps) {
  const { opened, toggle } = props;
  const { token, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <Link to="/">FAKE STORE</Link>

        <Box ml={"auto"}>
          {token ? (
            <ActionIcon
              aria-label="로그아웃"
              color="rgba(0, 0, 0, 1)"
              size="lg"
              variant="transparent"
              onClick={handleLogout}
              style={{ transform: "rotate(180deg)" }}
            >
              <Icon name="logout" />
            </ActionIcon>
          ) : (
            <ActionIcon
              aria-label="로그인"
              color="rgba(0, 0, 0, 1)"
              size="lg"
              variant="transparent"
              onClick={handleLogin}
            >
              <Icon name="login" />
            </ActionIcon>
          )}
        </Box>
      </Group>
    </AppShell.Header>
  );
}
export default Header;
