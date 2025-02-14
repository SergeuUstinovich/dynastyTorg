import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useTelegram } from "../providers/telegram/telegram";
import { useQuery } from "@tanstack/react-query";
import { mainPage, myOrder } from "../api/main";
import { queryClient } from "../api/queryClient";
import { allTasks } from "../api/tasks";

export function useAllQuery() {
  const [searchParams] = useSearchParams();
  const [startInit, setStartInit] = useState(false);
  const { hash } = useTelegram();
  const referralUrl = searchParams.get("id");
  
  const mainPageQuery = useQuery(
    {
      queryKey: ["main"],
      queryFn: () => mainPage(hash, Number(referralUrl)),
      enabled: !!hash,
    },
    queryClient
  );
  useEffect(() => {
    if (mainPageQuery.data) {
      setStartInit(true);
    }
  }, [mainPageQuery.data]);

  const myOrderQuery = useQuery(
    {
      queryKey: ["myOrder"],
      queryFn: () => myOrder(),
      enabled: startInit,
    },
    queryClient
  );

  const allTasksQuery = useQuery(
    {
      queryKey: ["tasks"],
      queryFn: () => allTasks(),
      enabled: startInit,
    },
    queryClient
  );
  
  return {
    mainPageQuery,
    myOrderQuery,
    allTasksQuery
  }
}
