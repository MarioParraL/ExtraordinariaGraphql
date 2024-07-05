type ApiInfo = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  episode: string;
  image: string;
  created: string;
};

export const getInfoFromApi = async (id: number): Promise<ApiInfo> => {
  const url = "https://rickandmortyapi.com/api/character/" + id;
  const data = await fetch(url, {
    method: "GET",
  });

  if (data.status !== 200) {
    console.error("Error:", data.status, data.statusText);
    throw new Error("Error");
  }

  const response = await data.json();
  console.log(response);
  return response;
};

export const getCharactersFromApi = async (
  id: number[],
): Promise<ApiInfo[]> => {
  const url = `https://rickandmortyapi.com/api/character/` + { id };
  const data = await fetch(url, {
    method: "GET",
  });

  if (data.status !== 200) {
    console.error("Error:", data.status, data.statusText);
    throw new Error("Error");
  }

  const response = await data.json();
  console.log(response);
  return response;
};
