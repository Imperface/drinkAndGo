import Welcome from "src/pages/welcome";
import Home from "src/pages/home";
import Drinks from "src/pages/drinks";
import { WelcomeLayout, AppLayout } from "./layouts";

const WELCOME_ROUTE = "/";
const HOME_ROUTE = "/home";
const DRINKS_ROUTE = "/drinks";

export const ROUTES = [
  {
    path: WELCOME_ROUTE,
    element: (
      <WelcomeLayout>
        <Welcome />
      </WelcomeLayout>
    ),
  },
  {
    path: HOME_ROUTE,
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: DRINKS_ROUTE,
    element: (
      <AppLayout>
        <Drinks />
      </AppLayout>
    ),
  },
];
