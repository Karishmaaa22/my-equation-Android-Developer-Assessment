import { getFavorites } from './storage';

export const getFavoritesStatsLast6Hours = async () => {
  const now = new Date();
  const todayStr = now.toDateString();

  const last6Hours = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(now.getTime() - (5 - i) * 60 * 60 * 1000);
    return {
      hour: date.getHours(),
      label: `${date.getHours()}:00`,
    };
  });

  const favorites = await getFavorites();

  const counts = last6Hours.map(({ hour }) => {
    const count = favorites.filter((fav: any) => {
      const favDate = new Date(fav.timestamp);
      return favDate.getHours() === hour && favDate.toDateString() === todayStr;
    }).length;
    return count;
  });

  return {
    labels: last6Hours.map((h) => h.label),
    data: counts,
  };
};
