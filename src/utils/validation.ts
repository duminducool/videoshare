export const validateUsername = (username: string): boolean => {
  return username.length >= 3 && username.length <= 30;
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateVideoUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateThumbnailUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};