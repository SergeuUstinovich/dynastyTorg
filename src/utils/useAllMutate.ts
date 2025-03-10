import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { calculateForm } from "../api/main";
import { sendAction } from "../api/actions";
import toast from "react-hot-toast";
import { changeStatus, takeReward } from "../api/tasks";

export function useAllMutate() {
  const calculateMutate = useMutation(
    {
      mutationFn: (data: {
        product: string;
        weight: number;
        city: string;
        mobile_phone: number;
        email: string | undefined | null;
      }) =>
        calculateForm(
          data.product,
          data.weight,
          data.city,
          data.mobile_phone,
          data.email
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["main"] });
        toast.success('Спасибо! Форма успешно отправлена')
      },
    },
    queryClient
  );

  const sendActionMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => sendAction(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["main"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
    queryClient
  );

  const changeStatusMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => changeStatus(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
    queryClient
  );

  const takeRewardMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => takeReward(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        queryClient.invalidateQueries({ queryKey: ["main"] });
        toast.success('Задание выполнено!');
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
    queryClient
  );

  return {
    calculateMutate,
    sendActionMutate,
    changeStatusMutate,
    takeRewardMutate
  };
}
