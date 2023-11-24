export const fetchTodayForecast = async (
  lat: string,
  lon: string,
  unit: string
) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const res = await response.json();
    return res;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

export const fetch5DayForecast = async (
  lat: string,
  lon: string,
  unit: string
) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const res = await response.json();
    return res;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};
