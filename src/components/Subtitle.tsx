import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Subtitle({ children }: Props) {
  return <h2 className="text-3xl font-bold uppercase">{children}</h2>;
}
