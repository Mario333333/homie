import { useEffect, useState } from "react";
import axios from "../utils/services/intance";
type AxiosType = <T>(url: string) => { data: T | null; error: boolean };

const useAxios: AxiosType = <Type>(url: string) => {
  const [data, setData] = useState<Type | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [url]);
  return { data, error };
};

export default useAxios;
