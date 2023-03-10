import React from "react";
import { AboutC, AboutImg, AboutText, AboutWrapper } from "./styles";
import authorImg from "../../Assets/img/oliver.webp";

const About = () => {
  return (
    <AboutC>
      <AboutWrapper>
        <AboutImg>
          <img src={authorImg} alt="Jamie Oliver" />
        </AboutImg>
        <AboutText>
          <h1>Джейми Оливер</h1>
          <p>
            Я с детства интересовался готовкой. Но я и подумать не мог, что тот
            мальчик с дислексией станет всемирно известным ресторатором и
            телезвездой, а также получит титул сэра от британской королевы
            Елизаветы II. И вот, как это было.
          </p>
          <h3>Детство и образование</h3>
          <p>
            Я, Джеймс Тревор Оливер родился в деревне Клаверинг в графстве
            Эссекс. Вырос в Кембридже, небольшом городе, который прославил
            находящийся там университет. В Кембридже мои родители, Тревор и
            Салли, владели пабом и рестораном The Cricketers, который приобрели
            через год после моего рождения. <br />
            <br /> С восьмилетнего возраста родители привлекали меня к помощи в
            ресторане, а с 11-летнего возраста я начал полноценно помогать на
            кухне, резать овощи и выполнять другую работу. За это я получал от
            родителей достойную зарплату, а также имел возможность наблюдать за
            работой ресторана изнутри. Долго над профессией я не раздумывал. К
            тому же, я страдал дислексией, что ставило крест на получении мной
            серьезного образования.
            <br />
            <br />В возрасте 16 лет я поступил в Вестминстерский колледж
            общественного питания и показал такие успехи в учебе, что был
            отправлен на стажировку во Францию, а после учебы получил место
            кондитера в одном из лучших лондонских ресторанов Neal’s Yard. Там
            меня заметил шеф-повар Дженнаро Контальдо, посвятивший меня в
            секреты итальянской кухни. И до сих пор, я питаю особую любовь к
            итальянской кухне.
          </p>
          <h3>Счастливый случай</h3>
          <p>
            В 1997 году я работал в лондонском The River Cafе су-шефом, когда
            нагрянула съемочная группа телеканала ВВС, чтобы сделать сюжет о
            том, как готовить итальянское блюдо ротоло. Над ним на камеру я
            показал что умею. И на следующий день со мной связались сразу пять
            продюсеров разных британских каналов с идеями кулинарных шоу с его
            участием. Я выбрал ВВС, и в 1999 году на главном британском
            телеканале стартовало шоу «Голый повар». Интригующее название шоу не
            имело ничего общего с эротикой. Режиссер Патриция Ллевелин, давшая
            проекту имя The Naked Chef, подразумевала, что повар полностью
            откровенен со зрителями, ничего не скрывая.
            <br />
            <br />
            Ободренный успехом, в 2000 году я запустил еще одно шоу — Pukka
            Tukka — на Channel 4, в 2002-м — «Кухню Джейми». С тех пор и до сего
            дня я каждый год выпускаю циклы тематических передач, а также
            выпустил десяток книг. При этом, признаниюсь, я впервые дочитал
            книгу до конца в 38 лет, — из-за дислексии.
          </p>
          <h3>Благотворительность</h3>
          <p>
            Я занимаюсь благотворительностью с 2002 года, когда открыл ресторан
            Fifteen — «Пятнадцать», — куда принял на работу пятнадцать молодых
            людей без опыта в кулинарии, но с криминальным прошлым. Эта идея
            оказалась успешной и повлекла за собой создание сети Fifteen в
            Англии и Австралии.
          </p>
          <h3>Борец за здоровое питание</h3>
          <p>
            В 2005 году я запустил проект Jamie’s School Dinners, с помощью
            которого боролся с вредной едой в школьных меню. Я предложил
            разнообразные блюда, которые прижились в меню школьных столовых, и
            его инициативу поддержало правительство Великобритании, выделив 280
            миллионов фунтов стерлингов на изменение рациона учащихся,
            переоборудование школьных кухонь и переобучение поваров. В
            результате содержание жиров, подсластителей, красителей и
            ароматизаторов в детских обедах снизилось в разы, а на сладкие
            напитки был введен дополнительный налог.
            <br />
            <br />В июне 2003 года был награждён Орденом Британской империи за
            вклад в общественное питание и пропаганду здорового питания. С тех
            пор меня называют сэром Джеймсом Оливером.
          </p>
          <h3>Бизнесмен</h3>
          <p>
            В 2008 году запустил свой главный проект — международную сеть
            ресторанов Jamie’s Italian. Продукты для новых ресторанов закупались
            непосредственно в Италии. Первый Jamie’s Italian, открытый в
            Лондоне, вызвал восторг у профильных критиков. Со временем больше 50
            ресторанов под этой вывеской открылись в разных странах и городах. К
            2014 году мне принадлежало 38 различных бизнесов — от ресторанов до
            студий графического дизайна и модельных агентств. И я решил
            реорганизовать свою империю, выделив три основных направления: Jamie
            Oliver Holdings (контролирует медиа- и издательские проекты), Jamie
            Oliver Licensing (продает право на использование личного бренда
            Джейми Оливера) и Jamie Oliver Restaurant Group (управляет
            ресторанами).
            <br />
            <br />К удивлению, именно Restaurant Group стала самым проблемным
            активом. В сентябре 2017 года компания оказалась на грани
            банкротства.У нас просто кончились деньги А мы этого не ожидали.
            Честно говоря, я не знаю, что случилось. Думаю, руководство
            ресторанов столкнулось с тем, что можно назвать идеальным штормом, —
            аренда, ставки по кредитам, цены на еду растут, курс валюты из-за
            Brexit падает, а конкуренция на рынке обостряется. В 2019 году
            оставшиеся рестораны сети перешли под внешнее антикризисное
            управление.
          </p>
          <h3>Семья</h3>
          <p>
            Я женат на Джульет Нортон, или Джулс, как я ее называю. Мы
            познакомились 1993 году. В 2000-м мы поженились и в поселились моей
            родной деревушке.
            <br />
            <br />В 2002 году у нас родилась дочь Поппи Хани Рози, в 2003-м–
            вторая, Дейзи Бу Памела, а в 2009-м — третья, Петал Блоссом Рейнбоу.
            Через год у нас родился мальчик — Бадди Бир Морис. Тогда я объявил
            на весь белый свет, что я окончательно счастлив и даже готов сделать
            вазэктомию. Но еще через шесть лет Джулс и я стали родителями пятого
            ребенка, сына мы назвали Ривер Рокет.
            <br />
            <br />
            Джульет дегустирует мои новые блюда и тестирует его рецепты. Как я
            написал одной из своих книг: «Мнение Джулс помогает упрощать рецепты
            так, чтобы они были доступны каждому. Если она с ними справится,
            значит, сможете и вы».
          </p>
          <h3>Увлечения </h3>
          <p>
            В 1989 году, будучи подростком, я вместе с музыкантом и композитором
            Ли Хаггервудом основал группу Scarlet Division. я неплохой
            барабанщик. И пусть, главное достижение группы - 42 строчка в
            британском музыкальном чарте в 2000 году, я продолжаю играть на
            барабане и по сей день.
          </p>
        </AboutText>
      </AboutWrapper>
    </AboutC>
  );
};

export default About;
