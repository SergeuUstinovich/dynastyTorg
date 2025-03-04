import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { getMainSelector } from "../providers/StoreProvider/selectors/getMainSelector";

interface PrivateRouteProps {
  children: ReactNode;
}

function ProtectedRouteSkidki({ children }: PrivateRouteProps) {
  const [isActive, setIsActive] = useState(true);
  const { id } = useParams();
  const arr = useSelector(getMainSelector);

  useEffect(() => {
    if (arr && id) {
      const skidki = arr.skidki.find((item) => item.id === Number(id));
      if (skidki) {
        setIsActive(skidki.active);
      }
    }
  }, [id, arr]);

  if(!isActive) {
    return <Navigate to={'/home-skidki'} replace />
  }

  return children
}

export default ProtectedRouteSkidki;
