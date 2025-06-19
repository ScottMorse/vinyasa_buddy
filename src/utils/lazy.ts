import { type ComponentType, lazy } from 'react';

export const lazyNamedImport = <
  Key extends keyof T,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T extends { [key in Key]: ComponentType<any> },
>(
  factory: () => Promise<T>,
  name: Key,
) => ({
  [name]: lazy(async () => {
    const mod = await factory();
    return { default: mod[name] };
  }),
});
