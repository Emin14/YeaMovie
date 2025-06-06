import shawshank from '../../../public/shawshank.png'

export const categories = [{title:'Популярные фильмы', filters: {type: 'фильм'}}, {title:'Популярные сериалы', filters: {type: 'сериал'}}, {title:'Подборка фильмов', filters: {rating: 9}}]

export const movies = [
   {
   id: '1',
   title: 'Побег из Шоушенка',
   img: shawshank, 
   description: 'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.', 
   release: 1994, 
   rating: 9,
   category: ['Драма', 'Криминал'],
   director: 'Фрэнк Дарабонт',
   starring: ['Тим Роббинс', 'Морган Фриман', 'Боб Гантон', 'Уильям Сэдлер', 'Клэнси Браун', 'Гил Беллоуз', 'Марк Ролстон', 'Джеймс Уитмор','Джеффри ДеМанн', 'Ларри Бранденбург'],
   country: ['CША'],
   age: 16,
   type: 'фильм'
   },
  {
    id: '2',
    title: 'Крёстный отец',
   //  img: godfather,
    img: shawshank, 
    description: 'История семьи Корлеоне, итальянской мафиозной династии в Нью-Йорке. После покушения на дона Вито Корлеоне его сын Майкл, изначально далекий от криминального мира, вынужден взять на себя управление семейным бизнесом, погружаясь в мир власти, предательства и мести.',
    release: 1972,
    rating: 9.2,
    category: ['Драма', 'Криминал'],
    director: 'Фрэнсис Форд Коппола',
    starring: ['Марлон Брандо', 'Аль Пачино', 'Джеймс Каан', 'Ричард С. Кастеллано', 'Роберт Дювалл', 'Стерлинг Хейден', 'Джон Марли', 'Ричард Конте', 'Дайан Китон', 'Талия Шайр'],
    country: ['США'],
    age: 16,
    type: 'фильм'
  },
  {
    id: '3',
    title: 'Криминальное чтиво',
   //  img: pulp_fiction,
    img: shawshank, 
    description: 'Несколько переплетающихся историй о криминальном мире Лос-Анджелеса. Наемные убийцы, боксер, гангстер и его жена, а также пара грабителей переживают череду неожиданных событий, полных черного юмора и насилия.',
    release: 1994,
    rating: 8.9,
    category: ['Криминал', 'Драма'],
    director: 'Квентин Тарантино',
    starring: ['Джон Траволта', 'Сэмюэл Л. Джексон', 'Ума Турман', 'Брюс Уиллис', 'Винг Реймс', 'Харви Кейтель', 'Тим Рот', 'Аманда Пламмер', 'Мария де Медейруш', 'Эрик Штольц'],
    country: ['США'],
    age: 18,
    type: 'сериал'
  },
  {
    id: '4',
    title: 'Начало',
   //  img: inception,
      img: shawshank, 
    description: 'Профессиональный вор Доминик Кобб специализируется на краже секретов из подсознания людей через их сны. Ему предлагают сложное задание — внедрить идею в разум человека, но для этого придется погрузиться в глубины сновидений, где реальность и иллюзия сливаются.',
    release: 2010,
    rating: 8.8,
    category: ['Научная фантастика', 'Триллер'],
    director: 'Кристофер Нолан',
    starring: ['Леонардо ДиКаприо', 'Джозеф Гордон-Левитт', 'Эллен Пейдж', 'Том Харди', 'Кен Ватанабе', 'Дилип Рао', 'Киллиан Мёрфи', 'Том Беренджер', 'Марион Котийяр', 'Пит Постлетуэйт'],
    country: ['США'],
    age: 12,
    type: 'сериал'
  },
  {
    id: '5',
    title: 'Форрест Гамп',
   //  img: forrest_gump,
      img: shawshank, 
    description: 'История жизни Форреста Гампа, человека с ограниченными умственными способностями, но невероятной добротой и удачей. Он становится свидетелем и участником ключевых событий американской истории второй половины XX века, оставаясь верным своим принципам.',
    release: 1994,
    rating: 8.8,
    category: ['Драма', 'Мелодрама'],
    director: 'Роберт Земекис',
    starring: ['Том Хэнкс', 'Робин Райт', 'Гэри Синиз', 'Майкелти Уильямсон', 'Салли Филд', 'Ребекка Уильямс', 'Майкл Коннер Хамфрис', 'Харольд Г. Хертум', 'Хейли Джоэл Осмент', 'Джордж Келли'],
    country: ['США'],
    age: 12,
    type: 'фильм'
  },
  {
    id: '6',
    title: 'Матрица',
   //  img: matrix,
      img: shawshank, 
    description: 'Программист Томас Андерсон, известный как хакер Нео, узнает, что мир вокруг — это симуляция, созданная машинами. Вместе с таинственным Морфеусом и Тринити он вступает в борьбу за освобождение человечества от иллюзии.',
    release: 1999,
    rating: 8.7,
    category: ['Научная фантастика', 'Боевик'],
    director: 'Лана и Лилли Вачовски',
    starring: ['Киану Ривз', 'Лоуренс Фишбёрн', 'Кэрри-Энн Мосс', 'Хьюго Уивинг', 'Джо Пантолиано', 'Маркус Чонг', 'Энтони Рэй Паркер', 'Джулиан Араханга', 'Мэтт Доран', 'Белинда МакКлори'],
    country: ['США'],
    age: 16,
    type: 'фильм'
  },
  {
    id: '7',
    title: 'Бойцовский клуб',
   //  img: fight_club,
      img: shawshank, 
    description: 'Обычный офисный работник, страдающий от бессонницы и пустоты жизни, встречает загадочного Тайлера Дёрдена. Вместе они создают подпольный клуб, где мужчины сражаются, чтобы выплеснуть свои эмоции, но вскоре их деятельность выходит за рамки простых драк.',
    release: 1999,
    rating: 8.8,
    category: ['Драма', 'Триллер'],
    director: 'Дэвид Финчер',
    starring: ['Брэд Питт', 'Эдвард Нортон', 'Хелена Бонем Картер', 'Мит Лоаф', 'Джаред Лето', 'Зак Гренье', 'Холт МакКэллани', 'Эйон Бэйли', 'Ричмонд Аркетт', 'Дэвид Эндрюс'],
    country: ['США'],
    age: 18,
    type: 'сериал'
  },
  {
    id: '8',
    title: 'Тёмный рыцарь',
   //  img: dark_knight,
      img: shawshank, 
    description: 'Бэтмен сталкивается с новым врагом — Джокером, психопатом, который сеет хаос в Готэме. Чтобы остановить его, Брюс Уэйн должен переступить моральные границы и рисковать всем, что ему дорого.',
    release: 2008,
    rating: 9.1,
    category: ['Боевик', 'Криминал', 'Драма'],
    director: 'Кристофер Нолан',
    starring: ['Кристиан Бэйл', 'Хит Леджер', 'Аарон Экхарт', 'Майкл Кейн', 'Мэгги Джилленхол', 'Гэри Олдман', 'Морган Фриман', 'Моник Габриэла Курнен', 'Рон Дин', 'Киллиан Мёрфи'],
    country: ['США'],
    age: 16,
    type: 'фильм'
  },
  {
    id: '9',
    title: 'Назад в будущее',
   //  img: back_to_the_future,
      img: shawshank, 
    description: 'Подросток Марти МакФлай случайно отправляется в 1955 год на машине времени, созданной его другом, эксцентричным ученым Доком Брауном. Чтобы вернуться в свое время, Марти должен исправить прошлое, не разрушив собственное будущее.',
    release: 1985,
    rating: 8.5,
    category: ['Научная фантастика', 'Комедия', 'Приключения'],
    director: 'Роберт Земекис',
    starring: ['Майкл Дж. Фокс', 'Кристофер Ллойд', 'Лиа Томпсон', 'Криспин Гловер', 'Томас Ф. Уилсон', 'Клаудия Уэллс', 'Марк МакКлюр', 'Уэнди Джо Спербер', 'Джордж ДиЧенцо', 'Фрэнсис Ли МакКейн'],
    country: ['США'],
    age: 12,
    type: 'фильм'
  },
  {
    id: '10',
    title: 'Список Шиндлера',
   //  img: schindlers_list,
      img: shawshank, 
    description: 'История Оскара Шиндлера, немецкого бизнесмена, который во время Второй мировой войны спас более тысячи евреев, нанимая их на свои фабрики. Фильм показывает ужасы Холокоста и силу человеческого сострадания.',
    release: 1993,
    rating: 9.0,
    category: ['Драма', 'Исторический'],
    director: 'Стивен Спилберг',
    starring: ['Лиам Нисон', 'Бен Кингсли', 'Рэйф Файнс', 'Кэролайн Гудолл', 'Джонатан Сагалл', 'Эмбет Дэвидц', 'Малгоша Гебель', 'Шмуэль Леви', 'Марк Иванер', 'Беатриче Макола'],
    country: ['США'],
    age: 16,
    type: 'фильм'
  },
  {
    id: '11',
    title: 'Гладиатор',
   //  img: gladiator,
      img: shawshank, 
    description: 'Римский генерал Максимус, преданный императором, теряет семью и становится гладиатором. Он борется на арене, чтобы отомстить за свою утрату и вернуть честь, сражаясь за свободу и справедливость.',
    release: 2000,
    rating: 8.5,
    category: ['Исторический', 'Драма', 'Боевик'],
    director: 'Ридли Скотт',
    starring: ['Рассел Кроу', 'Хоакин Феникс', 'Конни Нильсен', 'Оливер Рид', 'Ричард Харрис', 'Дерек Джекоби', 'Джimon Хунсу', 'Дэвид Шофилд', 'Джон Шрапнел', 'Томас Арана'],
    country: ['США', 'Великобритания'],
    age: 16,
    type: 'сериал'
  },
  {
    id: '12',
    title: 'Титаник',
   //  img: titanic,
      img: shawshank, 
    description: 'История любви между Роуз, девушкой из высшего общества, и Джеком, бедным художником, на борту роскошного лайнера "Титаник". Их роман разворачивается на фоне трагической катастрофы, когда корабль сталкивается с айсбергом.',
    release: 1997,
    rating: 7.9,
    category: ['Драма', 'Мелодрама'],
    director: 'Джеймс Кэмерон',
    starring: ['Леонардо ДиКаприо', 'Кейт Уинслет', 'Билли Зейн', 'Кэти Бейтс', 'Фрэнсис Фишер', 'Глория Стюарт', 'Билл Пэкстон', 'Бернард Хилл', 'Дэвид Уорнер', 'Виктор Гарбер'],
    country: ['США'],
    age: 12,
    type: 'фильм'
  },
  {
    id: '13',
    title: 'Звёздные войны: Эпизод IV — Новая надежда',
   //  img: star_wars,
      img: shawshank, 
    description: 'Молодой Люк Скайуокер присоединяется к повстанцам, чтобы сразиться с Империей и ее смертоносным оружием — Звездой Смерти. Вместе с Оби-Ваном Кеноби, Ханом Соло и принцессой Леей он борется за свободу галактики.',
    release: 1977,
    rating: 8.6,
    category: ['Научная фантастика', 'Приключения'],
    director: 'Джордж Лукас',
    starring: ['Марк Хэмилл', 'Харрисон Форд', 'Кэрри Фишер', 'Питер Кушинг', 'Алек Гиннесс', 'Энтони Дэниелс', 'Кенни Бейкер', 'Питер Мейхью', 'Дэвид Проуз', 'Джеймс Эрл Джонс'],
    country: ['США'],
    age: 12,
    type: 'сериал'
  },
  {
    id: '14',
    title: 'Семь',
   //  img: se7en,
      img: shawshank, 
    description: 'Два детектива, опытный Уильям Сомерсет и молодой Дэвид Миллс, расследуют серию жутких убийств, связанных с семью смертными грехами. Преступник играет с ними в изощренную игру, заставляя столкнуться с мрачной стороной человеческой природы.',
    release: 1995,
    rating: 8.6,
    category: ['Триллер', 'Криминал', 'Детектив'],
    director: 'Дэвид Финчер',
    starring: ['Брэд Питт', 'Морган Фриман', 'Гвинет Пэлтроу', 'Кевин Спейси', 'Р. Ли Эрми', 'Эндрю Кевин Уокер', 'Дэниел Закавски', 'Джон Кассини', 'Боб Маки', 'Питер Кромби'],
    country: ['США'],
    age: 18,
    type: 'фильм'
  },
    {
    id: '15',
    title: 'Властелин колец: Братство кольца',
   //  img: lotr_fellowship,
      img: shawshank, 
    description: 'Хоббит Фродо Бэггинс получает от своего дяди загадочное кольцо, которое оказывается источником великой силы и опасности. Вместе с друзьями и союзниками он отправляется в путешествие, чтобы уничтожить его и спасти Средиземье от темного владыки Саурона.',
    release: 2001,
    rating: 8.8,
    category: ['Фэнтези', 'Приключения'],
    director: 'Питер Джексон',
    starring: ['Элайджа Вуд', 'Иэн Маккеллен', 'Вигго Мортенсен', 'Шон Эстин', 'Лив Тайлер', 'Орландо Блум', 'Джон Рис-Дэвис', 'Доминик Монаган', 'Билли Бойд', 'Кейт Бланшетт'],
    country: ['Новая Зеландия', 'США'],
    age: 12,
    type: 'сериал'
  },
]


const apiMovies = [
    {
        "id": 1402937,
        "name": "Артур, ты король",
        "alternativeName": "Arthur the King",
        "enName": null,
        "names": [
            {
                "name": "Arthur",
                "language": "MX",
                "type": null
            },
            {
                "name": "冠军亚瑟",
                "language": "CN",
                "type": null
            },
            {
                "name": "Arthur",
                "language": "ES",
                "type": null
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 2024,
        "description": "2015 год, Коста-Рика. Во время Чемпионата мира по приключенческим гонкам (ARWS) капитан одной из команд Майкл Лайт принимает неверное решение, что приводит к очередному проигрышу. Оставшись без спонсоров, Майкл возвращается в родной Колорадо и пытается начать новую жизнь. Спустя три года он осознаёт, что не может уйти из спорта без победы. Он находит спонсоров, собирает команду и отправляется в Доминиканскую Республику, где будет проходить новый чемпионат. На одном из этапов Майклу становится жалко местного пса и он решает покормить его. Опытный спортсмен и подумать не мог, что собака вскоре последует за его командой и постоянно будет рядом на протяжении всей 700-километровой гонки по пересечённой местности.",
        "shortDescription": "Во время экстремальной гонки Майкл находит друга — бездомного пса. Приключенческий фильм с Марком Уолбергом",
        "status": null,
        "rating": {
            "kp": 8.298,
            "imdb": 7,
            "filmCritics": 5.9,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 436301,
            "imdb": 34730,
            "filmCritics": 85,
            "russianFilmCritics": 2,
            "await": 0
        },
        "movieLength": 107,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "pg13",
        "ageRating": 12,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/10809116/02f5c9fa-8ed2-455b-9861-1a01252d73f4/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10809116/02f5c9fa-8ed2-455b-9861-1a01252d73f4/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000018eaa2f034fc72de007fe2ac7678d/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a0000018eaa2f034fc72de007fe2ac7678d/x1000"
        },
        "genres": [
            {
                "name": "драма"
            },
            {
                "name": "приключения"
            },
            {
                "name": "спорт"
            }
        ],
        "countries": [
            {
                "name": "США"
            },
            {
                "name": "Канада"
            }
        ],
        "top10": null,
        "top250": 168,
        "isSeries": false,
        "ticketsOnSale": false,
        "logo": {
            "url": null,
            "previewUrl": null
        }
    },
    {
        "id": 5105855,
        "name": "Одна жизнь",
        "alternativeName": "One Life",
        "enName": null,
        "names": [
            {
                "name": "Lazos De vida",
                "language": "MX",
                "type": null
            },
            {
                "name": "یک زندگی",
                "language": "IR",
                "type": null
            },
            {
                "name": "ONE LIFE 奇跡が繋いだ6000の命",
                "language": "JP",
                "type": null
            },
            {
                "name": "Los niños de Winton",
                "language": "ES",
                "type": null
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 2023,
        "description": "Скромного и непубличного джентльмена Николаса Уинтона приглашают на телевизионное ток-шоу, где он наконец-то узнает всю правду о событиях Второй мировой войны, когда он пытался спасти сотни детей от гибели в концлагере. Одна жизнь может изменить судьбы сотен людей — как в прошлом, так и в настоящем.",
        "shortDescription": "Молодой филантроп придумывает, как спасти сотни детей от концлагеря. Проникновенная драма с Энтони Хопкинсом",
        "status": null,
        "rating": {
            "kp": 8.538,
            "imdb": 7.5,
            "filmCritics": 7.3,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 232195,
            "imdb": 34594,
            "filmCritics": 146,
            "russianFilmCritics": 2,
            "await": 0
        },
        "movieLength": 109,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "pg",
        "ageRating": 18,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/9784475/4564801f-fe39-4493-b042-98038357d242/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/9784475/4564801f-fe39-4493-b042-98038357d242/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018e9a4990ede987ce5ae3b643a2f9/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/236744/2a0000018e9a4990ede987ce5ae3b643a2f9/x1000"
        },
        "genres": [
            {
                "name": "драма"
            },
            {
                "name": "биография"
            },
            {
                "name": "история"
            }
        ],
        "countries": [
            {
                "name": "Великобритания"
            },
            {
                "name": "Чехия"
            },
            {
                "name": "Австралия"
            },
            {
                "name": "США"
            }
        ],
        "top10": null,
        "top250": 71,
        "isSeries": false,
        "ticketsOnSale": false,
        "logo": {
            "url": "https://image.openmoviedb.com/tmdb-images/original/t3LmvcsV0ejbnaAzH1tRtEHjpnT.png",
            "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/t3LmvcsV0ejbnaAzH1tRtEHjpnT.png"
        }
    },
    {
        "id": 1108571,
        "name": "Приключения Реми",
        "alternativeName": "Rémi sans famille",
        "enName": null,
        "names": [
            {
                "name": "Pryhody malenkoho Remi",
                "language": "UA",
                "type": "Transliteration"
            },
            {
                "name": "Без семьи",
                "language": "RU",
                "type": null
            },
            {
                "name": "Les aventures de Rémi",
                "language": "CA",
                "type": "Français"
            },
            {
                "name": "O Pequeno Órfão",
                "language": "BR",
                "type": null
            },
            {
                "name": "Remi Sans Famille",
                "language": "US",
                "type": null
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 2018,
        "description": "Удивительное путешествие по Франции маленького Реми в компании уличного музыканта, обезьянки и цирковой собаки.  Вместе им предстоит пережить неожиданные встречи, приключения и испытания, чтобы раскрыть тайну происхождения мальчика.",
        "shortDescription": "Мальчик Реми и уличный артист Виталис бродят по Франции XIX века. Красивая авантюрная мелодрама для всей семьи",
        "status": null,
        "rating": {
            "kp": 8.343,
            "imdb": 7.1,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 121286,
            "imdb": 3255,
            "filmCritics": 0,
            "russianFilmCritics": 1,
            "await": 0
        },
        "movieLength": 105,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 18,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/1599028/3bb8ef0f-0230-4eeb-acb0-e2b44329de37/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1599028/3bb8ef0f-0230-4eeb-acb0-e2b44329de37/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000016d1fad5a7fa59ff75917c900760d/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000016d1fad5a7fa59ff75917c900760d/x1000"
        },
        "genres": [
            {
                "name": "мелодрама"
            },
            {
                "name": "приключения"
            },
            {
                "name": "семейный"
            }
        ],
        "countries": [
            {
                "name": "Франция"
            },
            {
                "name": "Бельгия"
            }
        ],
        "top10": null,
        "top250": 169,
        "isSeries": false,
        "ticketsOnSale": false,
        "logo": {
            "url": "https://image.openmoviedb.com/tmdb-images/original/3c7ZGOK8sexPCziS8cWom7ACF6T.png",
            "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/3c7ZGOK8sexPCziS8cWom7ACF6T.png"
        }
    },
    {
        "id": 40955,
        "name": "Приходи на меня посмотреть",
        "alternativeName": null,
        "enName": null,
        "names": [
            {
                "name": "Приходи на меня посмотреть",
                "language": "RU",
                "type": "Russian title on kinopoisk"
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 2000,
        "description": "Софья Ивановна давно не встаёт со своего кресла. А её дочь Татьяна, похоже, смирилась с положением старой девы. Вся её жизнь — это заботы о больной матери. В один из предновогодних вечеров Софья Ивановна почувствовала, что скоро умрёт, но неожиданно в дверь квартиры постучался незнакомый мужчина с цветами и бутылкой шампанского.",
        "shortDescription": "Незнакомец разрушает планы Татьяны на одинокую старость. Единственная режиссерская работа Олега Янковского",
        "status": null,
        "rating": {
            "kp": 8.175,
            "imdb": 7.2,
            "filmCritics": 0,
            "russianFilmCritics": 100,
            "await": null
        },
        "votes": {
            "kp": 107129,
            "imdb": 819,
            "filmCritics": 0,
            "russianFilmCritics": 3,
            "await": 0
        },
        "movieLength": 101,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 0,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/cdca2aed-0966-464a-b82d-b44f5603be51/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/cdca2aed-0966-464a-b82d-b44f5603be51/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a00000163dc3caadbc899c032d4a05a7f90/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a00000163dc3caadbc899c032d4a05a7f90/x1000"
        },
        "genres": [
            {
                "name": "мелодрама"
            },
            {
                "name": "комедия"
            }
        ],
        "countries": [
            {
                "name": "Россия"
            }
        ],
        "top10": null,
        "top250": 133,
        "isSeries": false,
        "ticketsOnSale": false
    },
    {
        "id": 7466,
        "name": "Бронкская история",
        "alternativeName": "A Bronx Tale",
        "enName": null,
        "names": [
            {
                "name": "不一样的童年",
                "language": "CN",
                "type": null
            },
            {
                "name": "In den Straßen der Bronx",
                "language": "AT",
                "type": null
            },
            {
                "name": "I skuggan av Bronx",
                "language": "SE",
                "type": null
            },
            {
                "name": "Un cuento en el Bronx",
                "language": "ES",
                "type": null
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 1993,
        "description": "Король бронкской мафии Сонни убил человека. Просто так. Из-за места на парковке. Среди бела дня вытащил пистолет и несколько раз выстрелил. Полиция узнала, что свидетелем преступления был 9-летний Калоджеро, и допросила мальчика. Но Калоджеро не выдал Сонни. Так началась их дружба. И когда Калоджеро вырос, он не просто стал свидетелем других кровавых деяний своего босса, но и сам оказался на краю пропасти.",
        "shortDescription": "Юный свидетель убийства не выдает преступника. Режиссерский дебют Роберта де Ниро о взрослении на злых улицах",
        "status": null,
        "rating": {
            "kp": 8.073,
            "imdb": 7.8,
            "filmCritics": 7.5,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 114115,
            "imdb": 172508,
            "filmCritics": 36,
            "russianFilmCritics": 0,
            "await": 0
        },
        "movieLength": 121,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": 18,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/4483445/a97b1c64-8726-4ec8-be0e-87a12ef717b8/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4483445/a97b1c64-8726-4ec8-be0e-87a12ef717b8/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016c20737facd44a56f7b55e93e3ca/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/239697/2a0000016c20737facd44a56f7b55e93e3ca/x1000"
        },
        "genres": [
            {
                "name": "драма"
            },
            {
                "name": "криминал"
            }
        ],
        "countries": [
            {
                "name": "США"
            }
        ],
        "top10": null,
        "top250": 178,
        "isSeries": false,
        "ticketsOnSale": false,
        "logo": {
            "url": "https://image.openmoviedb.com/tmdb-images/original/hJeNwjzIRq5YY7fQb6ZwpBoA3FU.png",
            "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/hJeNwjzIRq5YY7fQb6ZwpBoA3FU.png"
        }
    },
    {
        "id": 368936,
        "name": "Приключения Шерлока Холмса и доктора Ватсона: Король шантажа",
        "alternativeName": null,
        "enName": null,
        "names": [
            {
                "name": "The Adventures of Sherlock Holmes and Dr. Watson: King of Blackmailers",
                "language": "US",
                "type": null
            },
            {
                "name": "Шерлок Холмс и Доктор Ватсон: Король Шантажа",
                "language": "RU",
                "type": null
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 1980,
        "description": "К Шерлоку Холмсу за помощью обращается некая леди Брекуэлл, одна из жертв известного лондонского шантажиста по имени Чарльз Огестос Милвертон. Если великий сыщик не остановит циничного негодяя, семейное благополучие молодой леди окажется под угрозой. Шерлок Холмс и доктор Ватсон как истинные джентельмены не могут отказать в помощи беззащитной женщине.",
        "shortDescription": "Вторая часть телесериала по мотивам рассказов Артура Конан Дойля о Шерлоке Холмсе",
        "status": null,
        "rating": {
            "kp": 8.395,
            "imdb": 8.3,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 114598,
            "imdb": 2316,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": 0
        },
        "movieLength": 63,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 12,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/1600647/2d95eac5-dd8d-44bb-953b-f2e98b790e5b/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1600647/2d95eac5-dd8d-44bb-953b-f2e98b790e5b/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001632b7b8497cdfe1c1247688b9b89/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001632b7b8497cdfe1c1247688b9b89/x1000"
        },
        "genres": [
            {
                "name": "криминал"
            },
            {
                "name": "детектив"
            }
        ],
        "countries": [
            {
                "name": "СССР"
            }
        ],
        "top10": null,
        "top250": 125,
        "isSeries": false,
        "ticketsOnSale": false,
        "logo": {
            "url": null,
            "previewUrl": null
        }
    },
    {
        "id": 463694,
        "name": "Землетрясение",
        "alternativeName": "Tangshan da dizhen",
        "enName": null,
        "names": [
            {
                "name": "Separados pelo Destino",
                "language": "BR",
                "type": null
            },
            {
                "name": "Tremblement de terre à Tangshan",
                "language": "FR",
                "type": null
            },
            {
                "name": "Tangshan dadizhen",
                "language": "CN",
                "type": null
            },
            {
                "name": "Tang shan da di zhen",
                "language": "CN",
                "type": null
            },
            {
                "name": "Μετά το σοκ",
                "language": "GR",
                "type": null
            },
            {
                "name": "Aftershock",
                "language": "GB",
                "type": "World-wide English Title"
            },
            {
                "name": "Aftershock",
                "language": "PT",
                "type": null
            },
            {
                "name": "Aftershock 2010",
                "language": "GB",
                "type": null
            },
            {
                "name": "とうざんだいじしん",
                "language": "JP",
                "type": null
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 2010,
        "description": "28 июля 1976 года в Таншане провинции Хэбэй произошло землетрясение, которое длилось меньше чем полминуты, но унесло несколько сотен тысяч жизней. Эти секунды поставили мать перед ужасным выбором — спасти сына или дочь, что обернулось грузом вины на десятилетия.",
        "shortDescription": "В момент природной катастрофы матери приходится делать тяжелый выбор. Драма Фэн Сяогана по реальным событиям",
        "status": null,
        "rating": {
            "kp": 8.037,
            "imdb": 7.5,
            "filmCritics": 6.3,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 149701,
            "imdb": 10039,
            "filmCritics": 11,
            "russianFilmCritics": 0,
            "await": 0
        },
        "movieLength": 139,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 18,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/4774061/42571afc-b3f9-4f95-915d-00acd154e6b4/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4774061/42571afc-b3f9-4f95-915d-00acd154e6b4/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000184613341904276d0e7aec9ead403/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000184613341904276d0e7aec9ead403/x1000"
        },
        "genres": [
            {
                "name": "драма"
            },
            {
                "name": "история"
            }
        ],
        "countries": [
            {
                "name": "Китай"
            },
            {
                "name": "Гонконг"
            }
        ],
        "top10": null,
        "top250": 230,
        "isSeries": false,
        "ticketsOnSale": false,
        "logo": {
            "url": "https://image.openmoviedb.com/tmdb-images/original/wJeCoWXOKm9WBHv2mdcbhNPzCZx.png",
            "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/wJeCoWXOKm9WBHv2mdcbhNPzCZx.png"
        }
    },
    {
        "id": 425400,
        "name": "Пожары",
        "alternativeName": "Incendies",
        "enName": null,
        "names": [
            {
                "name": "Incêndios",
                "language": "BR",
                "type": null
            },
            {
                "name": "Pogorzelisko",
                "language": "PL",
                "type": null
            },
            {
                "name": "Felperzselt föld",
                "language": "HU",
                "type": null
            },
            {
                "name": "La donna che canta",
                "language": "IT",
                "type": null
            },
            {
                "name": "烈火焚身",
                "language": "TW",
                "type": null
            },
            {
                "name": "母亲的告白",
                "language": "CN",
                "type": null
            },
            {
                "name": "焦头烂额",
                "language": "CN",
                "type": null
            },
            {
                "name": "烈火焚城",
                "language": "CN",
                "type": null
            },
            {
                "name": "中东的希腊悲剧",
                "language": "CN",
                "type": null
            },
            {
                "name": "烈火焚身",
                "language": "CN",
                "type": null
            },
            {
                "name": "Изпепелени",
                "language": "BG",
                "type": null
            },
            {
                "name": "Pozáry",
                "language": "CZ",
                "type": null
            },
            {
                "name": "Nawals hemmelighed",
                "language": "DK",
                "type": null
            },
            {
                "name": "Nawals hemmelighet - Incendies",
                "language": "NO",
                "type": null
            },
            {
                "name": "Incendies - Nawals Hemmelighet",
                "language": "NO",
                "type": null
            },
            {
                "name": "그을린 사랑",
                "language": "KR",
                "type": null
            },
            {
                "name": "灼熱の魂（La donna che canta）",
                "language": "JP",
                "type": null
            },
            {
                "name": "Die Frau, die singt",
                "language": "DE",
                "type": null
            }
        ],
        "type": "movie",
        "typeNumber": 1,
        "year": 2010,
        "description": "Когда брат и сестра Марван ознакомились с завещанием матери, их удивлению не было предела. Её последней волей было разыскать отца, которого близнецы считали умершим, и брата, о существовании которого они даже не подозревали. Жанна и Симон узнают, что мать тщательно скрывала от них многие обстоятельства своей трагической судьбы.",
        "shortDescription": "Брат и сестра узнают о страшном прошлом умершей матери. Драма Дени Вильнёва о жертвах ближневосточных войн",
        "status": null,
        "rating": {
            "kp": 8.062,
            "imdb": 8.3,
            "filmCritics": 8,
            "russianFilmCritics": 66.6667,
            "await": null
        },
        "votes": {
            "kp": 174065,
            "imdb": 228033,
            "filmCritics": 126,
            "russianFilmCritics": 3,
            "await": 0
        },
        "movieLength": 131,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": 18,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/4303601/40b4b961-07ab-4ce3-892f-63d6bd1fabc6/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4303601/40b4b961-07ab-4ce3-892f-63d6bd1fabc6/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000017fff5812f055d71d941aeac64090/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000017fff5812f055d71d941aeac64090/x1000"
        },
        "genres": [
            {
                "name": "драма"
            },
            {
                "name": "детектив"
            },
            {
                "name": "военный"
            }
        ],
        "countries": [
            {
                "name": "Канада"
            },
            {
                "name": "Франция"
            }
        ],
        "top10": null,
        "top250": 82,
        "isSeries": false,
        "ticketsOnSale": false,
        "logo": {
            "url": "https://image.openmoviedb.com/tmdb-images/original/26Mtj2VLRXiQzqjwkAQ6uH18ATj.png",
            "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/26Mtj2VLRXiQzqjwkAQ6uH18ATj.png"
        }
    }
]