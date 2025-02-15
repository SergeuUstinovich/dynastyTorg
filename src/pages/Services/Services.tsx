import { useState } from "react";
import { ServicesList, SwitchOption, TitlePage } from "../../components";
import style from "./Services.module.scss";
import { serviceDelivery, servicesPackage } from "./servicesData";

type FilterType = "active" | "package";

const Services = () => {
  const [filterType, setFilterType] = useState<FilterType>("active");

  return (
    <section className="services">
      <TitlePage title={"Услуги"} />
      <div className={style.switcher}>
        <SwitchOption
          isActive={filterType === "active"}
          title={"Доставка"}
          onClick={() => setFilterType("active")}
        />
        <SwitchOption
          isActive={filterType === "package"}
          title={"Виды упаковок"}
          onClick={() => setFilterType("package")}
        />
      </div>
      <ServicesList
        data={filterType === "active" ? serviceDelivery : servicesPackage}
      />
    </section>
  );
};

export default Services;
