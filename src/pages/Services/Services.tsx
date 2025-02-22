import { ServicesList, SwitchOption, TitlePage } from "../../components";
import style from "./Services.module.scss";
import { serviceActions } from "../../providers/StoreProvider/slice/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { getServiceSelector } from "../../providers/StoreProvider/selectors/getService";
import { serviceDelivery, servicesPackage } from "./servicesData";

const Services = () => {
  const dispatch = useDispatch();
  const stateParams = useSelector(getServiceSelector);

  const handleSetDelivery = () => {
    dispatch(serviceActions.setService("delivery"));
  };

  const handleSetPackage = () => {
    dispatch(serviceActions.setService("package"));
  };

  return (
    <section className="services">
      <TitlePage title={"Услуги"} />
      <div className={style.switcher}>
        <SwitchOption
          isActive={stateParams === "delivery"}
          title={"Доставка"}
          onClick={handleSetDelivery}
        />
        <SwitchOption
          isActive={stateParams === "package"}
          title={"Виды упаковок"}
          onClick={handleSetPackage}
        />
      </div>
      <ServicesList
        data={stateParams === "delivery" ? serviceDelivery : servicesPackage}
      />
    </section>
  );
};

export default Services;
