export const getGifs = async (categorie) => {
  const apiKey = "shMCmG36dXcHfbAIu4QtfDBSA2rZhIZd";
  const server = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categorie}&limit=20`;
  const resp = await fetch(server);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    };
  });
  return gifs
};
