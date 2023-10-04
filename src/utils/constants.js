import HistoryAboutGraffity from '../images/MartaKuperHistoryAboutGraffity.svg';
import MickJagger from '../images/MickJagger.svg';
import Polaroid from '../images/Polaroid.svg';
import Skateboard from '../images/Skateboard.svg';
import SkateboardOnTheRoad from '../images/SkateboardOnTheRoad.svg';
import TheBooksellers from '../images/TheBooksellers.svg';
import MerceCunningham from '../images/MerceCunningham.svg';
import Graffity from '../images/Graffity.svg';
import RunMarathon from '../images/RunMarathon.svg';
import KeithHaringStreetArt from '../images/KeithHaringStreetArt.svg';
import SmokingMan from '../images/SmokingMan.svg';
import IfIThinkOfGermanyAtNight from '../images/IfIThinkOfGermanyAtNight.svg';
import WarOfArt from '../images/WarOfArt.svg';
import GimmeDanger from '../images/GimmeDanger.svg';
import RunMan from '../images/RunMan.svg';
import Parkur from '../images/Parkur.svg';

//header
export const HeaderData = {
  signup: 'Регистрация',
  signin: 'Войти'
};

//navigation
export const NavigationData = {
  film: 'Фильмы',
  savedFilm: 'Сохраненные фильмы',
  profile: 'Аккаунт'
};

//promo
export const PromoData = {
  title: 'Учебный проект студента факультета Веб-разработки.'
};

//NavTAb
export const NavTabData = {
  projects: 'О проекте',
  techs: 'Технологии',
  student: 'Студент'
};

//About projects
export const AboutProjectData = {
  title: 'О проекте',
  stages: [
    {
      title: 'Дипломный проект включал 5 этапов',
      description:
        'Составление плана, работа над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
    },
    {
      title: 'На выполнение диплома ушло 5 недель',
      description:
        'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
    }
  ],
  timeframes: ['1 неделя', '4 недели'],
  skills: ['Back-end', 'Front-end']
};

//techs
export const AboutTechsData = {
  title: 'Технологии',
  stages: [
    {
      title: '7 технологий',
      description:
        'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.'
    }
  ],
  skills: ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
};

//about Me
export const AboutMeData = {
  title: 'Студент',
  stages: [
    {
      title: 'Виталий',
      subtitle: 'Фронтенд-разработчик, 30 лет',
      description:
        'Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.C 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.',
      site: 'Github',
      githubLink: 'https://github.com/Olyaolya13'
    }
  ]
};

//portfolio
export const PortfolioData = {
  about: 'Портфолио',
  skills: ['Статичный сайт', 'Адаптивный сайт', 'Одностраничное приложение'],
  skillsSite: [
    'https://github.com/Olyaolya13/how-to-learn',
    'https://github.com/Olyaolya13/Thalby',
    'https://github.com/Olyaolya13/react-mesto-api-full-gha'
  ]
};

//not found page
export const NotFoundPageData = {
  number: '404',
  text: 'Страница не найдена',
  buttonText: 'Назад'
};

//footer
export const FooterData = {
  title: 'Учебный проект Яндекс.Практикум х BeatFilm.',
  year: '2023',
  text: 'Яндекс.Практикум',
  subtitle: 'Github',
  linkGithub: 'https://github.com/yandex-praktikum?tab=repositories',
  linkYandex: 'https://practicum.yandex.ru/'
};

//login
export const LoginData = {
  title: 'Рады видеть!',
  signup: 'Регистрация',
  question: 'Ещё не зарегистрированы?',
  name: 'Имя',
  email: 'E-mail',
  password: 'Пароль',
  signin: 'Войти'
};

//register
export const RegisterData = {
  title: 'Добро пожаловать!',
  signup: 'Зарегистрироваться',
  question: 'Уже зарегистрированы?',
  name: 'Имя',
  email: 'E-mail',
  password: 'Пароль',
  signin: 'Войти'
};

//profile

export const ProfileData = {
  title: 'Имя',
  email: 'E-mai',
  edit: 'Редактировать',
  save: 'Сохранить',
  signout: 'Выйти из аккаунта'
};

//search form
export const SearchFormData = {
  shortFilm: 'Короткометражки'
};

//Movies
export const MoviesCardListData = [
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: HistoryAboutGraffity,
    alt: 'Черно-белая картина, улыбающиеся девушка - фотограф стоит на фоне домов с мальчиками около машины'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: Polaroid,
    alt: 'Мужчина на фоне постановочного света, картинка в стиле поларойд'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: MickJagger,
    alt: 'Мик Джаггер с гитарой за столом, черно белая картинка'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: Skateboard,
    alt: 'Мужчина, катающийся на скейтборде, внутри здания с колоннами'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: SkateboardOnTheRoad,
    alt: 'Молодые люди, катающиеся на скейтбордах по дороге на улице в солнечное время в городе '
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: TheBooksellers,
    alt: 'Продавец книг, переберающий их в квартире в светлое время суток,'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: MerceCunningham,
    alt: 'Мерс Каннингем с товарищами около забора здания'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: Graffity,
    alt: 'Граффити на поезде на станции'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: RunMarathon,
    alt: 'Множество людей,бегущих марафон'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: KeithHaringStreetArt,
    alt: 'Молодые люди на вечеринке, черно белая картинка'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: SmokingMan,
    alt: 'Молодой, курящий парень'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: IfIThinkOfGermanyAtNight,
    alt: 'Молодой мужчина в очках, сидящий в студии звукозаписи'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: WarOfArt,
    alt: 'Люди, сидящие в большом зале, над ними два портрета лидеров КНДР '
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: GimmeDanger,
    alt: 'Молодые люди около кирпичной стены здания, вид сверху'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: RunMan,
    alt: 'Молодой мужчина, подбегающий к финишной леньте'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: Parkur,
    alt: 'Множетсво молодых людей, загимающихся на железных конструкцяиях'
  }
];

export const savedMoviesData = [
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: HistoryAboutGraffity,
    alt: 'Picture: History About Graffity'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: Polaroid,
    alt: 'Picture: Polaroid Photo'
  },
  {
    title: '33 слова о дизайне',
    hours: '1ч',
    minutes: '42м',
    image: MickJagger,
    alt: 'Picture: MickJagger'
  }
];

//move card list
export const MoviesCardLisShowMoreBtnData = {
  title: 'Ещё'
};
