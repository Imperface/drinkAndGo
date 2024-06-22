import { MainLayoutWrapper } from "./MainLayout.styled";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <Outlet />
    </MainLayoutWrapper>
  );
};
