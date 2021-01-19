export const getCookie = (value: string): Record<string, string> => {
    const pairs = value.split('; ');
    const cookies: Record<string, string> = {};

    pairs.forEach((pair: string) => {
      const [ key, val ] = pair.split('=');
      cookies[key] = val;
    });

    return cookies;
  }
  