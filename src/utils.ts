import { type Planet } from "./types";
export const getTransitionId = ( { name }: Planet, element: string) => (
  `${ name }-${ element }`
);