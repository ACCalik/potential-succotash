export function save<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function load<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}
