import { FC, ReactElement } from "react";
import { SectionWrapper } from "./Section.styled";
import { Container } from "@/shared/Container";

interface Props {
  className: string;
  children: string | ReactElement | ReactElement[];
}

export const Section: FC<Props> = ({ className, children }) => {
  return (
    <SectionWrapper className={className}>
      <Container>{children}</Container>
    </SectionWrapper>
  );
};
