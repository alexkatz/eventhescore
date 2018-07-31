export const wrap: <T>(Component: T, wrappers: [(component: any) => any]) => T = (Component, wrappers) => wrappers.reduce((C, wrapper) => wrapper(C), Component);
