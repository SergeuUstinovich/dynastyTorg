import { useEffect, useState } from "react";
import { useTelegram } from "../providers/telegram/telegram";
import { useQuery } from "@tanstack/react-query";
import { mainPage, myOrder } from "../api/main";
import { queryClient } from "../api/queryClient";
import { allTasks } from "../api/tasks";

export function useAllQuery() {
  const [startInit, setStartInit] = useState(false);
  const { hash } = useTelegram();

  
  const mainPageQuery = useQuery(
    {
      queryKey: ["main"],
      queryFn: () => mainPage(hash),
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
