import { MouseEvent, TouchEvent } from "react";

export interface IIconHeartProps {
  size: number;
  className: string;
  onClick: (event: MouseEvent<SVGElement> | TouchEvent<SVGElement>) => void;
  onTouchStart: (
    event: MouseEvent<SVGElement> | TouchEvent<SVGElement>
  ) => void;
}
