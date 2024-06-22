import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isPublic: boolean;
  isAuthorized: boolean;
}

export const ProtectedRoute: FC<Props> = ({ isPublic, isAuthorized }) => {
  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/welcome" />;
};
