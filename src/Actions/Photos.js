import axios from "axios";
import { addPhotos, searchedPhotos } from "../Reducers/HomePhotos";

const baseUrl = "https://api.unsplash.com";
const accessKey = "PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg";

export const addPhotosAction = (page) => async (dispatch) => {
  try {
    let data = await axios.get(
      `${baseUrl}/photos?page=${page}&client_id=${accessKey}`
    );

    dispatch(addPhotos({ page: page, data: data.data }));
  } catch (err) {
    console.log(err);
  }
};

export const searchPhotosAction = (page, term) => async (dispatch) => {
  try {
    let data = await axios.get(
      `${baseUrl}/search/photos?page=${page}&query=${term}`,
      {
        headers: {
          Authorization: "Client-ID " + accessKey,
        },
      }
    );
    dispatch(searchedPhotos({ page: page, data: data.data.results }));
    debugger;
  } catch (err) {
    console.log(err);
  }
};
