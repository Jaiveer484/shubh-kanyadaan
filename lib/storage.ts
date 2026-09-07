export type Blessing = {
  id: string;
  name: string;
  relationship: string;
  city: string;
  message: string;
  likes: number;
};

const keys = { participation: "shubh-kanyadaan-participation", blessings: "shubh-kanyadaan-blessings" };

export function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T) {
  if (typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(value));
}

export const storageKeys = keys;
