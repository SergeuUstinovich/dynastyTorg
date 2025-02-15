import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import style from "./Layout.module.scss";
import { useAllQuery } from "../../utils/useAllQuery";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../../providers/StoreProvider/slice/mainSlice";
import { myOrderActions } from "../../providers/StoreProvider/slice/myOrderSlice";
import { Toaster } from "react-hot-toast";
import { tasksActions } from "../../providers/StoreProvider/slice/tasksSlice";

function Layout() {
  const { mainPageQuery, myOrderQuery, allTasksQuery } = useAllQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (mainPageQuery.data) {
      dispatch(mainActions.mainData(mainPageQuery.data));
    }
  }, [mainPageQuery.data, dispatch]);

  useEffect(() => {
    if (myOrderQuery.data) {
      dispatch(myOrderActions.myOrderData(myOrderQuery.data));
    }
  }, [myOrderQuery.data, dispatch]);

  useEffect(() => {
    if (allTasksQuery.data) {
      dispatch(tasksActions.tasksData(allTasksQuery.data))
    }
  }, [allTasksQuery.data, dispatch]);

  return (
    <div className={style.app}>
      <Toaster position="top-center" reverseOrder={false} />
      <main className={style.main}>
        <Header />
        <Outlet />
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
