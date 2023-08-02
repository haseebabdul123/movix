import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQ2NmM1NTY4NzgzN2I4NzIxMzMxN2EyOTJjNWY4NyIsInN1YiI6IjY0YmFkNmUzMTEzODZjMDBlYjZlM2I4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RFL4shDP_zQdc13-PGDWV9h_uGF2_ZTQ6_rsp5ilCdc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
