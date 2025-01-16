export async function fetchGeniusSongs(searchQuery: string) {
  const token =
    "nuej5uwIYxYxVx7a1vLcekQUo_0t7PaUccmA_-VDS0umOi6h80se5bOGglJPC3sM";
  const response = await fetch(
    `https://api.genius.com/search?q=${encodeURIComponent(searchQuery)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar músicas da API Genius");
  }

  const data = await response.json();
  return data.response.hits;
}
