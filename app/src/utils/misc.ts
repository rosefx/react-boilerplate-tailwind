export type CefWindow = {
  invokeNative: unknown;
  GetParentResourceName: () => string;
} & Window;

export const isEnvBrowser = (): boolean =>
  !(window as unknown as CefWindow).invokeNative;

export const noop = () => {};
