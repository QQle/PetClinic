import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { PageNotFound } from "pages/PageNotFound";
import { Authorization } from "pages/Authorization";
import { Registration } from "pages/Registration";
import { ShelterPage } from "pages/ShelterPage";
import { PetPage } from "pages/PetPage";
import { VetPage } from "pages/VetPage";

export enum AppRoutes {
  MAIN = "main",
  AUTH = "login",
  REGIST = "sigin",
  SHELTER = "shelter",
  PET = "pet",
  VET = "vetCabinet",
  PAGE_NOT_FOUND = "page_not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.AUTH]: "login",
  [AppRoutes.REGIST]: "signin",
  [AppRoutes.SHELTER]: "shelter",
  [AppRoutes.PET]: "/pet/:id",
  [AppRoutes.VET]: "/vetCabinet/:id",
  // must be last
  [AppRoutes.PAGE_NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.login,
    element: <Authorization />,
  },
  [AppRoutes.REGIST]: {
    path: RoutePath.sigin,
    element: <Registration />,
  },
  [AppRoutes.SHELTER]: {
    path: RoutePath.shelter,
    element: <ShelterPage />,
  },
  [AppRoutes.PET]: {
    path: RoutePath.pet,
    element: <PetPage />,
  },
  [AppRoutes.VET]: {
    path: RoutePath.vetCabinet,
    element: <VetPage />,
  },
  // must be last
  [AppRoutes.PAGE_NOT_FOUND]: {
    path: RoutePath.page_not_found,
    element: <PageNotFound />,
  },
};
