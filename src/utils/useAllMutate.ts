import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { calculateForm } from "../api/main";

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

  return {
    calculateMutate,
  };
}
