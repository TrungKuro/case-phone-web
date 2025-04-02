"use client";

import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { getAuthStatus } from "./action";
import { ROUTES } from "@/constants/routes";
import { Loader2 } from "lucide-react";

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null);
  const router = useRouter();

  // Lấy configId từ localStorage
  useEffect(() => {
    const configurationId = localStorage.getItem(
      LOCAL_STORAGE_KEYS.CONFIGURATION_ID
    );
    if (configurationId) {
      setConfigId(configurationId);
    }
  }, []);

  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  });

  // Di chuyển router.push vào trong useEffect để tránh lỗi
  useEffect(() => {
    if (data?.success) {
      if (configId) {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.CONFIGURATION_ID);
        router.push(ROUTES.CONFIGURE_PREVIEW + configId);
      } else {
        router.push(ROUTES.HOME);
      }
    }
  }, [data, configId, router]);

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logging you in ...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
