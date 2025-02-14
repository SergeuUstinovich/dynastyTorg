import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { calculateForm } from "../api/main";
import { sendAction } from "../api/actions";
import toast from "react-hot-toast";

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
      },
    },
    queryClient
  );

  const sendActionMutate = useMutation(
    {
      mutationFn: (data: {
        id: number
      }) =>
        sendAction(
          data.id
        ),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["main"] });
      },
      onError: (err) => {
        toast.error(err.message)
      }
    },
    queryClient
  );

  return {
    calculateMutate,
    sendActionMutate
  };
}
