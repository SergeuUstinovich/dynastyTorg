import { useSelector } from "react-redux";
import { getLvlSelector } from "../../providers/StoreProvider/selectors/getLvl";
import { ListLvl, TitlePage } from "../../components";
import { useEffect, useState } from "react";
import { addInfoLvlToData } from "../../helpers/addInfoLvlData";
import { LvlType } from "../../types/LvlType";
import { LoaderContent } from "../../ui/Loader/LoaderContent/LoaderContent";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";

function Lvling() {
  const arrLvl = useSelector(getLvlSelector);
  const [allLvl, setAllLvl] = useState<LvlType[]>();
  const userKg = useSelector(getMainSelector)

  useEffect(() => {
    if (arrLvl) {
      const newArr = addInfoLvlToData(arrLvl);
      setAllLvl(newArr);
    }
  }, [arrLvl]);

  return (
    <div>
      <TitlePage title="Уровни" />
      {allLvl && userKg ? <ListLvl arr={allLvl} kg={userKg.user.kg_order} /> : <LoaderContent isBg />}
    </div>
  );
}

export default Lvling;
