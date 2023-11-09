import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (error instanceof AxiosError) {
    return <div>⚠️ {error?.response?.data}</div>;
  }

  return <div>잘못된 접근입니다</div>;
};
