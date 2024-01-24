import { useDispatch } from "react-redux";
import { setData } from "../slices/dataSlice";
import { fetchData } from "./api";

export const loadDataToRedux = async (url) => {
  try {
    const data = await fetchData(url);
    const dispatch = useDispatch();
    dispatch(setData(data));
  } catch (error) {
    console.error(error);
    // Handle error as needed
  }
};
