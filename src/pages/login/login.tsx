import {
  Button,
  Group,
  TextInput,
  PasswordInput,
  Stack,
  Flex
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "@/store/context/auth-context";

function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      userId: "",
      password: ""
    },
    validate: {
      userId: value =>
        /^[a-zA-Z0-9]{5,15}$/.test(value)
          ? null
          : "아이디는 5~15자의 알파벳과 숫자로 구성되어야 합니다.",

      password: value =>
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,16}$/.test(value)
          ? null
          : "비밀번호는 4~16자의 영문과 숫자로 구성되어야 합니다."
    }
  });

  const handleLogin = useCallback(async () => {
    if (!form.validate()) {
      return;
    }

    await login(
      form.values.userId,
      form.values.password,
      () => {
        navigate("/");
        console.log("login success");
      },
      () => {
        console.log("error: login fail");
      }
    );
  }, [form, login, navigate]);
  return (
    <Flex maw={340} mx="auto" h={"100%"} justify="center" align="center">
      <form style={{ width: "100%" }}>
        <Stack>
          <TextInput
            withAsterisk
            label="아이디"
            placeholder="아이디를 입력해주세요."
            {...form.getInputProps("userId")}
          />
          <PasswordInput
            withAsterisk
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            maxLength={16}
            {...form.getInputProps("password")}
          />
        </Stack>

        <Group justify="flex-end" mt="md">
          <Button onClick={handleLogin}>로그인</Button>
        </Group>
      </form>
    </Flex>
  );
}
export default Login;
