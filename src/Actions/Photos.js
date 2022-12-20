import axios from "axios";
import { addPhotos } from "../Reducers/HomePhotos";

const baseUrl = "https://api.unsplash.com";
const accessKey = "PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg";

export const addPhotosAction = (page) => async (dispatch) => {
  try {
    let data = await axios.get(
      `${baseUrl}/photos?page=${page}&client_id=${accessKey}`
    );
    debugger;
    dispatch(addPhotos({ page: page, data: data.data }));
  } catch (err) {}
};
