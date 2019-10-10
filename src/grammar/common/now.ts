import { createContext } from 'parsebuddy';

export const nowContext = createContext(() => new Date());

export function getNow() {
  return nowContext.get()();
}
