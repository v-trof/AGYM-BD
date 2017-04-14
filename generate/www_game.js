(function() {
  science = [
    {
      question: "Хотя это и противоречит полученным еще в школе знаниям, известно, что в 1820 году в центральных губерниях России это произошло в сентябре. А в пустыне Сахара это произошло 18 февраля 1979 года. Назовите это событие.",
      answer: "Выпал снег"
    },
    {
      question: "В Древнем Египте красивыми считались жирные волосы, поэтому египтяне обильно смазывали их жиром. В дни похорон принято было посыпать голову пеплом. Однажды во время похорон пошел дождь, и в этот момент, как гласит предание, люди изобрели нечто, что сыграло значительную роль в жизни человечества. Что изобрели?",
      answer: "Мыло"
    },
    {
      question: 'Это вещество - основной компонент кислотных дождей. В газообразной форме оно может вызвать тяжелые ожоги. Последствием попадания этого вещества в желудок может стать усиленное потоотделение, а в случае большой дозы - и рвота. При случайном же вдыхании его не исключен и летальный исход. Назовите это вещество.',
      answer: "Вода"
    },
    {
      question: "Что удалось спасти благодаря, прежде всего, медикам и католикам?",
      answer: "Латинский язык"
    },
    {
      question: "Дело было в середине 30-х г. Кинорежиссер Журавлев очень волновался, сумеет ли он достаточно реалистично снять один из эпизодов своего будущего фильма. Когда с помощью группы цирковых акробатов задача был успешно решена, он обменялся поздравительными телеграммами с другим переживавшим по этому поводу человеком. Назовите его фамилию.",
      answer: "Циолковский"
    }
  ]
  Ag = [
    {
      question: "Одна из работниц гимназии имеет некую, возможно родственную, связь с другой. Назовите их.",
      answer: "Елена и Екатерина Анатольевны"
    },
    {
      question: "У кого из классных руководителей до сих пор живет Агшник?",
      answer: "у Елены Анатольевны. Подаренный выпускниками пес Б-шка"
    },
    {
      question: "В древней Руси за нанесение телесных повреждений полагался штраф в 3 гривны, но если бы один из молодых учителей АГ жил в то время, и у него пострадала ОНА, то платили бы целых 12. За повреждение чего так дорого приходилось расплачиваться?",
      answer: "Борода"
    },
    {
      question: "Сколько жилых комнат на одном этаже одного крыла?",
      answer: "21"
    },
    {
      question: "Рассказывают, что Ира и Катя, однажды возомнив, что они в Японии, развели в комнате костер. Алю Александровну удивил не сам факт, а цель этого. Что это была за цель?",
      answer: "Поджарить суши"
    }
  ]
  art = [
    {
      question: "V веке до н.э. ЭТО было изобретено и использовалось для стрижки овец, разрезания и кройки материи, а также для ухода за усами и волосами. Из каких пяти элементов ЭТО состоит согласно известному фольклорному источнику?",
      answer: "Два конца, два кольца, гвоздик"
    },
    {
      question: 'Джордж Оруэлл, объясняя выбор темы для одного из своих эссе, писал: "Это весьма любопытно. И не только потому, что это одна из опор британской цивилизации, но и потому, что лучший способ является предметом ожесточенных споров". В эссе приводится 11 способов. Чего?',
      answer: "Чай"
    },
    {
      question: "Что лауреат Нобелевской премии Иосиф Бродский назвал недостатком пространства, возмещенным избытком времени?",
      answer: "Тюрьма"
    },
    {
      question: "В прошлом веке можно было увидеть серебряные предметы с надписью: «Я здесь заснул». Сейчас они скромнее и изготавливаются из бумаги, ткани или синтетических материалов. Назовите предмет, внутри которого их чаще всего можно увидеть.",
      answer: "Книга (закладка)"
    },
    {
      question: "У африканской народности суахили есть легенда, повествующая о том, что первый человек спустился на землю с неба. А кто помог ему это сделать?",
      answer: "Жираф"
    }
  ]
  cat = [
    {
      question: "Многие не верят в ее существование. Однако Кант считал, что с нее начинается любое человеческое знание. А еще говорят, что она подводит только тех, у кого она есть. Назовите ее.",
      answer: "Интуиция"
    },
    {
      question: 'Во время Ялтинской конференции член британской делегации Иден написал записку и протянул ее Черчиллю. Черчилль передал Идену ответную записку со следующим текстом: "Не волнуйтесь. Старый ястреб не выпадет из гнезда". А что было сказано в записке Идена?',
      answer: "У вас расстегнута ширинка"
    },
    {
      question: "Французские школьники используют удобную рифмованную фразу, которая в русском переводе звучит так: 'Как однажды Жак-звонарь городской сломал фонарь'. А что в подобных случаях используют русские школьники?",
      answer: "Каждый охотник желает знать где сидит фазан"
    },
    {
      question: "Кстати о литературных неграх. Видимо, в отечественных журналистских кругах сочли этот термин слишком длинным, поэтому появился другой, еще менее политкорректный. Как же одним словом называют людей, пишущих книги за других?",
      answer: "Книггеры"
    },
    {
      question: "В 1846 г. была издана книга Пьера Жозефа Прудона «Философия нищеты». Через год появилась книга Карла Маркса, в которой идеи Прудона были подвергнуты резкой критике. Как она называлась?",
      answer: "Нищета философии"
    }
  ]

  document.getElementById('pt-main').insertBefore(
    make_slide.www({
        'science': science,
        'Ag': Ag,
        'art': art,
        'cat': cat
     }, 60),
    document.getElementById('www_game_end'));
}() );
