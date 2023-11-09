// createContext : context 객체를 생성한다.
// Provider : 생성한 context를 하위 컴포넌트에게 전달하는 역할을 한다.
// Consumer : context의 변화를 감시하는 컴포넌트이다.
import { createContext, useContext, useState } from "react";

import { postData } from "@/store/api";
import { userType } from "@/store/types";

export type AuthContextType = {
  token: string | null;
  login: (
    userId: string,
    password: string,
    success: () => void,
    fail: () => void
  ) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "This context has to be used within <AuthContext.Provider>"
    );
  }

  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const login = async (
    userId: string,
    password: string,
    success: () => void,
    fail: () => void
  ) => {
    const response = await postData<userType>({
      url: "https://fakestoreapi.com/auth/login",
      body: {
        username: userId,
        password: password
      }
    });

    if (response.token) {
      // 토큰을 localStorage에 저장
      localStorage.setItem("token", response.token);
      setToken(response.token);
      success();
    } else {
      fail();
      return;
    }
  };
  const logout = async () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
