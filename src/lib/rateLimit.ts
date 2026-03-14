type RateLimitEntry = { count: number; resetAt: number };

type RateLimitOptions = {
  windowMs: number;
  max: number;
};

const store = new Map<string, RateLimitEntry>();

export const createRateLimiter = ({ windowMs, max }: RateLimitOptions) => {
  return (key: string) => {
    const now = Date.now();
    const entry = store.get(key);

    if (!entry || entry.resetAt <= now) {
      store.set(key, { count: 1, resetAt: now + windowMs });
      return false;
    }

    if (entry.count >= max) {
      return true;
    }

    entry.count += 1;
    store.set(key, entry);
    return false;
  };
};
