import { lazy, Suspense, useEffect } from "react";
import "./styles/global/App.scss";
import { Route, Routes, useNavigate } from "react-router";
import { useTelegram } from "./providers/telegram/telegram";
import { useLocation } from "react-router";
import ProtectedRouteAction from "./utils/ProtectedRouteAction";
import ProtectedRouteSkidki from "./utils/ProtectedRouteSkidki";
import NotPage from "./components/NotPage/NotPage";
import { ListPhotoAboutUs } from "./components";

const Layout = lazy(() => import("./pages/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Tasks = lazy(() => import("./pages/Tasks/Tasks"));
const MyOrders = lazy(() => import("./pages/MyOrders/MyOrders"));
const ItemOrders = lazy(() => import("./pages/ItemOrders/ItemOrders"));
const PhotoOrders = lazy(() => import("./components/PhotoOrders/PhotoOrders"));
const PhotoIndex = lazy(() => import("./components/PhotoOrders/PhotoIndex"));
const Calculate = lazy(() => import("./pages/Calculate/Calculate"));
const ListSkidki = lazy(() => import("./pages/Skidki/ListSkidki"));
const ItemSkidki = lazy(() => import("./pages/Skidki/ItemSkidki"));
const ListAction = lazy(() => import("./pages/Actions/ListAction"));
const ItemAction = lazy(() => import("./pages/Actions/ItemAction"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const ListDelivery = lazy(() => import("./pages/Delivery/ListDelivery"));
const ItemDelivery = lazy(() => import("./pages/Delivery/ItemDelivery"));
const Services = lazy(() => import("./pages/Services/Services"));
const ServicesOrder = lazy(() => import("./pages/Services/ServicesOrder"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Lvling = lazy(() => import("./pages/Lvling/Lvling"));
const ItemPhotoAbouUs = lazy(() => import("./components/ListPhotoAboutUs/ItemPhotoAbouUs"));

function App() {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const location = useLocation();
  tg.expand();
  tg.disableVerticalSwipes();

  useEffect(() => {
    if (location.pathname === "/") {
      tg.BackButton.hide();
    } else {
      tg.BackButton.show();
      tg.BackButton.onClick(() => {
        navigate(-1);
      });
    }
    return () => {
      tg.BackButton.offClick(() => {
        navigate(-1);
      });
    };
  }, [location.pathname, tg.BackButton, navigate]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"home-orders"} element={<MyOrders />} />
            <Route path={"home-profile"} element={<Profile />} />
            <Route path={"home-delivery"} element={<ListDelivery />} />
            <Route path={"home-delivery/:id"} element={<ItemDelivery />} />
            <Route path={"home-orders-info/:id"} element={<ItemOrders />} />
            <Route
              path={"home-orders-info/:id/photo"}
              element={<PhotoOrders />}
            />
            <Route
              path={"home-orders-info/:id/photo/:index"}
              element={<PhotoIndex />}
            />
            <Route path={"home-calculate"} element={<Calculate />} />
            <Route path={"home-action"} element={<ListAction />} />
            <Route
              path={"home-action/:id"}
              element={
                <ProtectedRouteAction>
                  <ItemAction />
                </ProtectedRouteAction>
              }
            />
            <Route path={"home-skidki"} element={<ListSkidki />} />
            <Route
              path={"home-skidki/:id"}
              element={
                <ProtectedRouteSkidki>
                  <ItemSkidki />
                </ProtectedRouteSkidki>
              }
            />
            <Route path={"tasks"} element={<Tasks />} />
            <Route path={"lvl"} element={<Lvling />} />
            <Route path={"services"} element={<Services />} />
            <Route
              path={"services/:id/:category"}
              element={<ServicesOrder />}
            />
            <Route path={"aboutus"} element={<AboutUs />} />
            <Route path={"aboutus-photo"} element={<ListPhotoAboutUs />} />
            <Route path={"aboutus-photo/:index"} element={<ItemPhotoAbouUs />} />
            <Route path={"*"} element={<NotPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
