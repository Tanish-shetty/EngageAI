import { useEffect, useState } from "react";

import getDashboardAnalytics from "@/services/analytics/getDashboardAnalytics";
import type { DashboardAnalytics } from "@/services/analytics/getDashboardAnalytics";

export default function useAnalytics() {
  const [data, setData] =
    useState<DashboardAnalytics | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    try {
      const response =
        await getDashboardAnalytics();

      setData(response);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
  };
}