export function removeProperty<T, K extends keyof T>(entities: T[], property: K): T[] {
  return entities.map(entity => {
    const newEntity = Object.keys(entity).reduce((obj, key) => {
      if (key !== property) {
        return { ...obj, [key]: entity[key] };
      }
      return obj;
    }, {});

    return newEntity as T;
  });
};