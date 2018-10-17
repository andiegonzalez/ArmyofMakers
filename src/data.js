
// 1. diseño
// 2. Prototipado
// 3. programacion
// 4. sistemas y electronica

const makers = [
  {
    id: "1",
    name: "Andrea Gonzalez Arteaga",
    img: "IMG_2012.jpg",
    email: "a.gzzart@gmail.com",
    celular: "8116111047",
    carrera: "LAD",
    perfil: [
      "Diseño Gráfico",
      "Diseño Web",
      "Desarrollo Web"
    ],
    mensaje: "Hola! Estoy dispuesta a ayudar en lo que necesites",
    abilities: [1, 3]
  },
  {
    id: "2",
    name: "Diana Laura Serrato Lara",
    img: "IMG_2030.jpg",
    email: "dianalserratol@gmail.com",
    celular: "6181123952",
    carrera: "IID",
    perfil: [
      "Diseño y Prototipado",
      "Modelado e Impresión 3D",
      "Máquinas CNC"
    ],
    mensaje: "Dispuesta a ayudar en cualquier aspecto de diseño y prototipado y a aprender de campos distintos si es necesario! Ser Maker es de mis pasatiempos",
    abilities: [1, 2]
  },
  {
    id: "3",
    name: "Armando García Zacaneyes",
    img: "IMG_2027.jpg",
    email: "armant_93@hotmail.com",
    celular: "8441002235",
    carrera: "IMT",
    perfil: [
      "Diseño 3D",
      "Impresión 3D",
      "Diseño Mecánico",
      "Máquinas CNC"
    ],
    mensaje: "Soy estudiante de ingeniería mecatronica, me interesa mucho el diseño y fabricación de componentes, así como inovar en nuevas formas de realizar manufactura.",
    abilities: [1, 2]
  },
  {
    id: "4",
    name: "Jesucristo Torres Toledo",
    img: "IMG_2015.jpg",
    email: "jesucristo001@hotmail.com",
    celular: "6691600078",
    carrera: "IMT",
    perfil: [
      "Impresión 3D",
      "Modelado 3D",
      "Electrónica",
      "Desarrollo Front-End"
    ],
    mensaje: "Soy Jesucristo Torres, estudiante de mecatrónica 6to semestre especializado en impresión en 3D, diseño CAD, sistemas embebidos y con conocimientos en desarrollo web.",
    abilities: [1, 2, 3, 4]
  },
  {
    id: "5",
    name: "Enrique Antonio Vazquez Morales",
    img: "IMG_2026.jpg",
    email: "enrique.vazquez0296@gmail.com",
    celular: "8331486086",
    carrera: "IMT",
    perfil: [
      "Modelado 3D",
      "Diseño Mecánico"
    ],
    mensaje: "Alumno de séptimo semestre de Mecatrónica, apasionado por el deporte y la música. Estoy dispuesto a ayudar en todo lo que pueda y a aprender mientras trabajo con los diferentes proyectos.",
    abilities: [1, 2]
  },
  {
    id: "6",
    name: "Luis Fernando Garza Vera",
    img: "IMG_2028.jpg",
    email: "a00823226@itesm.mx",
    celular: "8186879848",
    carrera: "IID",
    perfil: [
      "Modelado en CAD",
      "Programación",
      "Electrónica",
      "Impresión 3D"
    ],
    mensaje: "Estudiante de I2D, comprometido con mi trabajo y entusiasta del aprendizaje.",
    abilities: [1, 2, 3, 4]
  },
  {
    id: "7",
    name: "Emmanuel Sámano Ornelas",
    img: "IMG_2019.jpg",
    email: "emmanuel.samano96@gmail.com",
    celular: "8117124075",
    carrera: "IME",
    perfil: [
      "Modelado 3D",
      "Diseño Mecánico",
      "Impresión 3D",
      "Electrónica",
      "Manufactura"
    ],
    mensaje: "Cualquier meta se cumple trabajando todos juntos, aportando cada quien un poco.",
    abilities: [1, 2, 3, 4]
  },
  {
    id: "8",
    name: "Gabriel Arturo Ramírez Marrujo",
    img: "IMG_2017.jpg",
    email: "arturo.rama97@gmail.com",
    celular: "6241155033",
    carrera: "ISD",
    perfil: [
      "Electrónica",
      "Programación",
      "Diseño de PBC"
    ],
    mensaje: "Soy Arturo, estudio Sistemas Digitales y Robótica. Las áreas en las que mas me enfoco son en la electrónica y el diseño de circuitos, y un poco de programación. Ante cualquier duda, no dudes en contactar y veré en que te puedo servir.",
    abilities: [2, 3, 4]
  },
  {
    id: "9",
    name: "Emiliano Sedano Zúñiga",
    img: "IMG_2020.jpg",
    email: "esz_1996@hotmail.com",
    celular: "2299784199",
    carrera: "IMA",
    perfil: [
      "Modelado 3D",
      "Diseño 3D",
      "Impresión 3D"
    ],
    mensaje: "Listo para trabajar!",
    abilities: [1, 3]
  },
  {
    id: "10",
    name: "Emmanuel González García",
    img: "IMG_2023.jpg",
    email: "A00516578@itesm.mx",
    celular: "8115136829",
    carrera: "IDA",
    perfil: [
      "Modelado",
      "Diseño 3D",
      "Programación",
      "Electrónica",
      "Mecánica",
      "Materiales"
    ],
    mensaje: "Mi fuerte es Diseño CAD Y CAM con NX, Elementos Finitos, etc. No dudes en contactarme, estoy para servirte.",
    abilities: [1, 2, 3, 4]
  },
  {
    id: "11",
    name: "Enrique Andrés Esquivel González",
    img: "IMG_2040.jpg",
    email: "eaeg2596@gmail.com",
    celular: "2292462051",
    carrera: "IMT",
    perfil: [
      "Impresión 3D",
      "CNC",
      "Corte Laser",
      "Diseño de Circuitos"
    ],
    mensaje: "'Hasta las puertas más pesadas pueden ser abiertas.' Si necesitas algo puedes confiar en nosotros.",
    abilities: [2, 4]
  },
  {
    id: "13",
    name: "Juan Antonio Peña Cortez",
    img: "IMG_2021.jpg",
    email: "A00515814@itesm.mx",
    celular: "8681410929",
    carrera: "IME",
    perfil: [
      "Diseño Mecánico",
      "Electrónica"
    ],
    mensaje: ".",
    abilities: [1, 4]
  }
]

export default makers;
