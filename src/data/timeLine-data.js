const timeLineData = [
  {
    name: "startLearningOn",
    desc: "startLearningOnDesc",
    date: "2016-10-01",
    icon: {
      name: "FaSchool",
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
    name: "internshipAndFirstJob",
    desc: "internshipAndFirstJobDesc",
    date: "2018-06-01",
    icon: {
      name: "FaBriefcase",
      background: "#152a95",
      color: "white",
    },
    style: {
      background: "#152a95",
      color: "white",
    },
    image: "comarch",
    whiteDate: true,
  },
  {
    name: "courseJavaPersistence",
    date: "2019-05-16",
    icon: {
      name: "FaChalkboardTeacher",
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
    whiteDate: true,
  },
  {
    name: "courseWebServicesInJava",
    date: "2019-08-08",
    icon: {
      name: "FaChalkboardTeacher",
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
    whiteDate: true,
  },
  {
    name: "oracleCertification",
    desc: "oracleCertificationDesc",
    date: "2019-10-30",
    icon: {
      name: "FaJava",
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
    name: "engineeringThesisDefense",
    desc: "engineeringThesisDefenseDesc",
    date: "2020-07-02",
    icon: {
      name: "FaGraduationCap",
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
        icon: "FaGithub",
        link: "https://github.com/MateuszLebioda/Estimate",
        color: "#999",
      },
    ],
  },
  {
    name: "mastersDegreeIn",
    desc: "mastersDegreeInDesc",
    date: "2020-10-01",
    icon: {
      name: "FaSchool",
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
    name: "designPatternsJava",
    date: "2019-08-08",
    icon: {
      name: "FaChalkboardTeacher",
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
    whiteDate: true,
  },
  {
    name: "angularBasic",
    date: "2021-09-29",
    icon: {
      name: "FaChalkboardTeacher",
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
    whiteDate: true,
  },
  {
    name: "mastersThesisDefense",
    desc: "mastersThesisDefenseDesc",
    date: "2022-06-13",
    icon: {
      name: "FaGraduationCap",
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
        icon: "FaRegHandPointRight",
        link: "https://inference.netlify.app/",
        color: "#3366ff",
      },
    ],
  },
  {
    name: "nodeCourse",
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
    name: "gatsbyCourse",
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
  {
    name: "jsCourse",
    date: "2023-03-8",
    icon: {
      name: "FaChalkboardTeacher",
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
    whiteDate: true,
  },
  {
    name: "microservicesCourse",
    date: "2023-07",
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
        link: "https://www.udemy.com/course/microservices-with-node-js-and-react/",
        color: "#a435f0",
        imageIcon: "udemy",
      },
    ],
    image: "udemy",
  },
];

export default timeLineData;
