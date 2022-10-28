import React from 'react'
import imageMain from "../images/selector_main.png"
import imageLeft from "../images/selector_left.png"
import imageRight from "../images/selector_right.png"
import "../style/grid.css";
import { useNavigate } from 'react-router';

const  Section = () => {

   const navigateAllProducts = useNavigate();
   const navigatetoAllProducts = () => {
     navigateAllProducts("/allproducts");
   };
   const navigateCreamePage = useNavigate();
   const navigateToCreamePage = () => {
     navigateCreamePage("/creame");
   };
   const navigateMakeUpCosmetic = useNavigate();
   const navigateToMakeUpCosmetic = () => {
     navigateMakeUpCosmetic("/cosmetic");
   };
  return (
    <section id="container">
      <div className="wrap-container">
        <section className="content-box box-3 ">
          <div className="grid" style={{ width: "100%" }}>
            <div className="wrap-box">
              <div className="row">
                <div className="col-1-3">
                  <div className="portfolio-box zoom-effect">
                    <img src={imageRight} class="img-responsive" alt="" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-name">Креми</div>
                        <div className="project-category"></div>
                        <div className="project-button">
                          <button onClick={navigateToCreamePage} class="button button-skin">Детальніше</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3">
                  <div className="portfolio-box zoom-effect">
                    <img src={imageMain} class="img-responsive" alt="" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-name">Вся продукція</div>
                        <div className="project-category"></div>
                        <div className="project-button">
                          <button class="button button-skin" onClick={navigatetoAllProducts}>Детальніше</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-3">
                  <div className="portfolio-box zoom-effect">
                    <img src={imageLeft} class="img-responsive" alt="" />
                    <div className="portfolio-box-caption">
                      <div className="portfolio-box-caption-content">
                        <div className="project-name">Косметика для облича</div>
                        <div className="project-category"></div>
                        <div className="project-button">
                          <button onClick={navigateToMakeUpCosmetic} class="button button-skin">Детальніше</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-box boxstyle-1 box-4">
          <div className="grid">
            <div className="row wrap-box">
              <div className="row">
                <div className="col-1-2">
                  <div className="wrap-col"></div>
                </div>
                <div className="col-1-2">
                  <div className="wrap-col">
                    <ul className="history">
                      <li>
                        <div className="heading">
                          <div className="title">Як замовити?</div>
                          <div className="icon">
                            <i className="fa fa-briefcase"></i>
                          </div>
                          <div className="datetime">Оберіть товар!</div>
                        </div>
                        <p>
                          Ми пропонуємо багатий вибор різноманітної косметики.
                          Обирайте будь яку на ваш смак! Та скоріше додавайте
                          її!
                        </p>
                      </li>
                      <li>
                        <div className="heading">
                          <div className="icon">
                            <i className="fa fa-briefcase"></i>
                          </div>
                          <div className="datetime">
                            Напишіть нам!
                          </div>
                        </div>
                        <p>
                          Ви можете використати одну з соціальнаих мереж для
                          зв'язку з нами!
                        </p>
                      </li>
                      <li>
                        <div className="heading">
                          <div className="icon">
                            <i className="fa fa-briefcase"></i>
                          </div>
                          <div className="datetime">
                            Ми обов'язково з Васи зв'яжемось
                          </div>
                        </div>
                        <p>
                          Дочекайтесь будь ласка як один з наших менеджерів
                          відповість Вам та підтвердить Ваше чудове замовлення!
                        </p>
                      </li>
                      <li>
                        <div className="heading">
                          <div className="icon">
                            <i className="fa fa-briefcase"></i>
                          </div>
                          <div className="datetime">
                            Ми Вам пакуємо!
                          </div>
                        </div>
                        <p>
                          Забрати на вказану Вами відділення пошти та насолоджуватись чудовою
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Section