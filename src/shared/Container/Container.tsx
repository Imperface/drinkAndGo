import { FC } from "react";
import { ContainerWrapper } from "./Container.styled";
import { Children } from "@/shared/interfaces/Children";

export const Container: FC<Children> = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);
