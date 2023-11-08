import axios from "axios";

export type getDataType = {
  url: string;
};

export const getData = async ({ url }: getDataType) => {
  const response = await axios.get(url);
  return response.data;
};
