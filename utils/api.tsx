import { IApiError } from "../types/types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export function renderErrorMessage(error: IApiError, dataSource: string) {
  return (
    <>
      <p>Uh oh, something went wrong fetching the {dataSource} data...</p>
      <p>{error.message}</p>
    </>
  );
}
