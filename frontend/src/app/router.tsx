import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import NotFound from "@/pages/NotFound";

import HistoryPage from "@/features/history/HistoryPage";
import PredictionDetailsPage from "@/features/history/PredictionDetailsPage";

import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import DashboardHome from "@/features/dashboard/pages/DashboardHome";
import CaptionPage from "@/features/dashboard/pages/CaptionPage";
import PredictionPage from "@/features/dashboard/pages/PredictionPage";
import HashtagPage from "@/features/hashtags/pages/HashtagPage";
import AnalyticsPage from "@/features/analytics/pages/AnalyticsPage";
import ProfilePage from "@/features/dashboard/pages/ProfilePage";
import SettingsPage from "@/features/dashboard/pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <DashboardHome />,
      },

      {
        path: "captions",
        element: <CaptionPage />,
      },

      {
        path: "hashtags",
        element: <HashtagPage />,
      },

      {
        path: "prediction",
        element: <PredictionPage />,
      },

      {
        path: "analytics",
        element: <AnalyticsPage />,
      },

      {
        path: "history",
        element: <HistoryPage />,
      },

      {
        path: "history/:id",
        element: <PredictionDetailsPage />,
      },

      {
        path: "profile",
        element: <ProfilePage />,
      },

      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}