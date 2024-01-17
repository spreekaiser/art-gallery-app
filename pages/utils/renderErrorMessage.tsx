import { IApiError } from "../../types/types";

export function renderErrorMessage(error: IApiError, dataSource: string) {
  return (
    <>
      <p>Uh oh, something went wrong fetching the {dataSource} data...</p>
      <p>{error.message}</p>
    </>
  );
}
