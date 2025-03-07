import ImageContainer from "../../utils/ImageContainer";
import style from "./AboutUs.module.scss";
import img from "../../assets/png/aboutUs.png";
import { Accordion, CustomSwiper } from "../../ui";
import { dataAbout } from "./dataAbout";
import { ContainerSwiper, ItemImgSwiper } from "../../components";

function AboutUs() {
  const configPhoto = {
    spaceBetween: 8,
    slidesPerView: dataAbout && dataAbout.photo.length > 2 ? 2.4 : 2,
  };
  return (
    <div>
      <div className={style.boxInfo}>
        <h2 className={style.titleInfo}>Наша компания</h2>
        <div className={style.boxImg}>
          <ImageContainer className={style.imgInfo} src={img} x1x16 />
        </div>
        <p style={{ marginBottom: "8px" }} className={style.descrInfo}>
          <b>ДинастияТорг</b> - команда профессионалов, специализирующаяся на
          организации и сопровождении закупок товаров напрямую у производителей
          в Китае.
        </p>
        <p className={style.descrInfo}>
          Наш подход основан на многолетнем опыте, глубоком знании мирового
          рынка и стремлении максимально упростить для вас процесс
          взаимодействия с зарубежными поставщиками.
        </p>
      </div>
      <div className={style.boxAccor}>
        <Accordion title={"Почему выбирают нас?"}>
          <ul className={style.list}>
            {dataAbout.whyUs.map((item, index) => (
              <li className={style.item} key={index}>
                <h3 className={style.title}>
                  {index + 1}. {item.title}
                </h3>
                <p className={style.descr}>{item.descr}</p>
              </li>
            ))}
          </ul>
        </Accordion>
        <Accordion title={"Мы в цифрах?"}>
          <ul className={style.list}>
            {dataAbout.numbers.map((item, index) => (
              <li className={style.item} key={index}>
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.descr}>{item.descr}</p>
              </li>
            ))}
          </ul>
        </Accordion>
        <Accordion title={"Процесс взаимодействия с нами"}>
          <ul className={style.list}>
            {dataAbout.process.map((item, index) => (
              <li className={style.item} key={index}>
                <h3 className={style.title}>
                  {index + 1}. {item.title}
                </h3>
                <p className={style.descr}>{item.descr}</p>
              </li>
            ))}
          </ul>
        </Accordion>
        <Accordion title={"Основные страны логистики"}>
          <ul className={style.list}>
            {dataAbout.country.map((item, index) => (
              <li className={style.item} key={index}>
                <h3 className={`${style.title} ${style.titleBox}`}>
                  <img
                    style={{ marginRight: "4px", width: "20px" }}
                    src={item.img}
                    alt=""
                  />{" "}
                  <div>{item.title}</div>
                </h3>
              </li>
            ))}
          </ul>
        </Accordion>
        <ContainerSwiper title="Фото" link="/aboutus-photo">
          <CustomSwiper config={configPhoto}>
            {dataAbout &&
              dataAbout.photo.map((item, index) => (
                <ItemImgSwiper link={`/aboutus-photo/${index}`} key={index} src={item.img} descr={""} disable />
              ))}
          </CustomSwiper>
        </ContainerSwiper>
      </div>
    </div>
  );
}

export default AboutUs;
