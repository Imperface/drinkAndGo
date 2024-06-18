import { Container } from "../Container";

import { SectionWrapper } from "./Section.styled";

export const Section = ({ title, titleClassName, children, className }) => {
  return (
    <SectionWrapper className={className}>
      <Container>
        {title && <h2 className={titleClassName}>{title}</h2>}
        {children}
      </Container>
    </SectionWrapper>
  );
};
