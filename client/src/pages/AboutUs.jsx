import React from "react";
import aboutUsLogo from "../pics/about-us-top.jpg";
import bestPrice from "../pics/best-price.jpg";
import timeManage from "../pics/manage-time.jpg";
import directDelivery from "../pics/direct-delivery.jpg";
import orderMaking from "../pics/order-making.jpg";
import coopIcon from "../pics/coop-icon.jpg";
import deliveryBoxIcon from "../pics/delivery-box-icon.jpg";
import supportIcon from "../pics/support-icon.jpg";
import reIcon from "../pics/re-icon.jpg";
import rightIcon from "../pics/right-icon.jpg";
function AboutUs() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className=" flex items-center justify-center gap-[50px] mb-[100px]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className=" text-[#245462] self-start">О магазине</h3>
          <h1 className=" text-[24px] self-start font-semibold">
            Интернет-магазин «Лофт Мебель»: <br /> купите хорошую мебель в один
            клик!
          </h1>
          <p className=" text-[#686868]">
            Уникальный формат интернет-магазина позволит вам купить <br />{" "}
            лучшую мебель крупнейших российских фабрик максимально <br /> быстро
            и по выгодной цене! <br /> <br /> Мы благодарим за доверие более
            десятка производителей,
            <br /> которые дали нам возможность представлять лучшие <br />{" "}
            образцы их продукции в российском интернет-пространстве. <br />{" "}
            Прямые договоры на поставку мебели с фабрик обеспечивают <br />{" "}
            наиболее привлекательные условия для наших покупателей.
          </p>
        </div>
        <img src={aboutUsLogo} alt="" />
      </div>
      <div className=" flex flex-col items-center justify-center gap-[90px]">
        <h2 className=" text-[24px]">Покупайте с выгодой!</h2>
        <div className=" grid grid-cols-2 gap-[64px]">
          <div className=" flex items-center justify-center gap-[30px]">
            <img src={bestPrice} alt="" />
            <div className="flex flex-col items-start justify-center gap-[10px]">
              <h3 className="text-[18px]">Лучшая цена</h3>
              <p>
                Предлагаем близкие к оптовым цены, которые дают
                <br /> возможность приобретать мебель дешевле, чем в розничных
                <br /> салонах и шоу-румах.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-[30px]">
            <img src={directDelivery} alt="" />
            <div className="flex flex-col items-start justify-center gap-[10px]">
              <h3 className="text-[18px]">Прямые поставки</h3>
              <p>
                С ведущих мебельных фабрик уменьшают срок выполнения
                <br /> вашего заказа, даже если речь идет об изготовлении
                предметов
                <br /> по индивидуальному проекту.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-[30px]">
            <img src={timeManage} alt="" />
            <div className="flex flex-col items-start justify-center gap-[10px]">
              <h3 className="text-[18px]">Экономие времени</h3>
              <p>
                Не нашли оптимальный вариант или нет времени на поиски?
                <br /> Оставьте онлайн-заявку с критериями, и мы предложим
                <br /> вам несколько достойных образцов.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-[30px]">
            <img src={orderMaking} alt="" />
            <div className="flex flex-col items-start justify-center gap-[10px]">
              <h3 className="text-[18px]">Изготовление на заказ</h3>
              <p>
                Принимаем заявки на изготовление мебели по персональному
                <br />
                дизайн-проекту от покупателей из любой точки России. Просим
                <br /> быть готовыми к авансированной оплате персональных
                заказов.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-[#D7E8ED] mt-[95px] mb-[50px]">
        <div className=" flex flex-col items-center justify-center gap-[30px] mb-[65px] mt-[80px]">
          <h2 className="about-us-h2-after relative text-[18px]">
            Самые «вкусные» предложения
          </h2>
          <p className="text-center">
            Мы делаем всё необходимое, чтобы покупатели получали доступ к
            актуальным
            <br /> новинкам, которые представляет российский мебельный рынок.
            Познакомиться
            <br /> с каждой моделью, сравнить цены на аналоги и выбрать лучшее
            вы можете
            <br /> прямо сейчас. Хотите первыми узнавать о самых выгодных
            предложениях?
            <br /> Тогда подписывайтесь на информационную рассылку!
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[30px] mb-[65px]">
          <h2 className="about-us-h2-after relative text-[18px]">
            Гарантированное качество
          </h2>
          <p className="text-center">
            Вся продукция сопровождается гарантией производителя. В каталогах
            <br />
            представлена только сертифицированная мебель. Собственный контроль
            <br />
            качества тщательно проверяет каждый образец перед отправкой
            заказчику.
            <br /> Покупатели получают необходимые документы – гарантийный талон
            и чек.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[30px] mb-[80px]">
          <h2 className="about-us-h2-after relative text-[18px]">
            Впечатляющий ассортимент
          </h2>
          <p className="text-center">
            Ежедневно мы выбираем для наших каталогов идеальные образцы из
            товарной
            <br /> матрицы производителей по всей России. Модные расцветки,
            экологически
            <br /> безопасные материалы, надежные комплектующие – у нас вы
            найдете мебель
            <br /> своей мечты!
          </p>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center mb-[100px]">
        <div className="grid grid-cols-2 gap-[25px] w-full">
          <div className=" flex items-center justify-center p-[25px] bg-[#F4F4F4] relative">
            <div className=" flex flex-col items-start justify-center gap-[10px]">
              <h2 className=" font-semibold text-[18px]">
                Особенные условия для оптовиков
              </h2>
              <p className=" text-[14px]">
                Число наших оптовых покупателей неуклонно возрастает и всё
                потому,
                <br /> что мы сумели предложить владельцам мебельных магазинов
                наиболее
                <br /> выгодные условия.
              </p>
            </div>
            <img
              src={coopIcon}
              alt=""
              className=" rounded-full absolute -top-5 -left-5"
            />
          </div>
          <div className=" flex items-center justify-center p-[25px] bg-[#F4F4F4] relative">
            <div className=" flex flex-col items-start justify-center gap-[10px]">
              <h2 className=" font-semibold text-[18px]">
                Оперативная доставка
              </h2>
              <p className=" text-[14px]">
                Собственная курьерская служба быстро привезет купленную мебель
                по
                <br /> указанному адресу. В российские регионы доставка
                осуществляется
                <br /> силами транспортных компаний.
              </p>
            </div>
            <img
              src={deliveryBoxIcon}
              alt=""
              className=" rounded-full absolute -top-5 -left-5"
            />
          </div>
          <div className=" flex items-center justify-center p-[25px] bg-[#F4F4F4] relative">
            <div className=" flex flex-col items-start justify-center gap-[10px]">
              <h2 className=" font-semibold text-[18px]">
                Внимательный сервис
              </h2>
              <p className=" text-[14px]">
                Квалифицированные менеджеры интернет-магазина ответят на все
                <br />
                вопросы по ассортименту и предоставляемым возможностям, а также
                <br />
                помогут оформить заказ и проконтролируют реализацию клиентских
                <br />
                пожеланий при заказе мебели.
              </p>
            </div>
            <img
              src={supportIcon}
              alt=""
              className=" rounded-full absolute -top-5 -left-5"
            />
          </div>
          <div className=" flex items-center justify-center p-[25px] bg-[#F4F4F4] relative">
            <div className=" flex flex-col items-start justify-center gap-[10px]">
              <h2 className=" font-semibold text-[18px]">
                Каждый пятый покупатель заказывает у нас <br /> повторно!
              </h2>
              <p className=" text-[14px]">
                И мы благодарим всех, кто воспользовался нашим уникальным
                <br />
                предложением, заказал мебель быстро и недорого и порекомендовал
                <br />
                друзьям и знакомым.
              </p>
            </div>
            <img
              src={reIcon}
              alt=""
              className=" rounded-full absolute -top-5 -left-5"
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center w-3/4 flex-col mb-[200px]">
        <h2 className=" text-[24px] mb-[75px]">
          Мы поможем сэкономить время, силы и деньги!
        </h2>
        <div className=" flex items-center justify-center w-full mb-[174px] gap-[80px]">
          <div className=" flex items-center justify-center gap-5">
            <img src={rightIcon} alt="" />
            <div className=" flex flex-col items-start justify-center">
              <h2>Время.</h2>
              <p className=" text-[14px]">
                Примем вашу заявку в кротчайшие сроки.
                <br /> При необходимости подберем для вас
                <br /> достойные варианты по заданным
                <br /> критериям.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-5">
            <img src={rightIcon} alt="" />
            <div className=" flex flex-col items-start justify-center">
              <h2>Силы.</h2>
              <p className=" text-[14px]">
                Закупим оптом или закажем на фабрике,
                <br /> избавив от длительных обсуждений
                <br /> заказа с исполнителем. Курируем все
                <br /> этапы работы над заказом.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-5">
            <img src={rightIcon} alt="" />
            <div className=" flex flex-col items-start justify-center">
              <h2>Деньги.</h2>
              <p className=" text-[14px]">
                Вы точно купите мебель дешевле, чем в<br /> розницу.
              </p>
            </div>
          </div>
        </div>
        <h2 className=" text-[24px] text-center">
          На чем мы не экономим?
          <br /> На вашем комфорте и качестве мебели!
        </h2>
      </div>
    </div>
  );
}

export default AboutUs;
