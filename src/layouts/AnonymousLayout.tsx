import { AnonymousLayoutWrapper } from "./AnonymousLayout.styled";
import { Outlet } from "react-router-dom";

export const AnonymousLayout = () => {
  return (
    <AnonymousLayoutWrapper>
      <Outlet />
    </AnonymousLayoutWrapper>
  );
};
