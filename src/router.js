import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import GamePrivacyPage from "./pages/GamePrivacyPage";
import GameDeletePage from "./pages/GameDeletePage";
import AppsPage from "./pages/AppsPage";
import AppDetailPage from "./pages/AppDetailPage";
import AppPrivacyPage from "./pages/AppPrivacyPage";
import AppDeletePage from "./pages/AppDeletePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "games", element: <GamesPage /> },
      { path: "games/:gameSlug", element: <GameDetailPage /> },
      { path: "games/:gameSlug/privacy", element: <GamePrivacyPage /> },
      { path: "games/:gameSlug/delete", element: <GameDeletePage /> },

      { path: "apps", element: <AppsPage /> },
      { path: "apps/:appSlug", element: <AppDetailPage /> },
      { path: "apps/:appSlug/privacy", element: <AppPrivacyPage /> },
      { path: "apps/:appSlug/delete", element: <AppDeletePage /> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;