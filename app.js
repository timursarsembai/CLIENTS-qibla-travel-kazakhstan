(function () {
  'use strict';

  var WHATSAPP_NUMBER = '77472228185';
  var WA_LINK = 'https://wa.me/' + WHATSAPP_NUMBER;

  var DICT = {
    ru: {
      navPackage: 'Пакет', navProgram: 'Программа', navHotels: 'Отели', navReviews: 'Отзывы',
      badgeSeason: 'Сентябрь 2026',
      heroTitle: 'Умра с заботой о каждом шаге вашего пути',
      heroSub: 'Организация Умры из Казахстана: перелёт, отели рядом со святынями, трансфер и духовное сопровождение на всех этапах.',
      dates: 'Дата ближайшего тура', priceLabel: 'Комфорт-пакет', airline: 'Перелёт', nightsWord: 'ночей', nights2: 'ночи',
      ctaMain: 'Написать в WhatsApp', ctaProgram: 'Смотреть программу',
      stats: [['7', 'дней насыщенной программы'], ['★★★★', 'отели у самых святынь'], ['500+', 'паломников с нами'], ['24/7', 'поддержка в поездке']],
      introKicker: 'О компании',
      introTitle: 'Умра — не просто поездка. Это путь сердца.',
      introP1: 'Qibla Travel организует Умру из Казахстана под ключ. Мы берём на себя всю логистику — перелёт, визы, отели, трансферы и питание, — чтобы вы могли полностью посвятить себя поклонению.',
      introP2: 'Каждый маршрут продуман до мелочей: отели в пешей доступности от Харама, комфортные переезды и наставник, который сопровождает вас на каждом обряде.',
      packageKicker: 'Всё включено', packageTitle: 'Что входит в комфорт-пакет',
      pkg: [
        ['✈', 'Перелёт SCAT Airlines', 'Прямые рейсы Алматы → Джидда и Медина → Алматы. Багаж включён.'],
        ['⌂', 'Отели 4 звезды у святынь', '5 ночей в Мекке (Emaar Grand) и 2 ночи в Медине (Emaar Mektan).'],
        ['⇄', 'Новый комфортный автобус', 'Трансфер Мекка → Медина и все переезды по программе.'],
        ['☰', 'Питание', 'Завтраки и ужины в отелях — вкусно и качественно.'],
        ['✦', 'Духовное сопровождение', 'Опытный гид-наставник рядом на всех этапах поездки.'],
        ['✓', 'Виза и документы', 'Оформление визы, страховка и бесплатная консультация до вылета.'],
      ],
      programKicker: 'Маршрут', programTitle: 'Программа поездки день за днём', dayWord: 'День',
      program: [
        ['1', 'Вылет из Алматы', 'Мекка', 'Встреча в аэропорту Алматы, регистрация на прямой рейс SCAT Airlines до Джидды, трансфер и заселение в отель Emaar Grand.'],
        ['2', 'Совершение Умры', 'Мекка', 'Подготовка к ихраму, наставления гида, совершение обрядов Умры: таваф, саъй и молитвы у Каабы.'],
        ['3–5', 'Дни поклонения в Мекке', 'Мекка', 'Свободное время для молитв в Заповедной мечети, дополнительные Умры, посещение исторических мест Мекки.'],
        ['6', 'Переезд в Медину', 'Медина', 'Комфортный переезд на новом автобусе, заселение в отель Emaar Mektan рядом с Мечетью Пророка.'],
        ['7', 'Медина', 'Медина', 'Посещение Мечети Пророка ﷺ и исторических мест, молитвы в Рауде.'],
        ['8', 'Возвращение', 'Алматы', 'Трансфер в аэропорт и вылет Медина → Алматы. Возвращение домой с обновлённым сердцем.'],
      ],
      hotelsKicker: 'Проживание', hotelsTitle: 'Отели, которые мы выбрали для паломников', ctaVideo: 'Смотреть видео об отеле',
      mecca: 'Мекка', medina: 'Медина',
      hotelGrandText: 'Комфортные номера и пешая доступность к Каабе. После насыщенного дня поклонения можно по-настоящему отдохнуть и восстановить силы.',
      hotelMektanText: 'Рядом с Мечетью Пророка ﷺ: удобное расположение, внимательный сервис и спокойная атмосфера для молитв.',
      grandTags: ['Пешком до Харама', 'Завтрак и ужин', 'Вид на город'],
      mektanTags: ['Рядом с Мечетью Пророка', 'Тихие номера', 'Хороший сервис'],
      whyKicker: 'Почему мы', whyTitle: 'При выборе мы обращали внимание на самое важное',
      whyText: 'Потому что комфорт во время Умры тоже имеет большое значение. Мы выбирали не просто гостиницу, а место, где после дня поклонения можно по-настоящему отдохнуть.',
      why: [
        ['Комфортные номера', 'Проверенные отели 4 звезды с современными, чистыми номерами.'],
        ['Вкусное и качественное питание', 'Завтраки и ужины в отелях, без неприятных сюрпризов.'],
        ['Пешая доступность к святыням', 'К Каабе и к Мечети Пророка ﷺ можно дойти пешком.'],
        ['Высокий уровень сервиса', 'Сопровождение и поддержка группы на всех этапах.'],
      ],
      galleryKicker: 'Галерея', galleryTitle: 'Мгновения, которые остаются в сердце',
      guideKicker: 'Сопровождение', guideTitle: 'Наставник рядом на каждом обряде',
      guideText: 'С группой едет опытный гид-наставник. Он проводит подготовительные встречи до вылета, объясняет каждый обряд и помогает с дуа — чтобы вы чувствовали себя спокойно с первого до последнего дня.',
      guidePoints: [
        'Подготовительные лекции об Умре до вылета',
        'Сопровождение на тавафе, саъе и в Медине',
        'Помощь с дуа, обрядами и организацией дня',
      ],
      guideBadge: 'сопровождение группы',
      igTitle: 'Живые моменты наших поездок', igText: 'Реальные видео из Мекки и Медины — атмосфера Умры вместе с Qibla Travel.',
      reviewsKicker: 'Отзывы', reviewsTitle: 'Что говорят наши паломники',
      reviews: [
        ['Всё было организовано до мелочей: встреча в аэропорту, отель в двух шагах от Харама, внимательный гид. Сердце до сих пор там.', 'Айгерим', 'Алматы'],
        ['Ездили с родителями — переживал за них, но зря. Автобусы новые, питание отличное, темп программы комфортный для старшего поколения.', 'Даулет', 'Астана'],
        ['Это была моя первая Умра. Наставник объяснял каждый обряд, помогал с дуа. Чувствовала себя спокойно с первого до последнего дня.', 'Мадина', 'Шымкент'],
      ],
      faqTitle: 'Частые вопросы об Умре',
      faq: [
        ['Что входит в стоимость $1450?', 'Перелёт, проживание в отелях 4 звезды (5 ночей в Мекке, 2 в Медине), трансферы, питание, виза, страховка и сопровождение гида. Это комфорт-пакет «всё включено».'],
        ['Нужна ли виза и как её оформить?', 'Да, для Умры нужна виза Саудовской Аравии. Мы полностью берём оформление на себя — от вас нужен только загранпаспорт и фото.'],
        ['Я еду впервые. Помогут ли мне с обрядами?', 'Да. С группой едет опытный гид-наставник: проводит подготовительные лекции до вылета и сопровождает на каждом этапе обрядов.'],
        ['Можно ли поехать с детьми или пожилыми родителями?', 'Можно. Программа построена в комфортном темпе, отели рядом со святынями, переезды на новых автобусах. Сообщите нам заранее — учтём особые пожелания.'],
        ['Какие даты ближайшего тура?', 'Ближайший заезд — 12.09 – 19.09. Количество мест в группе ограничено, поэтому бронировать лучше заранее.'],
        ['Как забронировать место?', 'Напишите нам в WhatsApp или позвоните. Бронь подтверждается предоплатой, мы поможем со всеми документами.'],
      ],
      ctaTitle: 'Отправьтесь в Умру этой осенью',
      ctaText: 'Напишите нам — бесплатно проконсультируем, ответим на вопросы и забронируем место в группе на 12.09 – 19.09.',
      footerAbout: 'Организация Умры из Казахстана под ключ: перелёт, отели, трансфер и духовное сопровождение на всех этапах.',
      footerNav: 'Навигация', footerContacts: 'Контакты',
      footerLine: 'Организация Умры из Казахстана',
    },
    kz: {
      navPackage: 'Пакет', navProgram: 'Бағдарлама', navHotels: 'Қонақүйлер', navReviews: 'Пікірлер',
      badgeSeason: 'Қыркүйек 2026',
      heroTitle: 'Умра сапары — жолыңыздың әр қадамына қамқорлық',
      heroSub: 'Қазақстаннан Умраны ұйымдастыру: ұшу, қасиетті орындарға жақын қонақүйлер, трансфер және барлық кезеңде рухани сүйемелдеу.',
      dates: 'Жақын сапар күні', priceLabel: 'Комфорт пакет', airline: 'Ұшу', nightsWord: 'түн', nights2: 'түн',
      ctaMain: 'WhatsApp-қа жазу', ctaProgram: 'Бағдарламаны көру',
      stats: [['7', 'күндік бай бағдарлама'], ['★★★★', 'қасиетті орынға жақын қонақүйлер'], ['500+', 'бізбен барған қажылар'], ['24/7', 'сапардағы қолдау']],
      introKicker: 'Компания туралы',
      introTitle: 'Умра — жай сапар емес. Бұл жүректің жолы.',
      introP1: 'Qibla Travel Қазақстаннан Умраны толық ұйымдастырады. Барлық логистиканы — ұшу, виза, қонақүй, трансфер мен тамақтануды — өз мойнымызға аламыз, сіз тек құлшылыққа беріле аласыз.',
      introP2: 'Әр маршрут ұсақ-түйегіне дейін ойластырылған: Харамға жаяу жететін қонақүйлер, жайлы жол және әр ғибадатта қасыңызда жүретін ұстаз.',
      packageKicker: 'Барлығы қосылған', packageTitle: 'Комфорт пакетке не кіреді',
      pkg: [
        ['✈', 'SCAT Airlines ұшуы', 'Тікелей рейстер: Алматы → Жидда және Медина → Алматы. Багаж қосылған.'],
        ['⌂', 'Қасиетті орындарға жақын 4 жұлдызды қонақүйлер', 'Меккеде 5 түн (Emaar Grand), Мединада 2 түн (Emaar Mektan).'],
        ['⇄', 'Жаңа әрі жайлы автобус', 'Мекке → Медина трансфері және бағдарлама бойынша барлық жол.'],
        ['☰', 'Тамақтану', 'Қонақүйлерде таңғы және кешкі ас — дәмді әрі сапалы.'],
        ['✦', 'Рухани сүйемелдеу', 'Тәжірибелі ұстаз-гид сапардың барлық кезеңінде қасыңызда.'],
        ['✓', 'Виза және құжаттар', 'Виза рәсімдеу, сақтандыру және ұшуға дейін тегін кеңес.'],
      ],
      programKicker: 'Маршрут', programTitle: 'Сапар бағдарламасы күн сайын', dayWord: 'Күн',
      program: [
        ['1', 'Алматыдан ұшу', 'Мекке', 'Алматы әуежайында қарсы алу, SCAT Airlines тікелей рейсіне тіркелу, трансфер және Emaar Grand қонақүйіне орналасу.'],
        ['2', 'Умраны орындау', 'Мекке', 'Ихрамға дайындық, гидтің насихаты, Умра рәсімдерін орындау: тауаф, сағи және Қағба маңындағы дұғалар.'],
        ['3–5', 'Меккедегі құлшылық күндері', 'Мекке', 'Харам мешітінде намаз оқуға бос уақыт, қосымша Умралар, Меккенің тарихи орындарына зиярат.'],
        ['6', 'Мединаға көшу', 'Медина', 'Жаңа автобуспен жайлы жол, Пайғамбар мешітіне жақын Emaar Mektan қонақүйіне орналасу.'],
        ['7', 'Медина', 'Медина', 'Пайғамбар ﷺ мешітіне зиярат, тарихи орындарды аралау, Раудада намаз оқу.'],
        ['8', 'Қайту', 'Алматы', 'Әуежайға трансфер және Медина → Алматы рейсі. Жаңарған жүрекпен үйге оралу.'],
      ],
      hotelsKicker: 'Тұру', hotelsTitle: 'Қажылар үшін таңдаған қонақүйлеріміз', ctaVideo: 'Отель туралы видео',
      mecca: 'Мекке', medina: 'Медина',
      hotelGrandText: 'Жайлы бөлмелер және Қағбаға жаяу жетуге болады. Құлшылыққа толы күннен кейін шынайы демалып, күш жинауға мүмкіндік.',
      hotelMektanText: 'Пайғамбар ﷺ мешітіне жақын: ыңғайлы орналасу, мұқият сервис және намазға тыныш атмосфера.',
      grandTags: ['Харамға жаяу', 'Таңғы және кешкі ас', 'Қала көрінісі'],
      mektanTags: ['Пайғамбар мешітіне жақын', 'Тыныш бөлмелер', 'Жақсы сервис'],
      whyKicker: 'Неге біз', whyTitle: 'Таңдағанда ең маңыздысына назар аудардық',
      whyText: 'Себебі Умра кезіндегі жайлылық та үлкен мәнге ие. Біз жай ғана қонақүй емес, құлшылық күнінен кейін шынайы демалуға болатын орын таңдадық.',
      why: [
        ['Жайлы бөлмелер', 'Заманауи әрі таза бөлмелері бар тексерілген 4 жұлдызды қонақүйлер.'],
        ['Дәмді әрі сапалы тамақ', 'Қонақүйлерде таңғы және кешкі ас, жағымсыз сюрпризсіз.'],
        ['Қасиетті орындарға жаяу жету', 'Қағбаға және Пайғамбар ﷺ мешітіне жаяу жетуге болады.'],
        ['Жоғары сервис деңгейі', 'Барлық кезеңде топты сүйемелдеу мен қолдау.'],
      ],
      galleryKicker: 'Галерея', galleryTitle: 'Жүректе қалатын сәттер',
      guideKicker: 'Сүйемелдеу', guideTitle: 'Әр ғибадатта қасыңыздағы ұстаз',
      guideText: 'Топпен бірге тәжірибелі ұстаз-гид жүреді. Ол ұшуға дейін дайындық кездесулерін өткізеді, әр ғибадатты түсіндіреді және дұғаларға көмектеседі — алғашқы күннен соңғы күнге дейін жаныңыз жай табады.',
      guidePoints: [
        'Ұшуға дейін Умра туралы дайындық дәрістері',
        'Тауаф, сағи және Мединада сүйемелдеу',
        'Дұға, ғибадат және күнді ұйымдастыруда көмек',
      ],
      guideBadge: 'топты сүйемелдеу',
      igTitle: 'Сапарларымыздың нақты сәттері', igText: 'Мекке мен Мединадан нақты видеолар — Qibla Travel-мен Умра атмосферасы.',
      reviewsKicker: 'Пікірлер', reviewsTitle: 'Қажыларымыз не дейді',
      reviews: [
        ['Барлығы ұсақ-түйегіне дейін ұйымдастырылған: әуежайда қарсы алу, Харамға екі қадам жердегі қонақүй, мұқият гид. Жүрегім әлі сонда.', 'Айгерім', 'Алматы'],
        ['Ата-анаммен бардым — оларға алаңдадым, бекер екен. Автобустар жаңа, тамақ керемет, бағдарлама қарқыны егде кісілерге ыңғайлы.', 'Дәулет', 'Астана'],
        ['Бұл менің алғашқы Умрам еді. Ұстаз әр ғибадатты түсіндіріп, дұғаларға көмектесті. Алғашқы күннен соңғы күнге дейін жаным жай тапты.', 'Мадина', 'Шымкент'],
      ],
      faqTitle: 'Умра туралы жиі қойылатын сұрақтар',
      faq: [
        ['$1450 бағасына не кіреді?', 'Ұшу, 4 жұлдызды қонақүйлерде тұру (Меккеде 5 түн, Мединада 2 түн), трансферлер, тамақтану, виза, сақтандыру және гид сүйемелдеуі. Бұл — «барлығы қосылған» комфорт пакет.'],
        ['Виза керек пе, қалай рәсімделеді?', 'Иә, Умраға Сауд Арабиясының визасы қажет. Рәсімдеуді толығымен өз мойнымызға аламыз — сізден тек шетелдік паспорт пен фото керек.'],
        ['Алғаш рет барамын. Ғибадаттарға көмектесе ме?', 'Иә. Топпен бірге тәжірибелі ұстаз-гид жүреді: ұшуға дейін дайындық дәрістерін өткізіп, ғибадаттың әр кезеңінде сүйемелдейді.'],
        ['Балалармен немесе егде ата-анамен баруға бола ма?', 'Болады. Бағдарлама жайлы қарқынмен құрылған, қонақүйлер қасиетті орындарға жақын, жол жаңа автобустармен. Алдын ала айтыңыз — ерекше тілектерді ескереміз.'],
        ['Жақын сапардың күндері қандай?', 'Ең жақын заезд — 12.09 – 19.09. Топтағы орын саны шектеулі, сондықтан алдын ала брондаған дұрыс.'],
        ['Орынды қалай брондауға болады?', 'WhatsApp-қа жазыңыз немесе қоңырау шалыңыз. Брондау алдын ала төлеммен расталады, барлық құжатқа көмектесеміз.'],
      ],
      ctaTitle: 'Осы күзде Умраға аттаныңыз',
      ctaText: 'Бізге жазыңыз — тегін кеңес береміз, сұрақтарға жауап беріп, 12.09 – 19.09 тобына орын брондаймыз.',
      footerAbout: 'Қазақстаннан Умраны толық ұйымдастыру: ұшу, қонақүйлер, трансфер және барлық кезеңде рухани сүйемелдеу.',
      footerNav: 'Навигация', footerContacts: 'Байланыс',
      footerLine: 'Қазақстаннан Умраны ұйымдастыру',
    },
  };

  var REELS = [
    'https://www.instagram.com/reel/DZwmnLRgyJy/',
    'https://www.instagram.com/reel/Dac7d_zgY-y/',
    'https://www.instagram.com/reel/DZuk4cuARYv/',
  ];
  var GRAND_VIDEO = 'https://www.instagram.com/reel/DaxMuKHgBsB/';
  var MEKTAN_VIDEO = 'https://www.instagram.com/reel/Da-TyhNgk9D/';

  var WA_ICON = '<svg width="{{s}}" height="{{s}}" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function waIcon(size) { return WA_ICON.replace(/\{\{s\}\}/g, size); }

  var state = { lang: 'ru', openFaq: 0, videoUrl: null };

  function renderStats(t) {
    return t.stats.map(function (s) {
      return '<div>' +
        '<div style="font-family: \'Playfair Display\', serif; font-size: 44px; font-weight: 600; color: #e6c183; line-height: 1">' + esc(s[0]) + '</div>' +
        '<div style="font-size: 13px; font-weight: 600; color: rgba(245,235,216,0.72); margin-top: 8px; letter-spacing: 0.02em">' + esc(s[1]) + '</div>' +
        '</div>';
    }).join('');
  }

  function renderPackage(t) {
    return t.pkg.map(function (p) {
      return '<div class="card-hover" style="background: #FFFFFF; border: 1px solid rgba(138,106,60,0.14); border-radius: 22px; padding: 32px 30px">' +
        '<div style="width: 52px; height: 52px; border-radius: 15px; background: linear-gradient(135deg, #f7ece0, #e6c183); display: flex; align-items: center; justify-content: center; font-size: 24px; color: #755a26; font-weight: 600; font-family: \'Playfair Display\', serif">' + esc(p[0]) + '</div>' +
        '<h3 style="font-size: 18px; font-weight: 800; color: #2b261e; margin: 20px 0 10px">' + esc(p[1]) + '</h3>' +
        '<p style="font-size: 14.5px; line-height: 1.65; color: #4d463a; margin: 0">' + esc(p[2]) + '</p>' +
        '</div>';
    }).join('');
  }

  function renderProgram(t) {
    return t.program.map(function (d) {
      return '<div class="program-row" style="display: grid; grid-template-columns: 92px 1fr; gap: 24px; align-items: stretch">' +
        '<div style="display: flex; flex-direction: column; align-items: center">' +
        '<div style="width: 62px; height: 62px; border-radius: 50%; background: #2b261e; color: #e6c183; display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1; flex-shrink: 0">' +
        '<span style="font-size: 10px; font-weight: 700; letter-spacing: 0.1em; opacity: 0.7">' + esc(t.dayWord) + '</span>' +
        '<span style="font-family: \'Playfair Display\', serif; font-size: 26px; font-weight: 600">' + esc(d[0]) + '</span>' +
        '</div>' +
        '<div style="flex: 1; width: 2px; background: rgba(138,106,60,0.28); margin-top: 6px"></div>' +
        '</div>' +
        '<div style="background: rgba(255,255,255,0.8); border: 1px solid rgba(138,106,60,0.16); border-radius: 18px; padding: 22px 26px; margin-bottom: 6px">' +
        '<div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 6px">' +
        '<h3 style="font-size: 18px; font-weight: 800; color: #2b261e; margin: 0">' + esc(d[1]) + '</h3>' +
        '<span style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #755a26; background: #f7ece0; border-radius: 999px; padding: 4px 12px">' + esc(d[2]) + '</span>' +
        '</div>' +
        '<p style="font-size: 14.5px; line-height: 1.65; color: #4d463a; margin: 0">' + esc(d[3]) + '</p>' +
        '</div></div>';
    }).join('');
  }

  function renderTags(tags) {
    return tags.map(function (tag) {
      return '<span style="font-size: 12.5px; font-weight: 600; color: #503907; background: #f7ece0; border-radius: 999px; padding: 6px 14px">' + esc(tag) + '</span>';
    }).join('');
  }

  function renderWhy(t) {
    return t.why.map(function (w) {
      return '<div style="display: flex; gap: 18px; align-items: flex-start; border-top: 1px solid rgba(138,106,60,0.18); padding-top: 18px">' +
        '<div style="width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; background: linear-gradient(135deg, #e6c183, #c5a368); display: flex; align-items: center; justify-content: center; color: #271900; font-weight: 800; font-size: 15px">✓</div>' +
        '<div><div style="font-size: 16.5px; font-weight: 800; color: #2b261e">' + esc(w[0]) + '</div>' +
        '<div style="font-size: 14.5px; line-height: 1.55; color: #4d463a; margin-top: 4px">' + esc(w[1]) + '</div></div></div>';
    }).join('');
  }

  function renderGuidePoints(t) {
    return t.guidePoints.map(function (g) {
      return '<div style="display: flex; gap: 14px; align-items: flex-start">' +
        '<span style="color: #c5a368; font-family: \'Playfair Display\', serif; font-size: 26px; line-height: 0.8">◆</span>' +
        '<div style="font-size: 15.5px; line-height: 1.6; color: #1f1b13">' + esc(g) + '</div></div>';
    }).join('');
  }

  function renderReels() {
    return REELS.map(function (url) {
      return '<blockquote class="instagram-media" data-instgrm-permalink="' + esc(url) + '" data-instgrm-version="14" style="background: #fff; border: 0; border-radius: 16px; box-shadow: 0 10px 30px rgba(43,38,30,0.08); margin: 0; max-width: 400px; min-width: 300px; width: 100%; padding: 0"></blockquote>';
    }).join('');
  }

  function renderReviews(t) {
    return t.reviews.map(function (r) {
      var initial = r[1].charAt(0);
      return '<figure style="background: #FFFFFF; border: 1px solid rgba(138,106,60,0.14); border-radius: 22px; padding: 34px 30px; margin: 0; display: flex; flex-direction: column; gap: 18px">' +
        '<div style="color: #c5a368; font-size: 15px; letter-spacing: 2px">★★★★★</div>' +
        '<blockquote style="font-size: 15.5px; line-height: 1.7; color: #1f1b13; margin: 0; flex: 1">' + esc(r[0]) + '</blockquote>' +
        '<figcaption style="display: flex; align-items: center; gap: 13px; border-top: 1px solid rgba(138,106,60,0.14); padding-top: 18px">' +
        '<div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #e6c183, #c5a368); display: flex; align-items: center; justify-content: center; font-weight: 800; color: #271900; font-size: 15px">' + esc(initial) + '</div>' +
        '<div><div style="font-size: 14.5px; font-weight: 800; color: #2b261e">' + esc(r[1]) + '</div>' +
        '<div style="font-size: 12.5px; color: #755a26">' + esc(r[2]) + '</div></div></figcaption></figure>';
    }).join('');
  }

  function renderFaq(t) {
    return t.faq.map(function (f, i) {
      var open = state.openFaq === i;
      return '<div style="background: #FFFFFF; border: 1px solid rgba(138,106,60,0.14); border-radius: 16px; overflow: hidden">' +
        '<button data-faq-toggle="' + i + '" style="width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; background: none; border: none; padding: 22px 26px; cursor: pointer; text-align: left; font-family: \'Plus Jakarta Sans\', sans-serif; font-size: 16.5px; font-weight: 700; color: #2b261e">' +
        esc(f[0]) +
        '<span style="color: #755a26; transition: transform 0.2s; flex-shrink: 0; transform: rotate(' + (open ? 180 : 0) + 'deg)">▾</span>' +
        '</button>' +
        (open ? '<div style="padding: 0 26px 24px; font-size: 15px; line-height: 1.75; color: #4d463a">' + esc(f[1]) + '</div>' : '') +
        '</div>';
    }).join('');
  }

  function render() {
    var t = DICT[state.lang];
    var langBtn = function (code, label) {
      var on = state.lang === code;
      return '<button data-lang="' + code + '" style="padding: 7px 14px; border: none; cursor: pointer; font-family: \'Plus Jakarta Sans\', sans-serif; font-weight: 700; font-size: 12px; background: ' + (on ? '#2b261e' : 'transparent') + '; color: ' + (on ? '#faefe2' : '#4d463a') + '">' + label + '</button>';
    };

    var html = ''
    + '<x-dc>'
    + '<header style="position: sticky; top: 0; z-index: 50; background: rgba(250,246,238,0.9); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(138,106,60,0.12)">'
    + '  <div style="max-width: 1200px; margin: 0 auto; padding: 15px 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px">'
    + '    <a href="#top" style="display: flex; align-items: center; flex-shrink: 0"><img src="assets/logo.png" alt="Qibla Travel" style="height: 36px; width: auto; display: block" /></a>'
    + '    <nav class="site-nav" style="display: flex; align-items: center; gap: 28px; font-size: 14px; font-weight: 600">'
    + '      <a href="#package" style="color: #4d463a">' + esc(t.navPackage) + '</a>'
    + '      <a href="#program" style="color: #4d463a">' + esc(t.navProgram) + '</a>'
    + '      <a href="#hotels" style="color: #4d463a">' + esc(t.navHotels) + '</a>'
    + '      <a href="#reviews" style="color: #4d463a">' + esc(t.navReviews) + '</a>'
    + '      <a href="#faq" style="color: #4d463a">FAQ</a>'
    + '    </nav>'
    + '    <div style="display: flex; align-items: center; gap: 12px; flex-shrink: 0">'
    + '      <div style="display: flex; border: 1px solid rgba(138,106,60,0.35); border-radius: 999px; overflow: hidden; font-size: 12px; font-weight: 700">'
    + langBtn('ru', 'RU') + langBtn('kz', 'KZ')
    + '      </div>'
    + '      <a href="' + WA_LINK + '" target="_blank" rel="noopener" class="btn-wa nav-wa" style="display: inline-flex; align-items: center; gap: 8px; background: #25D366; color: #ffffff; padding: 10px 18px; border-radius: 999px; font-size: 13px; font-weight: 700">' + waIcon(16) + '<span class="nav-wa-label">WhatsApp</span></a>'
    + '    </div>'
    + '  </div>'
    + '</header>'

    + '<section id="top" class="hero-section" style="position: relative; min-height: 88vh; display: flex; align-items: flex-end; overflow: hidden">'
    + '  <div class="hero-video-wrap" style="position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none">'
    + '    <img src="assets/hero-desert-3.png" alt="" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover" />'
    + '    <iframe id="hero-yt-player" class="hero-video-frame" src="https://www.youtube-nocookie.com/embed/RaQ77QdRPNA?autoplay=1&mute=1&loop=1&playlist=RaQ77QdRPNA&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&disablekb=1&playsinline=1&fs=0" title="" allow="autoplay; encrypted-media" tabindex="-1" style="position: absolute; top: 0; left: 0; border: 0; pointer-events: none; transform: scale(1.28); transform-origin: center center; opacity: 0; transition: opacity 0.8s ease"></iframe>'
    + '  </div>'
    + '  <div style="position: absolute; inset: 0; z-index: 1; pointer-events: none; background: linear-gradient(to right, rgba(247,236,224,0.96) 0%, rgba(247,236,224,0.94) 30%, rgba(247,236,224,0.78) 50%, rgba(247,236,224,0.25) 72%, rgba(247,236,224,0) 100%)"></div>'
    + '  <div class="hero-inner" style="position: relative; z-index: 2; max-width: 1200px; width: 100%; margin: 0 auto; padding: 120px 28px 72px; color: #1f1b13">'
    + '    <div style="animation: qtFadeUp 0.8s ease both; max-width: 780px">'
    + '      <div style="display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(117,90,38,0.4); border-radius: 999px; padding: 8px 18px; font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #755a26; background: rgba(255,255,255,0.55); backdrop-filter: blur(6px)">'
    + '        <span style="width: 6px; height: 6px; border-radius: 50%; background: #755a26"></span>Umrah Service · ' + esc(t.badgeSeason)
    + '      </div>'
    + '      <h1 class="hero-title" style="font-family: \'Playfair Display\', serif; font-size: 76px; line-height: 1.02; font-weight: 600; margin: 26px 0 20px; text-wrap: balance; text-shadow: 0 1px 20px rgba(255,248,243,0.6)">' + esc(t.heroTitle) + '</h1>'
    + '      <p style="font-size: 18px; line-height: 1.65; color: #4d463a; max-width: 520px; margin: 0 0 34px">' + esc(t.heroSub) + '</p>'
    + '      <div class="hero-cta-row" style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap">'
    + '        <a href="' + WA_LINK + '" target="_blank" rel="noopener" class="btn-wa" style="display: inline-flex; align-items: center; gap: 10px; background: #25D366; color: #ffffff; padding: 17px 34px; border-radius: 999px; font-size: 15px; font-weight: 800">' + waIcon(20) + esc(t.ctaMain) + '</a>'
    + '        <a href="#program" class="btn-outline" style="color: #2b261e; font-size: 15px; font-weight: 700; border: 1px solid rgba(43,38,30,0.35); padding: 16px 30px; border-radius: 999px">' + esc(t.ctaProgram) + '</a>'
    + '      </div>'
    + '    </div>'
    + '    <div class="hero-badges" style="display: flex; gap: 14px; flex-wrap: wrap; margin-top: 44px">'
    + '      <div style="background: rgba(255,255,255,0.6); backdrop-filter: blur(8px); border: 1px solid rgba(117,90,38,0.18); border-radius: 16px; padding: 15px 24px">'
    + '        <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: #755a26; text-transform: uppercase">' + esc(t.dates) + '</div>'
    + '        <div style="font-size: 22px; font-weight: 800; margin-top: 4px">12.09 – 19.09</div>'
    + '      </div>'
    + '      <div style="background: linear-gradient(135deg, #c5a368, #755a26); border-radius: 16px; padding: 15px 24px; color: #271900">'
    + '        <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.8">' + esc(t.priceLabel) + '</div>'
    + '        <div style="font-size: 22px; font-weight: 800; margin-top: 4px">$1450</div>'
    + '      </div>'
    + '      <div style="background: rgba(255,255,255,0.6); backdrop-filter: blur(8px); border: 1px solid rgba(117,90,38,0.18); border-radius: 16px; padding: 15px 24px">'
    + '        <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: #755a26; text-transform: uppercase">' + esc(t.airline) + '</div>'
    + '        <div style="font-size: 22px; font-weight: 800; margin-top: 4px">SCAT · ALA↔JED</div>'
    + '      </div>'
    + '    </div>'
    + '  </div>'
    + '</section>'

    + '<section style="background: #2b261e; color: #faefe2">'
    + '  <div class="stats-grid" style="max-width: 1200px; margin: 0 auto; padding: 40px 28px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; text-align: center">' + renderStats(t) + '</div>'
    + '</section>'

    + '<section class="section-pad intro-grid" style="max-width: 1200px; margin: 0 auto; padding: 96px 28px 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center">'
    + '  <div>'
    + '    <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 16px">' + esc(t.introKicker) + '</div>'
    + '    <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; line-height: 1.08; font-weight: 600; color: #2b261e; margin: 0 0 22px; text-wrap: balance">' + esc(t.introTitle) + '</h2>'
    + '    <p style="font-size: 17px; line-height: 1.75; color: #4d463a; margin: 0 0 18px">' + esc(t.introP1) + '</p>'
    + '    <p style="font-size: 17px; line-height: 1.75; color: #4d463a; margin: 0">' + esc(t.introP2) + '</p>'
    + '  </div>'
    + '  <div style="position: relative">'
    + '    <div style="width: 100%; aspect-ratio: 4 / 5; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 70px -34px rgba(74,60,40,0.5)"><img src="assets/intro-room.png" alt="" style="width:100%;height:100%;object-fit:cover" /></div>'
    + '    <div style="position: absolute; right: -22px; top: 40px; width: 150px; aspect-ratio: 3/4; border-radius: 18px; overflow: hidden; border: 6px solid #fff8f3; box-shadow: 0 24px 44px -24px rgba(74,60,40,0.5)"><img src="assets/intro-photo-2.webp" alt="" style="width:100%;height:100%;object-fit:cover" /></div>'
    + '  </div>'
    + '</section>'

    + '<section id="package" class="section-pad" style="max-width: 1200px; margin: 0 auto; padding: 80px 28px 40px">'
    + '  <div style="text-align: center; max-width: 640px; margin: 0 auto 56px">'
    + '    <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">' + esc(t.packageKicker) + '</div>'
    + '    <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; font-weight: 600; color: #2b261e; margin: 0; text-wrap: balance">' + esc(t.packageTitle) + '</h2>'
    + '  </div>'
    + '  <div class="pkg-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px">' + renderPackage(t) + '</div>'
    + '</section>'

    + '<section id="program" style="background: #f7ece0">'
    + '  <div class="section-pad" style="max-width: 1000px; margin: 0 auto; padding: 96px 28px">'
    + '    <div style="text-align: center; max-width: 640px; margin: 0 auto 56px">'
    + '      <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">' + esc(t.programKicker) + '</div>'
    + '      <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; font-weight: 600; color: #2b261e; margin: 0; text-wrap: balance">' + esc(t.programTitle) + '</h2>'
    + '    </div>'
    + '    <div class="program-grid" style="position: relative; display: grid; gap: 18px">' + renderProgram(t) + '</div>'
    + '  </div>'
    + '</section>'

    + '<section id="hotels" class="section-pad" style="max-width: 1200px; margin: 0 auto; padding: 96px 28px 40px">'
    + '  <div style="text-align: center; max-width: 640px; margin: 0 auto 56px">'
    + '    <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">' + esc(t.hotelsKicker) + '</div>'
    + '    <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; font-weight: 600; color: #2b261e; margin: 0; text-wrap: balance">' + esc(t.hotelsTitle) + '</h2>'
    + '  </div>'
    + '  <div class="hotels-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px">'
    + '    <div style="background: #FFFFFF; border: 1px solid rgba(138,106,60,0.14); border-radius: 26px; overflow: hidden; box-shadow: 0 30px 56px -40px rgba(74,60,40,0.4); display: flex; flex-direction: column">'
    + '      <div class="hotel-photo" style="height: 440px; position: relative">'
    + '        <img src="assets/hotel-grand.webp" alt="Emaar Grand" style="width:100%;height:100%;object-fit:cover" />'
    + '        <div style="position: absolute; top: 16px; left: 16px; background: rgba(20,16,10,0.6); backdrop-filter: blur(4px); color: #faefe2; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; pointer-events: none">' + esc(t.mecca) + ' · 5 ' + esc(t.nightsWord) + '</div>'
    + '      </div>'
    + '      <div style="padding: 30px 32px 34px; display: flex; flex-direction: column; flex: 1">'
    + '        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px">'
    + '          <h3 style="font-family: \'Playfair Display\', serif; font-size: 32px; font-weight: 600; color: #2b261e; margin: 0">Emaar Grand</h3>'
    + '          <div style="color: #c5a368; font-size: 15px; letter-spacing: 2px">★★★★</div>'
    + '        </div>'
    + '        <p style="font-size: 15px; line-height: 1.65; color: #4d463a; margin: 12px 0 18px">' + esc(t.hotelGrandText) + '</p>'
    + '        <div style="display: flex; flex-wrap: wrap; gap: 8px">' + renderTags(t.grandTags) + '</div>'
    + '        <button data-video="grand" class="btn-dark" style="margin-top: 24px; align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; background: #2b261e; color: #faefe2; border: none; cursor: pointer; font-family: \'Plus Jakarta Sans\', sans-serif; padding: 13px 24px; border-radius: 999px; font-size: 14px; font-weight: 700">'
    + '          <span style="display: inline-flex; width: 22px; height: 22px; border-radius: 50%; background: #c5a368; color: #2b261e; align-items: center; justify-content: center; font-size: 9px">▶</span>' + esc(t.ctaVideo)
    + '        </button>'
    + '      </div>'
    + '    </div>'
    + '    <div style="background: #FFFFFF; border: 1px solid rgba(138,106,60,0.14); border-radius: 26px; overflow: hidden; box-shadow: 0 30px 56px -40px rgba(74,60,40,0.4); display: flex; flex-direction: column">'
    + '      <div class="hotel-photo" style="height: 440px; position: relative">'
    + '        <img src="assets/hotel-mektan.webp" alt="Emaar Mektan" style="width:100%;height:100%;object-fit:cover" />'
    + '        <div style="position: absolute; top: 16px; left: 16px; background: rgba(20,16,10,0.6); backdrop-filter: blur(4px); color: #faefe2; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; pointer-events: none">' + esc(t.medina) + ' · 2 ' + esc(t.nights2) + '</div>'
    + '      </div>'
    + '      <div style="padding: 30px 32px 34px; display: flex; flex-direction: column; flex: 1">'
    + '        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px">'
    + '          <h3 style="font-family: \'Playfair Display\', serif; font-size: 32px; font-weight: 600; color: #2b261e; margin: 0">Emaar Mektan</h3>'
    + '          <div style="color: #c5a368; font-size: 15px; letter-spacing: 2px">★★★★</div>'
    + '        </div>'
    + '        <p style="font-size: 15px; line-height: 1.65; color: #4d463a; margin: 12px 0 18px">' + esc(t.hotelMektanText) + '</p>'
    + '        <div style="display: flex; flex-wrap: wrap; gap: 8px">' + renderTags(t.mektanTags) + '</div>'
    + '        <button data-video="mektan" class="btn-dark" style="margin-top: 24px; align-self: flex-start; display: inline-flex; align-items: center; gap: 10px; background: #2b261e; color: #faefe2; border: none; cursor: pointer; font-family: \'Plus Jakarta Sans\', sans-serif; padding: 13px 24px; border-radius: 999px; font-size: 14px; font-weight: 700">'
    + '          <span style="display: inline-flex; width: 22px; height: 22px; border-radius: 50%; background: #c5a368; color: #2b261e; align-items: center; justify-content: center; font-size: 9px">▶</span>' + esc(t.ctaVideo)
    + '        </button>'
    + '      </div>'
    + '    </div>'
    + '  </div>'
    + (state.videoUrl
        ? '<div data-video-close style="position: fixed; inset: 0; z-index: 200; background: rgba(20,16,10,0.72); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 24px">'
          + '<div style="position: relative; width: 100%; max-width: 380px">'
          + '<button data-video-close style="position: absolute; top: -46px; right: 0; width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center">✕</button>'
          + '<blockquote class="instagram-media" data-instgrm-permalink="' + esc(state.videoUrl) + '" data-instgrm-version="14" style="background: #fff; border: 0; border-radius: 16px; box-shadow: 0 24px 60px -20px rgba(0,0,0,0.6); margin: 0 auto; max-width: 380px; width: 100%; min-width: 0; padding: 0" onclick="event.stopPropagation()"></blockquote>'
          + '</div></div>'
        : '')
    + '</section>'

    + '<section class="section-pad why-grid" style="max-width: 1200px; margin: 0 auto; padding: 80px 28px; display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 72px; align-items: center">'
    + '  <div style="position: relative"><div style="width: 100%; aspect-ratio: 3 / 4; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 70px -34px rgba(74,60,40,0.5)"><img src="assets/why-photo.webp" alt="" style="width:100%;height:100%;object-fit:cover" /></div></div>'
    + '  <div>'
    + '    <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">' + esc(t.whyKicker) + '</div>'
    + '    <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; line-height: 1.08; font-weight: 600; color: #2b261e; margin: 0 0 18px; text-wrap: balance">' + esc(t.whyTitle) + '</h2>'
    + '    <p style="font-size: 16px; line-height: 1.7; color: #4d463a; margin: 0 0 30px">' + esc(t.whyText) + '</p>'
    + '    <div style="display: grid; gap: 12px">' + renderWhy(t) + '</div>'
    + '  </div>'
    + '</section>'

    + '<section style="background: #2b261e">'
    + '  <div class="section-pad" style="max-width: 1200px; margin: 0 auto; padding: 90px 28px">'
    + '    <div style="text-align: center; max-width: 640px; margin: 0 auto 48px">'
    + '      <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #e6c183; text-transform: uppercase; margin-bottom: 14px">' + esc(t.galleryKicker) + '</div>'
    + '      <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; font-weight: 600; color: #faefe2; margin: 0; text-wrap: balance">' + esc(t.galleryTitle) + '</h2>'
    + '    </div>'
    + '    <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: 200px 200px; gap: 14px">'
    + '      <div class="gal-big" style="grid-column: span 2; grid-row: span 2; border-radius: 18px; overflow: hidden"><img src="assets/gal-1.webp" alt="" style="width:100%;height:100%;object-fit:cover" /></div>'
    + '      <div style="border-radius: 18px; overflow: hidden"><img src="assets/gal-2.webp" alt="" style="width:100%;height:100%;object-fit:cover" /></div>'
    + '      <div style="border-radius: 18px; overflow: hidden"><img src="assets/gal-3.webp" alt="" style="width:100%;height:100%;object-fit:cover" /></div>'
    + '      <div class="gal-wide" style="grid-column: span 2; border-radius: 18px; overflow: hidden"><img src="assets/gal-4.webp" alt="" style="width:100%;height:100%;object-fit:cover" /></div>'
    + '    </div>'
    + '  </div>'
    + '</section>'

    + '<section class="section-pad guide-grid" style="max-width: 1200px; margin: 0 auto; padding: 96px 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center">'
    + '  <div>'
    + '    <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">' + esc(t.guideKicker) + '</div>'
    + '    <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; line-height: 1.08; font-weight: 600; color: #2b261e; margin: 0 0 20px; text-wrap: balance">' + esc(t.guideTitle) + '</h2>'
    + '    <p style="font-size: 17px; line-height: 1.75; color: #4d463a; margin: 0 0 26px">' + esc(t.guideText) + '</p>'
    + '    <div style="display: grid; gap: 16px">' + renderGuidePoints(t) + '</div>'
    + '  </div>'
    + '  <div style="position: relative">'
    + '    <div style="width: 100%; aspect-ratio: 4 / 5; border-radius: 24px; overflow: hidden; box-shadow: 0 40px 70px -34px rgba(74,60,40,0.5)"><img src="assets/guide-photo.webp" alt="" style="width:100%;height:100%;object-fit:cover" /></div>'
    + '    <div style="position: absolute; left: -22px; bottom: 32px; background: rgba(255,255,255,0.96); border: 1px solid rgba(138,106,60,0.18); border-radius: 18px; padding: 18px 22px; box-shadow: 0 22px 40px -22px rgba(74,60,40,0.45)">'
    + '      <div style="font-family: \'Playfair Display\', serif; font-size: 34px; font-weight: 600; color: #2b261e; line-height: 1">100%</div>'
    + '      <div style="font-size: 13px; font-weight: 600; color: #755a26; margin-top: 2px">' + esc(t.guideBadge) + '</div>'
    + '    </div>'
    + '  </div>'
    + '</section>'

    + '<section id="instagram" class="section-pad" style="max-width: 1200px; margin: 0 auto; padding: 96px 28px">'
    + '  <div style="text-align: center; max-width: 640px; margin: 0 auto 48px">'
    + '    <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">Instagram</div>'
    + '    <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; font-weight: 600; color: #2b261e; margin: 0 0 16px; text-wrap: balance">' + esc(t.igTitle) + '</h2>'
    + '    <p style="font-size: 16px; line-height: 1.7; color: #4d463a; margin: 0 auto 24px; max-width: 520px">' + esc(t.igText) + '</p>'
    + '    <a href="https://www.instagram.com/qibla_travel_kazakhstan/" target="_blank" rel="noopener" class="btn-ig" style="display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(95deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%); color: #ffffff; padding: 13px 26px; border-radius: 999px; font-size: 14px; font-weight: 700; box-shadow: 0 8px 22px -8px rgba(214,41,118,0.6)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>@qibla_travel_kazakhstan</a>'
    + '  </div>'
    + '  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 22px; justify-items: center; align-items: start">' + renderReels() + '</div>'
    + '</section>'

    + '<section id="reviews" style="background: #f7ece0">'
    + '  <div class="section-pad" style="max-width: 1200px; margin: 0 auto; padding: 96px 28px">'
    + '    <div style="text-align: center; max-width: 640px; margin: 0 auto 56px">'
    + '      <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">' + esc(t.reviewsKicker) + '</div>'
    + '      <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; font-weight: 600; color: #2b261e; margin: 0; text-wrap: balance">' + esc(t.reviewsTitle) + '</h2>'
    + '    </div>'
    + '    <div class="reviews-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px">' + renderReviews(t) + '</div>'
    + '  </div>'
    + '</section>'

    + '<section id="faq" class="section-pad" style="max-width: 780px; margin: 0 auto; padding: 96px 28px">'
    + '  <div style="text-align: center; margin-bottom: 48px">'
    + '    <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #755a26; text-transform: uppercase; margin-bottom: 14px">FAQ</div>'
    + '    <h2 class="section-title" style="font-family: \'Playfair Display\', serif; font-size: 46px; font-weight: 600; color: #2b261e; margin: 0">' + esc(t.faqTitle) + '</h2>'
    + '  </div>'
    + '  <div style="display: grid; gap: 12px">' + renderFaq(t) + '</div>'
    + '</section>'

    + '<section id="contact" style="position: relative; overflow: hidden; background: linear-gradient(135deg, #2b261e, #503907)">'
    + '  <div class="section-pad" style="position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 100px 28px; text-align: center; color: #faefe2">'
    + '    <div style="font-family: \'Playfair Display\', serif; font-size: 20px; letter-spacing: 0.34em; color: #e6c183; margin-bottom: 20px">QIBLA TRAVEL</div>'
    + '    <h2 class="cta-title" style="font-family: \'Playfair Display\', serif; font-size: 54px; font-weight: 600; margin: 0 0 16px; text-wrap: balance">' + esc(t.ctaTitle) + '</h2>'
    + '    <p style="font-size: 17px; line-height: 1.7; color: rgba(245,235,216,0.8); max-width: 560px; margin: 0 auto 36px">' + esc(t.ctaText) + '</p>'
    + '    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; align-items: center">'
    + '      <a href="' + WA_LINK + '" target="_blank" rel="noopener" class="btn-wa" style="display: inline-flex; align-items: center; gap: 10px; background: #25D366; color: #ffffff; padding: 17px 36px; border-radius: 999px; font-size: 15px; font-weight: 800">' + waIcon(20) + esc(t.ctaMain) + '</a>'
    + '      <a href="tel:+77472228185" class="btn-phone" style="color: #faefe2; font-size: 16px; font-weight: 700; border: 1px solid rgba(245,235,216,0.4); padding: 16px 30px; border-radius: 999px">📞 +7 747 222 8185</a>'
    + '    </div>'
    + '  </div>'
    + '</section>'

    + '<footer style="background: #271900; color: rgba(245,235,216,0.7)">'
    + '  <div class="footer-grid" style="max-width: 1200px; margin: 0 auto; padding: 56px 28px 40px; display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px">'
    + '    <div>'
    + '      <div style="font-family: \'Playfair Display\', serif; font-size: 24px; font-weight: 600; letter-spacing: 0.24em; color: #faefe2">QIBLA TRAVEL</div>'
    + '      <div style="font-size: 12px; letter-spacing: 0.3em; color: #755a26; margin-top: 4px">UMRAH SERVICE</div>'
    + '      <p style="font-size: 14px; line-height: 1.65; margin: 18px 0 0; max-width: 300px">' + esc(t.footerAbout) + '</p>'
    + '    </div>'
    + '    <div>'
    + '      <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: #e6c183; margin-bottom: 16px">' + esc(t.footerNav) + '</div>'
    + '      <div style="display: grid; gap: 10px; font-size: 14px">'
    + '        <a href="#package" class="footer-link" style="color: rgba(245,235,216,0.7)">' + esc(t.navPackage) + '</a>'
    + '        <a href="#program" class="footer-link" style="color: rgba(245,235,216,0.7)">' + esc(t.navProgram) + '</a>'
    + '        <a href="#hotels" class="footer-link" style="color: rgba(245,235,216,0.7)">' + esc(t.navHotels) + '</a>'
    + '        <a href="#faq" class="footer-link" style="color: rgba(245,235,216,0.7)">FAQ</a>'
    + '      </div>'
    + '    </div>'
    + '    <div>'
    + '      <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: #e6c183; margin-bottom: 16px">' + esc(t.footerContacts) + '</div>'
    + '      <div style="display: grid; gap: 10px; font-size: 14px">'
    + '        <a href="tel:+77472228185" class="footer-link" style="color: rgba(245,235,216,0.7)">+7 747 222 8185</a>'
    + '        <a href="' + WA_LINK + '" target="_blank" rel="noopener" class="footer-link" style="color: rgba(245,235,216,0.7)">WhatsApp</a>'
    + '        <a href="https://instagram.com/qibla_travel_kazakhstan" target="_blank" rel="noopener" class="footer-link" style="color: rgba(245,235,216,0.7)">@qibla_travel_kazakhstan</a>'
    + '      </div>'
    + '    </div>'
    + '  </div>'
    + '  <div style="border-top: 1px solid rgba(245,235,216,0.12)">'
    + '    <div style="max-width: 1200px; margin: 0 auto; padding: 20px 28px; font-size: 12.5px; color: rgba(245,235,216,0.5)">© 2026 Qibla Travel · ' + esc(t.footerLine) + '</div>'
    + '  </div>'
    + '</footer>'
    + '</x-dc>';

    // Replacing #app's innerHTML destroys and recreates every node,
    // including ones above the fold (hero video, header) — the browser
    // has nothing stable to anchor the scroll position to during that
    // instant, so it can jump around before settling. Capture/restore
    // it manually so toggling a FAQ item (or switching language, or
    // opening a hotel video) never moves the viewport.
    var scrollX = window.scrollX, scrollY = window.scrollY;
    var app = document.getElementById('app');
    app.innerHTML = html;
    window.scrollTo(scrollX, scrollY);
    processInstagram();
    fitHeroVideo();
    revealHeroVideo();
  }

  // The static poster image covers the brief instant before YouTube's
  // player actually starts rendering frames (thumbnail flash, initial
  // play/pause icon) — fade the iframe in a moment later so that flash
  // is never seen. The title-card / channel-avatar overlay is handled
  // separately below by permanently zooming and cropping the iframe.
  function revealHeroVideo() {
    var frame = document.getElementById('hero-yt-player');
    if (!frame) return;
    setTimeout(function () {
      frame.style.opacity = '1';
    }, 1500);
  }

  function processInstagram() {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }

  // True "background-size: cover" sizing for the hero YouTube iframe.
  // object-fit/aspect-ratio on the iframe itself don't help here — the
  // YouTube player always letterboxes its 16:9 video to whatever box it's
  // given — so instead we size the iframe box itself: whichever dimension
  // (width or height) needs the bigger scale to cover the wrapper wins,
  // the other overflows and gets clipped by the wrapper's overflow:hidden.
  var HERO_VIDEO_RATIO = 16 / 9;
  function fitHeroVideo() {
    var wrap = document.querySelector('.hero-video-wrap');
    var frame = document.querySelector('.hero-video-frame');
    if (!wrap || !frame) return;
    var w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    var width, height;
    if (w / h > HERO_VIDEO_RATIO) {
      width = w;
      height = w / HERO_VIDEO_RATIO;
    } else {
      height = h;
      width = h * HERO_VIDEO_RATIO;
    }
    frame.style.width = width + 'px';
    frame.style.height = height + 'px';
    frame.style.left = ((w - width) / 2) + 'px';
    frame.style.top = ((h - height) / 2) + 'px';
  }
  var heroVideoResizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(heroVideoResizeTimer);
    heroVideoResizeTimer = setTimeout(fitHeroVideo, 100);
  });

  document.addEventListener('click', function (e) {
    var langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      state.lang = langBtn.getAttribute('data-lang');
      render();
      return;
    }
    var faqBtn = e.target.closest('[data-faq-toggle]');
    if (faqBtn) {
      var i = parseInt(faqBtn.getAttribute('data-faq-toggle'), 10);
      state.openFaq = state.openFaq === i ? -1 : i;
      render();
      return;
    }
    var videoBtn = e.target.closest('[data-video]');
    if (videoBtn) {
      var which = videoBtn.getAttribute('data-video');
      state.videoUrl = which === 'grand' ? GRAND_VIDEO : MEKTAN_VIDEO;
      render();
      return;
    }
    if (e.target.closest('[data-video-close]') && e.target.hasAttribute('data-video-close')) {
      state.videoUrl = null;
      render();
    }
  });

  // Re-process embedded Instagram widgets periodically, since the embed
  // script only scans the DOM at load time / on explicit calls.
  setInterval(processInstagram, 1200);

  var hoverCss = document.createElement('style');
  hoverCss.textContent =
    '.btn-wa:hover{background:#1FB955 !important;color:#fff !important}' +
    '.btn-outline:hover{border-color:rgba(43,38,30,0.7) !important;color:#1f1b13 !important}' +
    '.btn-dark:hover{background:#503907 !important}' +
    '.btn-phone:hover{color:#fff !important;border-color:rgba(245,235,216,0.8) !important}' +
    '.btn-ig:hover{filter:brightness(1.08)}' +
    '.footer-link:hover{color:#faefe2 !important}' +
    '.card-hover{transition:box-shadow 0.25s, transform 0.25s}' +
    '.card-hover:hover{box-shadow:0 26px 44px -30px rgba(74,60,40,0.4);transform:translateY(-3px)}';
  document.head.appendChild(hoverCss);

  // ── Mobile adaptation ───────────────────────────────────────────────
  // Uses !important so these author-stylesheet rules win over the
  // template's inline styles (inline normal declarations lose to
  // author !important in the CSS cascade).
  var mobileCss = document.createElement('style');
  mobileCss.textContent =
    /* Tablet: hide the sticky nav links (no hamburger yet), keep logo + lang + WA */
    '@media (max-width: 900px){' +
    '  .site-nav{display:none !important}' +
    '  .intro-grid,.why-grid,.guide-grid{grid-template-columns:1fr !important;gap:36px !important}' +
    '  .why-grid > div:first-child,.guide-grid > div:last-child{order:-1}' +
    '  .hotels-grid{grid-template-columns:1fr !important}' +
    '  .pkg-grid{grid-template-columns:repeat(2,1fr) !important}' +
    '  .reviews-grid{grid-template-columns:1fr 1fr !important}' +
    '  .footer-grid{grid-template-columns:1fr 1fr !important;gap:28px !important}' +
    '}' +
    /* Phones */
    '@media (max-width: 640px){' +
    '  .hero-inner{padding:96px 20px 48px !important}' +
    '  .hero-title{font-size:38px !important;margin:20px 0 16px !important}' +
    '  .hero-cta-row{flex-direction:column;align-items:stretch !important}' +
    '  .hero-cta-row a{justify-content:center;text-align:center}' +
    '  .hero-badges{flex-direction:column}' +
    '  .hero-badges > div{width:100%;box-sizing:border-box}' +
    '  .nav-wa-label{display:none}' +
    '  .nav-wa{padding:10px 12px !important}' +
    '  .section-pad{padding-left:20px !important;padding-right:20px !important;padding-top:56px !important;padding-bottom:32px !important}' +
    '  .section-title,.cta-title{font-size:30px !important;line-height:1.15 !important}' +
    '  .cta-title{font-size:32px !important}' +
    '  .stats-grid{grid-template-columns:1fr 1fr !important;gap:16px !important;padding-left:20px !important;padding-right:20px !important}' +
    '  .intro-grid,.why-grid,.guide-grid{padding-left:20px !important;padding-right:20px !important;gap:28px !important}' +
    '  .pkg-grid{grid-template-columns:1fr !important;padding-left:20px !important;padding-right:20px !important}' +
    '  #hotels,#package,#program > div,#reviews > div,#instagram,#faq{padding-left:20px !important;padding-right:20px !important}' +
    '  .hotels-grid{padding-left:0 !important;padding-right:0 !important}' +
    '  .hotel-photo{height:260px !important}' +
    '  .program-grid{padding-left:0 !important}' +
    '  .program-row{grid-template-columns:52px 1fr !important;gap:14px !important}' +
    '  .program-row [style*="width: 62px"]{width:52px !important;height:52px !important}' +
    '  .gallery-grid{grid-template-columns:1fr 1fr !important;grid-template-rows:130px 130px 130px !important;padding-left:20px !important;padding-right:20px !important}' +
    '  .gal-big{grid-column:span 2 !important;grid-row:span 1 !important}' +
    '  .gal-wide{grid-column:span 2 !important}' +
    '  .reviews-grid{grid-template-columns:1fr !important;padding-left:20px !important;padding-right:20px !important}' +
    '  .footer-grid{grid-template-columns:1fr !important;padding-left:20px !important;padding-right:20px !important}' +
    '}' +
    '@media (max-width: 380px){' +
    '  .hero-title{font-size:30px !important}' +
    '  .stats-grid{grid-template-columns:1fr 1fr !important}' +
    '}';
  document.head.appendChild(mobileCss);

  render();
})();
