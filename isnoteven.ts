import { isEven } from "npm:is-even";

export function isNotEven(num: number): number
{
  return !isEven(num);
}
