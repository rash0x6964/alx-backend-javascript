export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const callCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
};
