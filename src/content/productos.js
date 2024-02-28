const productos = [
    {
        id:"1",
        nombreAlbum:"Blonde CD",
        artista:"Frank Ocean",
        year:2016,
        genero:"R&B",
        categoria:"cd",
        precio:20000,
        descripcion:"'Blonde' de Frank Ocean es un viaje emocional que te sumerge en un océano de introspección y melancolía. Con una combinación única de R&B, soul y elementos experimentales, el álbum te envuelve en capas de sonidos etéreos y letras profundas. Desde la suavidad envolvente de 'Self Control' hasta la intensidad cruda de 'Nights', cada canción es una exploración de la vulnerabilidad y la autenticidad. Con su voz distintiva y su habilidad para capturar la complejidad de la experiencia humana, Frank Ocean crea un álbum atemporal que deja una marca indeleble en quien lo escucha.",
        stock:5,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1707437543/dley0er1voeqj4nrsna9.jpg",
        oferta:1,
    },
    {
        id:"2",
        nombreAlbum:"Madvillainy CD",
        artista:"Madvillain (MF DOOM + Madlib)",
        year:2002,
        genero:"Hip Hop",
        categoria:"cd",
        precio:25000,
        descripcion:"'Madvillainy' de Madvillain es una obra maestra del hip-hop underground que desafía las convenciones del género. Con la colaboración entre el productor Madlib y el rapero MF DOOM, el álbum es una amalgama de samples eclécticos, ritmos desafiantes y letras ingeniosas. Desde la complejidad lírica de 'Accordion' hasta la atmósfera oscura de 'All Caps', cada pista es una aventura auditiva que lleva al oyente a un mundo surrealista y lleno de referencias culturales. Con su enfoque único y su estilo inconfundible, Madvillain redefine los límites del rap y crea un clásico instantáneo que sigue resonando en la cultura musical.",
        stock:10,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1707786119/soorhflbez0u67sfzwrv.jpg",
        oferta:1,
    },
    {
        id:"3",
        nombreAlbum:"Ctrl CD",
        artista:"SZA",
        year:2017,
        genero:"R&B",
        categoria:"cd",
        precio:15000,
        descripcion:"'Ctrl' de SZA es un testimonio íntimo y poderoso sobre el viaje hacia la autenticidad y el autoempoderamiento. Con una mezcla de R&B alternativo y neo-soul, el álbum explora temas de amor, autodescubrimiento y aceptación personal. Desde la sensualidad de 'Love Galore' hasta la vulnerabilidad de '20 Something', cada canción es un reflejo sincero de las experiencias de SZA como mujer y artista. Con su voz seductora y letras francas, SZA te sumerge en un viaje emocional que te deja reflexionando sobre la complejidad de la vida y las relaciones humanas. 'Ctrl' no solo es un álbum, es un manifiesto de empoderamiento femenino y una celebración de la individualidad.",
        stock:7,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1707786138/oatke1kdjrmzdkf5xuc5.jpg",
        oferta:1,
    },
    {
        id:"4",
        nombreAlbum:"Abbey Road CD",
        artista:"The Beatles",
        year:1969,
        genero:"Rock",
        categoria:"cd",
        precio:20000,
        descripcion:"'Abbey Road' de The Beatles es una obra maestra del rock que encarna la esencia de la banda en su apogeo creativo. Con canciones icónicas como 'Come Together' y 'Here Comes the Sun', el álbum demuestra la genialidad musical y la innovación de la banda. La fluidez de la suite de 'Abbey Road Medley' es un testimonio de la capacidad de The Beatles para experimentar con estructuras musicales. Cada pista es una pieza del rompecabezas que culmina en una experiencia auditiva inolvidable. Este álbum sigue siendo una influencia perdurable en la música popular, resonando con oyentes de todas las generaciones.",
        stock:8,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1707786405/v8zkiewdgaqu4il2disn.png",
        oferta:1,
    },
    {
        id:"5",
        nombreAlbum:"Grace CD",
        artista:"Jeff Buckley",
        year:1994,
        genero:"Rock",
        categoria:"cd",
        precio:30000,
        descripcion:"'Grace' de Jeff Buckley es un viaje emocional que cautiva con su intensidad y vulnerabilidad. Con canciones como 'Hallelujah' y 'Last Goodbye', el álbum revela la voz única y la sensibilidad artística de Buckley. Cada nota es una expresión de pasión y angustia, creando una experiencia auditiva profundamente conmovedora. La fusión de géneros como el rock, el folk y el soul enriquece la textura musical del álbum. 'Grace' perdura como un legado musical eterno que continúa inspirando y conmoviendo a los oyentes.",
        stock:10,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1707786726/nh9k6mjslln0uqy2imu6.jpg",
        oferta:1,
    },
    {
        id:"6",
        nombreAlbum:"To See the Next Part of the Dream Vinyl",
        artista:"Parannoul",
        year:2021,
        genero:"Shoegaze",
        categoria:"vinyl",
        precio:45000,
        descripcion:"To See the Next Part of the Dream es el segundo álbum de estudio del músico surcoreano Parannoul. Se publicó de forma independiente el 23 de febrero de 2021.El 23 de febrero de 2022, con motivo del primer aniversario del álbum, se publicó un extended play titulado White Ceiling / Black Dots Wandering Around, compuesto por caras B no incluidas en el álbum inicial.2",
        stock:3,
        productImg:"http://res.cloudinary.com/dor1wv6m1/image/upload/v1709004554/vgnki26xssenhzoe1kuw.jpg",
        oferta:1,
    },
    {
        id:"7",
        nombreAlbum:"A Love Supreme",
        artista:"John Coltrane",
        year:1965,
        genero:"Modal Jazz",
        categoria:"vinyl",
        precio:39000,
        descripcion:"'A Love Supreme' de John Coltrane es un testimonio sagrado del poder transformador del jazz. Con cada nota, Coltrane guía al oyente a través de un viaje espiritual profundo y emotivo. La interacción entre los músicos es hipnótica, creando una experiencia sonora trascendental. Cada movimiento de la suite es una expresión de devoción y búsqueda de la verdad interior. Este álbum representa un momento de iluminación musical que continúa inspirando y elevando a quienes lo escuchan.",
        stock:4,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1709005102/wchusoh8r3mwwqqs0ivo.jpg",
        oferta:1,
    },
    {
        id:"8",
        nombreAlbum:"What's Going On",
        artista:"Marvin Gaye",
        year:1971,
        genero:"Soul",
        categoria:"vinyl",
        precio:33000,
        descripcion:"'What's Going On' de Marvin Gaye es un viaje emocional que aborda las preocupaciones sociales y políticas de su tiempo con una profundidad conmovedora. Cada canción es una reflexión apasionada sobre la injusticia, la guerra y la búsqueda de la paz. Gaye combina hábilmente elementos de soul, R&B y jazz para crear un sonido único y atemporal. Las letras son poéticas y provocativas, transmitiendo un mensaje de esperanza y unidad en medio del caos. Este álbum sigue siendo relevante hoy en día, recordándonos la importancia de la empatía y la compasión en un mundo turbulento.",
        stock:10,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1709005667/qpg0r9x7vyhyizabgt9k.jpg",
        oferta:1,
    },
    {
        id:"9",
        nombreAlbum:"Enter the Wu-Tang (36 Chambers)",
        artista:"Wu-Tang Clan",
        year:1993,
        genero:"Hip Hop",
        categoria:"vinyl",
        precio:50000,
        descripcion:"'Enter the Wu-Tang (36 Chambers)' de Wu-Tang Clan es un clásico del hip-hop que trasciende el tiempo. Cada pista es una explosión de energía cruda y lírica ingeniosa. La diversidad de estilos y personalidades en el grupo crea una experiencia auditiva única. Desde la ferocidad de 'Bring da Ruckus' hasta la melancolía de 'C.R.E.A.M.', el álbum captura la esencia del rap de los años 90. Con su influencia perdurable, sigue siendo un pilar en la cultura del hip-hop.",
        stock:2,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1709005859/chxdxcynkxkeyqg1xw63.jpg",
        oferta:1,
    },
    {
        id:"10",
        nombreAlbum:"Polera Young Thug Pink Hair",
        artista:"Young Thug",
        year:2023,
        genero:"Polera",
        categoria:"merch",
        precio:15000,
        descripcion:"'Young Thug', cuyo nombre real es Jeffery Lamar Williams, es un rapero, cantante y compositor estadounidense nacido el 16 de agosto de 1991 en Atlanta, Georgia. Surgió en la escena musical a principios de la década de 2010 y se destacó por su estilo único y vanguardista que desafía las convenciones del rap tradicional. Con una mezcla ecléctica de melodías, flujo innovador y letras creativas, Young Thug ha dejado una marca indeleble en el género.",
        stock:15,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1709006189/vvt84kxcvfgs2hhiwfva.jpg",
        oferta:1,
    },
    {
        id:"11",
        nombreAlbum:"Polera Bill Evans",
        artista:"Bill Evans",
        year:2024,
        genero:"Polera",
        categoria:"merch",
        precio:20000,
        descripcion:"'Bill Evans', cuyo nombre completo es William John Evans, fue un influyente pianista de jazz nacido el 16 de agosto de 1929 en Plainfield, Nueva Jersey. Reconocido por su enfoque innovador y su sensibilidad lírica, Evans dejó una marca indeleble en la música jazz. A lo largo de su carrera, colaboró con figuras legendarias como Miles Davis y lideró varios tríos de piano aclamados por la crítica. Su estilo distintivo, caracterizado por su técnica refinada y su capacidad para improvisar, lo estableció como una figura central en el desarrollo del jazz modal y post-bop. A pesar de su vida truncada prematuramente en 1980, su legado perdura como uno de los pianistas más influyentes en la historia del jazz.",
        stock:5,
        productImg:"https://res.cloudinary.com/dor1wv6m1/image/upload/v1709006435/u4iqehzvwxykcxqf0al8.jpg",
        oferta:1,
    },
];

export const getProducts =  () => {
    return new Promise((res,rej) => {
        if(productos.length > 0){
            setTimeout(() => {
                res(productos);
            },0);
        } else {
            rej("No hay productos");
        }
    });
};

export const getProduct = (id) => {
    return new Promise( (res,rej) => {
        if(productos.length > 0){
            
            const producto = productos.find(producto => producto.id === id);

            if(producto){
                setTimeout(() => {
                    res(producto);
                }, 0);
            } else {
                rej("El producto que buscas no existe")
            }
        } else {
            rej("No hay productos");
        }
    } )
}
