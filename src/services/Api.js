import axios from "axios";

const API_KEY = "65e099e6cffa4de71421ba155fe33fea";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    // Configurazione dei parametri della richiesta:
    params: {
      api_key: API_KEY, // La chiave API necessaria per l'autenticazione.
      query, // La query di ricerca inserita dall'utente.
    },
  });
  // Restituisco un map della data dove per ciascun oggetto aggiungo una proprietà che specifica che é un film
  return response.data.results.map((movie) => ({
    ...movie,
    type: "movie",
  }));
};

export const fetchTvSeries = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/tv`, {
    // Configurazione dei parametri della richiesta:
    params: {
      api_key: API_KEY, // La chiave API necessaria per l'autenticazione.
      query, // La query di ricerca inserita dall'utente.
    },
  });
  // Restituisco un map della data dove per ciascun oggetto aggiungo una proprietà che specifica che é una serie tv
  return response.data.results.map((tv) => ({
    ...tv,
    type: "tv",
  }));
};