import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "./SliderTop.module.scss";
import { sliderimg } from "shared/mock data/sliderImg";
import Button from "shared/UI/Button/Button";
import { Settings } from "react-slick";

const SliderTop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => {
      setActiveIndex(next); // Обновляем активный индекс при смене слайда
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#transparent",
          right: "-650px",
          top: "270px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: i === activeIndex ? "8px" : "10px",
          height: i === activeIndex ? "8px" : "10px",
          color: "fff",
          backgroundColor: i === activeIndex ? "#fff" : "transparent",
          transform: "scale(0.1px)",
          border: "1px #fff solid",
          borderRadius: "50%",
        }}
      ></div>
    ),
  };

  useEffect(() => {
    const slickList = document.querySelector(".slick-list") as HTMLDivElement;
    if (slickList) {
      slickList.style.overflow = "visible";
    }
  }, []);

  return (
    <div>
      <div className={cls.top_box}>
        <h1>
          Pet <br />
          Clinic
        </h1>
        <div className={cls.top_box_info}>
          <span>Круглосуточная ветеринарная клиника</span>
          <p>+7 999 430 74 32</p>
          <div>
            <a
              href="https://go.2gis.com/o8gnw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Москва, м. Алексеевская, Зубарев переулок д. 7
            </a>
            <img src="https://vet.city/upload/iblock/dde/p2s5n0fk7eh6vgg7weipdz7f7cjpdnn0.svg" />
          </div>
        </div>
      </div>
      <div className={cls.mainSL}>
        <Slider {...settings}>
          {sliderimg.map((item) => (
            <div key={item.id} className={cls.slider}>
              <div className={cls.slide}>
                <div className={cls.slide_title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.descr}</p>
                  </div>
                  <Button>Подробнее</Button>
                </div>
                <img
                  src={item.img}
                  alt={`image${item.id}`}
                  className={cls.slide_img}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderTop;
