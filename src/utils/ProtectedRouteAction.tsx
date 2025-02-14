import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { getMainSelector } from "../providers/StoreProvider/selectors/getMainSelector";

interface PrivateRouteProps {
  children: ReactNode;
}

function ProtectedRouteAction({ children }: PrivateRouteProps) {
  const [isActive, setIsActive] = useState(true);
  const { id } = useParams();
  const arr = useSelector(getMainSelector);

  useEffect(() => {
    if (arr && id) {
      const action = arr.actions.find((action) => action.id === Number(id));
      if (action) {
        setIsActive(action.activate);
      }
    }
  }, [id, arr]);

  if(!isActive) {
    return <Navigate to={'/home-action'} replace />
  }

  return children
}

export default ProtectedRouteAction;
