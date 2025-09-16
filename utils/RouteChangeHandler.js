// components/RouteChangeHandler.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useFilterStore from "@/stores/filterStore";

export default function RouteChangeHandler() {
  const router = useRouter();
  const { resetFilters } = useFilterStore();

  useEffect(() => {
    const handleRouteChange = () => {
      resetFilters();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return null;
}
