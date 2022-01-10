export const getDaysFromNow = (date: Date) => {
  const now = new Date();
  const diff = Math.abs(now.getTime() - date.getTime());
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
