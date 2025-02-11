import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import style from "./ListBox.module.scss";
import { classNames } from "../../utils/classNames";
import { ArrowUpAccordSvg, CheckedSvg } from "../../assets/svg";

interface ListBoxItem {
  id: string;
  value: string;
  content: ReactNode;
  disabled?: boolean;
  img?: string;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  hiddenArrow?: boolean;
  onChange?: (value: string) => void;
}

function ListBox(props: ListBoxProps) {
  const { className = "", items, value, defaultValue, onChange } = props;
  const selectedItem = items?.find((item) => item.value === value);

  return (
    <Listbox
      as={"div"}
      className={classNames(style.listbox, {}, [className])}
      value={value}
      onChange={onChange}
    >
      <ListboxButton className={style.trigger}>
        {({ open }) => (
          <>
            {selectedItem ? (
              <img src={selectedItem.img} alt={selectedItem.value} />
            ) : (
              defaultValue
            )}
            <span className={style.boxArrow}>
              <ArrowUpAccordSvg
                className={classNames(
                  style.arrowSlideSvg,
                  { [style.open]: open },
                  []
                )}
              />
            </span>
          </>
        )}
      </ListboxButton>
      <ListboxOptions
        anchor="top start"
        className={classNames(style.options, {}, ["app_modal"])}
      >
        {items?.map((item) => (
          <ListboxOption
            key={item.id}
            disabled={item.disabled}
            value={item.value}
            as={Fragment}
          >
            {({ focus, selected }) => (
              <li
                className={classNames(style.item, {
                  [style.active]: selected ? false : focus,
                  [style.disabled]: item.disabled,
                  [style.select]: selected,
                })}
              >
                {item.img && (
                  <img className={style.img} src={item.img} alt={item.value} />
                )}
                <p className={style.descr}>{item.content}</p>
                {selected && <CheckedSvg />}
              </li>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default ListBox;
