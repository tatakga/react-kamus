const ENDPOINTS = "https://kbbi-api-zhirrr.vercel.app/api/kbbi";

export const getMeanings = async (text) => {
  const response = await fetch(`${ENDPOINTS}?text=${text}`);
  const data = await response.json();
  return data;
};
