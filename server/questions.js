const triviaQuestions = [
    {
        text: '¿Cuál es el océano más grande del mundo?',
        options: [
            'Océano Pacífico',
            'Océano Atlántico',
            'Océano Índico',
            'Océano Ártico',
        ],
        correctAnswer: 'Océano Pacífico',
    },
    {
        text: "¿Quién escribió 'Cien años de soledad'?",
        options: [
            'Gabriel García Márquez',
            'Mario Vargas Llosa',
            'Jorge Luis Borges',
            'Isabel Allende',
        ],
        correctAnswer: 'Gabriel García Márquez',
    },
    {
        text: '¿Cuál es el río que cruza la ciudad de Nueva York?',
        options: ['Río Hudson', 'Río Misisipi', 'Río Danubio', 'Río Rin'],
        correctAnswer: 'Río Hudson',
    },
    {
        text: '¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?',
        options: ['1945', '1939', '1955', '1941'],
        correctAnswer: '1945',
    },
    {
        text: '¿Quién fue el primer ser humano en viajar al espacio?',
        options: [
            'Yuri Gagarin',
            'Neil Armstrong',
            'Buzz Aldrin',
            'Alan Shepard',
        ],
        correctAnswer: 'Yuri Gagarin',
    },
    {
        text: '¿En qué año se celebró la primera Copa del Mundo de la FIFA?',
        options: ['1930', '1950', '1928', '1934'],
        correctAnswer: '1930',
    },
    {
        text: '¿Cuál es el río que atraviesa la ciudad de Roma?',
        options: ['Río Tíber', 'Río Nilo', 'Río Danubio', 'Río Sena'],
        correctAnswer: 'Río Tíber',
    },
    {
        text: '¿En qué continente se encuentra Egipto?',
        options: ['África', 'Asia', 'Europa', 'América'],
        correctAnswer: 'África',
    },
    {
        text: '¿Cuál es el gas más abundante en la atmósfera de la Tierra?',
        options: ['Nitrógeno', 'Oxígeno', 'Dióxido de carbono', 'Hidrógeno'],
        correctAnswer: 'Nitrógeno',
    },
    {
        text: "¿Quién escribió 'Romeo y Julieta'?",
        options: [
            'William Shakespeare',
            'Jane Austen',
            'Charles Dickens',
            'Mark Twain',
        ],
        correctAnswer: 'William Shakespeare',
    },
    {
        text: '¿En qué año se proclamó la independencia de Estados Unidos?',
        options: ['1776', '1492', '1867', '1812'],
        correctAnswer: '1776',
    },
    {
        text: '¿Cuál es el planeta más grande del sistema solar?',
        options: ['Júpiter', 'Saturno', 'Marte', 'Venus'],
        correctAnswer: 'Júpiter',
    },
    {
        text: '¿Cuál es el país más poblado del mundo?',
        options: ['China', 'India', 'Estados Unidos', 'Indonesia'],
        correctAnswer: 'China',
    },
    {
        text: '¿En qué año se fundó la Unión Europea (UE)?',
        options: ['1957', '1945', '1965', '1973'],
        correctAnswer: '1957',
    },
    {
        text: '¿Cuál es el quinto planeta del sistema solar?',
        options: ['Júpiter', 'Saturno', 'Urano', 'Neptuno'],
        correctAnswer: 'Júpiter',
    },
    {
        text: '¿En qué país se encuentra la Gran Muralla China?',
        options: ['China', 'Japón', 'India', 'Corea del Sur'],
        correctAnswer: 'China',
    },
    {
        text: '¿Cuál es el monte más alto de África?',
        options: [
            'Monte Kilimanjaro',
            'Monte Everest',
            'Monte Elbrús',
            'Monte Aconcagua',
        ],
        correctAnswer: 'Monte Kilimanjaro',
    },
    {
        text: '¿En qué país se encuentra la estatua del Cristo Redentor?',
        options: ['Brasil', 'Argentina', 'México', 'Chile'],
        correctAnswer: 'Brasil',
    },
    {
        text: '¿Cuál es el océano más frío del mundo?',
        options: [
            'Océano Ártico',
            'Océano Antártico',
            'Océano Pacífico',
            'Océano Atlántico',
        ],
        correctAnswer: 'Océano Antártico',
    },
    {
        text: '¿En qué continente se encuentra la selva del Amazonas?',
        options: ['América del Sur', 'África', 'Asia', 'Oceanía'],
        correctAnswer: 'América del Sur',
    },
    {
        text: '¿Quién fue el primer presidente de Sudáfrica después del apartheid?',
        options: [
            'Nelson Mandela',
            'F.W. de Klerk',
            'Desmond Tutu',
            'Thabo Mbeki',
        ],
        correctAnswer: 'Nelson Mandela',
    },
    {
        text: '¿Cuál es el río que cruza la ciudad de París?',
        options: ['Río Sena', 'Río Támesis', 'Río Rin', 'Río Danubio'],
        correctAnswer: 'Río Sena',
    },
    {
        text: '¿En qué país se encuentra la Gran Pirámide de Giza?',
        options: ['Egipto', 'Sudán', 'Irak', 'México'],
        correctAnswer: 'Egipto',
    },
    {
        text: '¿Cuál es el país más extenso de América Latina?',
        options: ['Brasil', 'Argentina', 'México', 'Chile'],
        correctAnswer: 'Brasil',
    },
    {
        text: '¿Cuál es el río más largo de América del Sur?',
        options: ['Río Amazonas', 'Río Paraná', 'Río Orinoco', 'Río Magdalena'],
        correctAnswer: 'Río Amazonas',
    },
    {
        text: '¿En qué continente se encuentra la Gran Muralla China?',
        options: ['Asia', 'Europa', 'África', 'Oceanía'],
        correctAnswer: 'Asia',
    },
    {
        text: '¿Cuál es la moneda oficial de Japón?',
        options: ['Yen', 'Dólar', 'Euro', 'Libra esterlina'],
        correctAnswer: 'Yen',
    },
    {
        text: '¿Cuál es la flor emblemática de México?',
        options: ['Dalia', 'Rosa', 'Tulipán', 'Cempasúchil'],
        correctAnswer: 'Cempasúchil',
    },
    {
        text: '¿En qué año se inauguró el Canal de Panamá?',
        options: ['1914', '1900', '1930', '1920'],
        correctAnswer: '1914',
    },
    {
        text: "¿Cuál es el país conocido como 'La Tierra de Fuego'?",
        options: ['Argentina', 'Chile', 'Canadá', 'Australia'],
        correctAnswer: 'Argentina',
    },
    {
        text: '¿Cuál es la isla más grande del mundo?',
        options: ['Groenlandia', 'Australia', 'Madagascar', 'Borneo'],
        correctAnswer: 'Groenlandia',
    },
    {
        text: '¿En qué año se fundó la ciudad de Roma?',
        options: ['753 a.C.', '69 d.C.', '1492', '1066'],
        correctAnswer: '753 a.C.',
    },
    {
        text: "¿Cuál es el país conocido como 'La Cuna de la Civilización Occidental'?",
        options: ['Grecia', 'Italia', 'Egipto', 'Turquía'],
        correctAnswer: 'Grecia',
    },
    {
        text: '¿Quién fue el primer astronauta en caminar sobre la Luna?',
        options: [
            'Neil Armstrong',
            'Buzz Aldrin',
            'Yuri Gagarin',
            'Alan Shepard',
        ],
        correctAnswer: 'Neil Armstrong',
    },
    {
        text: '¿Cuál es el país más pequeño del mundo en términos de superficie?',
        options: [
            'Ciudad del Vaticano',
            'Mónaco',
            'San Marino',
            'Liechtenstein',
        ],
        correctAnswer: 'Ciudad del Vaticano',
    },
    {
        text: '¿En qué año se celebró la primera edición del Torneo de Wimbledon?',
        options: ['1877', '1900', '1928', '1934'],
        correctAnswer: '1877',
    },
    {
        text: '¿Cuál es el continente más seco del mundo?',
        options: ['Antártida', 'África', 'Oceanía', 'Asia'],
        correctAnswer: 'Antártida',
    },
    {
        text: "¿Quién escribió 'La Odisea'?",
        options: ['Homero', 'Sófocles', 'Aristóteles', 'Eurípides'],
        correctAnswer: 'Homero',
    },
    {
        text: "¿Cuál es el país conocido como 'El País de los Mil Lagos'?",
        options: ['Finlandia', 'Noruega', 'Suecia', 'Canadá'],
        correctAnswer: 'Finlandia',
    },
    {
        text: '¿Cuál es el deporte más popular en Brasil?',
        options: ['Fútbol', 'Voleibol', 'Tenis', 'Baloncesto'],
        correctAnswer: 'Fútbol',
    },
    {
        text: '¿En qué año se fundó la ciudad de Nueva York?',
        options: ['1624', '1701', '1789', '1812'],
        correctAnswer: '1624',
    },
    {
        text: "¿Cuál es el país conocido como 'La Tierra del Sol Naciente'?",
        options: ['Japón', 'México', 'España', 'Australia'],
        correctAnswer: 'Japón',
    },
    {
        text: '¿Cuál es la moneda oficial de Canadá?',
        options: ['Dólar canadiense', 'Euro', 'Libra esterlina', 'Yen'],
        correctAnswer: 'Dólar canadiense',
    },
    {
        text: '¿En qué año se proclamó la independencia de México?',
        options: ['1810', '1821', '1854', '1900'],
        correctAnswer: '1821',
    },
    {
        text: '¿Cuál es el océano más profundo del mundo?',
        options: [
            'Océano Pacífico',
            'Océano Atlántico',
            'Océano Índico',
            'Océano Ártico',
        ],
        correctAnswer: 'Océano Pacífico',
    },
    {
        text: '¿Cuál es la isla más grande del Caribe?',
        options: ['Cuba', 'Jamaica', 'República Dominicana', 'Puerto Rico'],
        correctAnswer: 'Cuba',
    },
    {
        text: '¿En qué año se fundó la ciudad de Washington, D.C.?',
        options: ['1790', '1801', '1825', '1850'],
        correctAnswer: '1790',
    },
    {
        text: '¿Cuál es la montaña más alta de Norteamérica?',
        options: [
            'Monte McKinley',
            'Monte Everest',
            'Monte Kilimanjaro',
            'Monte Fuji',
        ],
        correctAnswer: 'Monte McKinley',
    },
    {
        text: '¿Quién fue el primer presidente de Estados Unidos?',
        options: [
            'George Washington',
            'Thomas Jefferson',
            'Benjamin Franklin',
            'John Adams',
        ],
        correctAnswer: 'George Washington',
    },
    {
        text: '¿Cuál es el río que cruza la ciudad de Buenos Aires?',
        options: [
            'Río Paraná',
            'Río de la Plata',
            'Río Uruguay',
            'Río Amazonas',
        ],
        correctAnswer: 'Río de la Plata',
    },
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);

    return triviaQuestions[randomIndex];
}

module.exports = getRandomQuestion;
