export const isEmail = (email: string) => {
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return false;
  }
  return true;
}