const timeLineData = [
  {
    name: "Początek nauki na",
    desc: "Rozpoczęcie nauki na Uniwersytecie Śląskim, na kierunku Informatyka, jest jednocześnie początkiem mojej przygody z programowaniem.",
    date: "2016-10-01",
    icon: {
      name: "fa-solid fa-school",
      background: "#002f5a",
      color: "white",
    },
    style: {
      background: "white",
      color: "#002f5a",
      border: "solid 2px #002f5a",
    },
    image: "us",
  },
  {
    name: "Staż i pierwsza praca w",
    desc: "Po niespełna dwóch latach nauki zacząłem swoją przygodę zawodową w firmie Comarch. Najpierw wakacyjny staż, a bezpośrednio po nim zostałem przyjęty jako Młodszy Programista.",
    date: "2018-06-01",
    icon: {
      name: "fa-solid fa-briefcase",
      background: "#152a95",
      color: "white",
    },
    style: {
      background: "#152a95",
      color: "white",
    },
    image: "comarch",
  },
  {
    name: "Java Persistence API/Hibernate",
    date: "2019-05-16",
    icon: {
      name: "fa-solid fa-chalkboard-user",
      background: "white",
      color: "#152a95",
      border: "solid 3px #152a95",
    },
    style: {
      background: "#152a95",
      color: "white",
      border: "solid 2px black",
    },
    image: "comarch-szkolenia",
  },
  {
    name: "Tworzenie usług sieciowych (Web Services) w języku Java",
    date: "2019-08-08",
    icon: {
      name: "fa-solid fa-chalkboard-user",
      background: "white",
      color: "#152a95",
      border: "solid 3px #152a95",
    },
    style: {
      background: "#152a95",
      color: "white",
      border: "solid 2px black",
    },
    image: "comarch-szkolenia",
  },
  {
    name: "Pierwsza certyfikacja Java - 1ZO-808",
    desc: "Pierwsza poważniejsza certyfikacja. Przełamanie bariery językowej. Ugruntowanie swojej wiedzy programistycznej z języka Java.",
    date: "2019-10-30",
    icon: {
      name: "fa-brands fa-java",
      background: "white",
      color: "#ff0000",
      border: "solid 3px #f00",
    },
    style: {
      background: "white",
      color: "black",
      border: "solid 2px #ff0000",
    },
    image: "oracle",
  },
  {
    name: "Obrona pracy Inżynierskiej",
    desc: 'Ukończenie studiów I stopnia, obrona pracy pt. "Webowa aplikacja kosztorysowa" i uzyskanie tytułu inżyniera. Studia I stopnia ukończyłem z oceną bardzo dobrą na dyplomie. System przygotowana w ramach pracy inżynierskiej składała się z trzech niezależnych aplikacji komunikujących się ze sobą. Części frontendowej (Angular), backendowej (Java-Spring) oraz serwera autoryzacyjnego (Keycloak).',
    date: "2020-07-02",
    icon: {
      name: "fa-solid fa-graduation-cap",
      background: "white",
      color: "#002f5a",
      border: "solid 3px #002f5a",
    },
    style: {
      background: "white",
      color: "black",
      border: "solid 2px #002f5a",
    },
    links: [
      {
        name: "Estimate",
        icon: "fa-brands fa-github",
        link: "https://github.com/MateuszLebioda/Estimate",
        color: "#999",
      },
    ],
  },
  {
    name: "Studia magisterskie na",
    desc: "Po półrocznej przerwie powrót na uczelnię. Tym razem w trybie niestacjonarnym, aby łatwiej pogodzić pracę z nauką.",
    date: "2020-10-01",
    icon: {
      name: "fa-solid fa-school",
      background: "#002f5a",
      color: "white",
    },
    style: {
      background: "white",
      color: "#002f5a",
      border: "solid 2px #002f5a",
    },
    image: "us",
  },
  {
    name: "Wzorce projektowe w oparciu o przykłady w języku Java",
    date: "2019-08-08",
    icon: {
      name: "fa-solid fa-chalkboard-user",
      background: "white",
      color: "#152a95",
      border: "solid 3px #152a95",
    },
    style: {
      background: "#152a95",
      color: "white",
      border: "solid 2px black",
    },
    image: "comarch-szkolenia",
  },
  {
    name: "Angular - kurs podstawowy. Framework aplikacji internetowych SPA",
    date: "2021-09-29",
    icon: {
      name: "fa-solid fa-chalkboard-user",
      background: "white",
      color: "#152a95",
      border: "solid 3px #152a95",
    },
    style: {
      background: "#152a95",
      color: "white",
      border: "solid 2px black",
    },
    image: "comarch-szkolenia",
  },
  {
    name: "Obrona pracy Magisterskiej",
    desc: 'Ukończenie studiów II stopnia, obrona pracy pt. "Wieloplatformowy szkieletowy system ekspertowy - realizacja oraz badania wydajnościowe algorytmów wnioskowania" i uzyskanie tytułu magistra. Studia magisterskie ukończyłem z wyróżnieniem uzyskując średnią ocen 4.71, co pozwoliło uzyskać ocenę celującą na dyplomie. Podczas pisania pracy powstała aplikacja Inference 2.0 - wieloplatformowy szkieletowy system ekspertowy. Aplikacja umożliwia tworzenie i edycję bazy wiedzy, wnioskowanie w przód oraz w tył uwzględniając różne strategie doboru reguł. Aplikacja powstałą w oparciu o technologię React oraz Electron.',
    date: "2022-06-13",
    icon: {
      name: "fa-solid fa-graduation-cap",
      background: "white",
      color: "#002f5a",
      border: "solid 3px #002f5a",
    },
    style: {
      background: "white",
      color: "black",
      border: "solid 2px #002f5a",
    },
    links: [
      {
        name: "Inference 2.0",
        icon: "fa-solid fa-arrow-right-to-bracket",
        link: "https://inference.netlify.app/",
        color: "#3366ff",
      },
    ],
  },
  {
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
    date: "2022-07",
    icon: {
      imageIcon: "udemy",
      background: "white",
      color: "#a435f0",
      border: "solid 3px #a435f0",
    },
    style: {
      background: "white",
      color: "black",
      border: "solid 2px #a435f0",
    },
    links: [
      {
        name: "Udemy",
        link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?src=sac&kw=Node.js%2C+Express%2C+MongoDB",
        color: "#a435f0",
        imageIcon: "udemy",
      },
    ],
    image: "udemy",
  },
  {
    name: "Gatsby.js Tutorial and Projects Course",
    date: "2022-08",
    icon: {
      imageIcon: "udemy",
      background: "white",
      color: "#a435f0",
      border: "solid 3px #a435f0",
    },
    style: {
      background: "white",
      color: "black",
      border: "solid 2px #a435f0",
    },
    links: [
      {
        name: "Udemy",
        link: "https://www.udemy.com/course/gatsby-tutorial-and-projects-course/",
        color: "#a435f0",
        imageIcon: "udemy",
      },
    ],
    image: "udemy",
  },
];

export default timeLineData;
