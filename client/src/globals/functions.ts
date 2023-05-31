export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getCurrentISODate = () => {
  return new Date(new Date().toISOString());
}