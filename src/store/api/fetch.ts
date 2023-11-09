import axios, { AxiosResponse } from "axios";

export type getDataParams = {
  url: string;
};

export type postDataParams = {
  url: string;
  body: string | object;
};

export const getData = async <T>({ url }: getDataParams): Promise<T> => {
  const response: AxiosResponse = await axios.get(url);
  return response.data;
};

export const postData = async <T>({
  url,
  body
}: postDataParams): Promise<T> => {
  const response: AxiosResponse = await axios.post(url, body);
  return response.data;
};
