import { useContext } from 'react';
import { RingContext } from '../contexts/RingContext';

function Footer() {
  const clickedRing = useContext(RingContext);

  return (
    <footer className={`about ${clickedRing && 'disabled'}`}>
      <article className='about__walk'>
        <div className='about__column'>
          <h2 className='heading'>Мотивация</h2>
          <p className='text'>
            24&nbsp;февраля 2022 года армия Российской Федерации начала
            полномасштабную войну против Украины. Этот конфликт повлиял
            на&nbsp;нашу жизнь, ведь мы&nbsp;родились и&nbsp;выросли
            в&nbsp;России. Мариам переехала в&nbsp;Тбилиси ещё
            в&nbsp;2014&nbsp;году, когда российские войска аннексировали
            Крым, Лиза и&nbsp;Полина&nbsp;&mdash; весной 2022&nbsp;года.
            Война заставила нас глубже исследовать природу конфликтов,
            историческую память и&nbsp;восстановление мира. Раньше
            каждая из&nbsp;нас работала над проектами, которые были
            связаны с&nbsp;экологией и&nbsp;природой, но&nbsp;никогда
            в&nbsp;контексте конфликтов и&nbsp;войн.</p>
        </div>
        <div className='about__column'>
          <h2 className='heading'>Методы</h2>
          <p className='text'>Этот проект&nbsp;&mdash; это попытка уйти
            от&nbsp;антропоцентрического способа думать о&nbsp;конфликте,
            войне и&nbsp;памяти о&nbsp;ней. Мы&nbsp;хотим посмотреть
            на&nbsp;эти вопросы с&nbsp;точки зрения природы. </p>
          <p className='text'>Когда мы&nbsp;начали работу над проектом,
            мы&nbsp;размышляли о&nbsp;топонимии разных мест, названных
            в&nbsp;честь сражений. В&nbsp;Грузии одним из&nbsp;самых
            значимых исторических событий считается Дидгорская битва
            между грузинской армией и&nbsp;сельджуками. Этому сражению
            посвящен памятник на&nbsp;холме Дидгори, в&nbsp;районе
            Квемо-Картли, Грузия.</p>
          <p className='text'>В&nbsp;качестве метода мы&nbsp;совершили 3-х
            дневное путешествие, которое разделили на&nbsp;2&nbsp;части:
            сначала исследовали сам монумент и&nbsp;окрестности
            Дидгорского холма, затем отправились в&nbsp;поход
            в&nbsp;Национальный парк Алгети, который находится рядом.</p>
          <p className='text'>Но&nbsp;неважно, о&nbsp;каком сражении или
            монументе говорить. Концепция остается.</p>
        </div>
        <div className='about__column'>
          <h2 className='heading'>Вдохновение</h2>
          <p className='text'>Есть свидетельства того, что коренные жители
            Северной Америки записывали историю, делая маленькие рисунки
            по&nbsp;спирали, это называлось Winter Count. </p>
          <p className='text'>Они выбирали одно событие, которое было самым
            значимым в&nbsp;прошедшем году, и&nbsp;оно становилось
            центральным. Вокруг него по&nbsp;спирали
            в&nbsp;хронологическом порядке они дорисовывали
            последующие, и&nbsp;тем самым расширяли круг.</p>
          <p className='text'>По&nbsp;аналогии с&nbsp;Winter count,
            мы&nbsp;расположили темы проекта кольцами. Однако
            вы&nbsp;можете выбрать свой собственный путь для изучения
            проекта&nbsp;&mdash; от&nbsp;центра к&nbsp;краю, наоборот
            или в&nbsp;произвольном порядке.</p>
          <p className='text'>Здесь 9&nbsp;тематических блоков, содержащих
            фото, видео, аудио и&nbsp;тексты.</p>
          <p className='text'>Приятного путешествия!</p>
        </div>
      </article>
      <div className='about__names'>
        <p className='text'>автор</p>
        <p className='text'>автор</p>
        <p className='text'>автор</p>
        <p className='text'>web</p>
        <p className='text'>дизайн</p>
        <p className='text'>анимация</p>
        <h2 className='text about__name'>Лиза Тезнева</h2>
        <h2 className='text about__name'>Полина Шубина</h2>
        <h2 className='text about__name'>Мариам Песвианидзе</h2>
        <h2 className='text about__name'>Александр Песвианидзе</h2>
        <h2 className='text about__name'>Илья Жаркин</h2>
        <h2 className='text about__name'>Эмиль Хафизов</h2>\
      </div>
    </footer>
  )
}

export { Footer }
