import { Route, Routes } from "react-router-dom";
import NotFound from "src/pages/notFound";
import { ROUTES } from "./routes";
import { AppWrapper } from "./App.styled";

export const App = () => {
  return (
    <AppWrapper>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppWrapper>
  );
};
