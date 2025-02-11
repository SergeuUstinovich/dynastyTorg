import { useForm } from "react-hook-form";
import { TitlePage } from "../../components";
import { CalculateScheme, CalculateType } from "../../types/CalculateType";
import { Button } from "../../ui/Button";
import { FormField } from "../../ui/FormField";
import style from "./Calculate.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from "@react-input/mask";
import { useEffect, useState } from "react";
import { countryOptions, phoneMasks } from "./phoneMasks";
import ListBox from "../../ui/ListBox/ListBox";
import { useSelector } from "react-redux";
import { getMainSelector } from "../../providers/StoreProvider/selectors/getMainSelector";
import { useAllMutate } from "../../utils/useAllMutate";

function Calculate() {
  const [selectedCountry, setSelectedCountry] = useState<string>("RU");
  const [mask, setMask] = useState<string>(phoneMasks["RU"]);
  const user = useSelector(getMainSelector);
  const { calculateMutate } = useAllMutate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CalculateType>({
    resolver: zodResolver(CalculateScheme),
  });

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setMask(phoneMasks[value]);
    setValue("mobile_phone", "");
  };

  useEffect(() => {
    if (calculateMutate.isSuccess) {
      setValue("product", "");
      setValue("weight", "");
    }
  }, [calculateMutate.isSuccess, setValue]);

  return (
    <div>
      <TitlePage
        title="Калькулятор доставки"
        descr="Введите данные о грузе и его направление, чтобы рассчитать итоговую стоимость. "
      />
      <form
        onSubmit={handleSubmit(
          ({ product, weight, city, mobile_phone, email }) => {
            const cleaned = mobile_phone.replace(/[^\d]/g, "");
            calculateMutate.mutate({
              product,
              weight: Number(weight),
              city,
              mobile_phone: parseInt(cleaned, 10),
              email,
            });
          }
        )}
        className={style.form}
      >
        <FormField errorMessage={errors.product?.message} label={"Товар*"}>
          <input
            placeholder="Электроника"
            className={style.input}
            type="text"
            {...register("product")}
          />
        </FormField>
        <FormField errorMessage={errors.weight?.message} label={"Вес(кг)*"}>
          <input
            {...register("weight")}
            placeholder="100кг"
            className={style.input}
            type="number"
          />
        </FormField>
        <FormField errorMessage={errors.city?.message} label={"Город*"}>
          <input
            {...register("city")}
            placeholder="Москва"
            className={style.input}
            type="text"
            defaultValue={user?.user.city}
          />
        </FormField>
        <FormField
          errorMessage={errors.mobile_phone?.message}
          label={"Мой телефон*"}
        >
          <div className={style.phoneBox}>
            <ListBox
              items={countryOptions}
              value={selectedCountry}
              onChange={handleCountryChange}
            />
            <InputMask
              mask={mask}
              className={style.input}
              placeholder={mask}
              defaultValue={user?.user.mobile_phone}
              replacement={{ _: /\d/ }}
              {...register("mobile_phone")}
            />
          </div>
        </FormField>
        <FormField errorMessage={errors.email?.message} label={"Мой Email"}>
          <input
            {...register("email")}
            placeholder="mail@example.com"
            className={style.input}
            type="text"
            defaultValue={user?.user.email}
          />
        </FormField>
        <Button isLoading={calculateMutate.isPending} className={style.btn} type="submit">
          Рассчитать
        </Button>
        {calculateMutate.error && (
          <span className={style.err}>{calculateMutate.error.message}</span>
        )}
      </form>
    </div>
  );
}

export default Calculate;
