import useSWR from "swr";
import { IApiError } from "../types/types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export function useFetchData(url: string) {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    throw new Error(`Error fetching the data from ${url}`);
  }

  return { data, error, isLoading };
}

export function renderErrorMessage(error: IApiError, dataSource: string) {
  return (
    <>
      <p>Uh oh, something went wrong fetching the {dataSource} data...</p>
      <p>{error.message}</p>
    </>
  );
}
