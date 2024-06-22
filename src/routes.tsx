import React from "react";
import { AnonymousLayout, MainLayout } from "@/layouts";

import Welcome from "@/pages/welcome";
import SignUp from "@/pages/signUp";
import SignIn from "@/pages/signIn";
import Home from "@/pages/home";
import Drinks from "@/pages/drinks";
import { pathOfRoutes } from "@/shared/constants/pathOfRoutes";

interface MainRoutesInterface {
  layout: React.JSX.Element;
  routes: {
    name: string;
    title: string;
    element: React.JSX.Element;
    path: string;
    isPublic: boolean;
  }[];
}

export const ROUTES: MainRoutesInterface[] = [
  {
    layout: <AnonymousLayout />,
    routes: [
      {
        name: "welcome",
        title: "Welcome page",
        element: <Welcome />,
        path: pathOfRoutes.WELCOME_ROUTE,
        isPublic: true,
      },
      {
        name: "signUp",
        title: "Sign Up page",
        element: <SignUp />,
        path: pathOfRoutes.SIGN_UP_ROUTE,
        isPublic: true,
      },
      {
        name: "signIn",
        title: "Sign In page",
        element: <SignIn />,
        path: pathOfRoutes.SIGN_IN_ROUTE,
        isPublic: true,
      },
    ],
  },
  {
    layout: <MainLayout />,
    routes: [
      {
        name: "home",
        title: "Home page",
        element: <Home />,
        path: pathOfRoutes.HOME_ROUTE,
        isPublic: false,
      },
      {
        name: "drinks",
        title: "Drinks page",
        element: <Drinks />,
        path: pathOfRoutes.DRINKS_ROUTE,
        isPublic: false,
      },
    ],
  },
];
