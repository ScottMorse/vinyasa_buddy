import {
  type FunctionComponent,
  lazy,
  Suspense,
  type ComponentProps,
} from 'react';

export const lazyNamedImport = <
  Key extends keyof T,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T extends { [key in Key]: FunctionComponent<any> },
>(
  factory: () => Promise<T>,
  name: Key,
  autoFallback = true,
) => {
  const LazyComponent = lazy(async () => {
    const mod = await factory();
    return {
      default: mod[name],
    };
  });

  if (autoFallback) {
    return {
      [name]: function LazyAutoFallback(
        props: ComponentProps<typeof LazyComponent>,
      ) {
        return (
          <Suspense fallback={null}>
            <LazyComponent {...props} />
          </Suspense>
        );
      },
    };
  }
  return { [name]: LazyComponent };
};
