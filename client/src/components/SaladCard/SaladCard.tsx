import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { ISalad } from '../../types';

export const SaladCard = (props: ISalad) => {
  const {
    name,
    weight,
    sauce,
    dietType,
    expired,
    isSpicy
  } = props;

  const convertedDate = useMemo(() => {
    const date = new Date(expired);

    return format(date, "d MMMM yyyy", { locale: ruLocale });
  }, [expired]);

  return (
    <NavLink to={`/salad-details/${props._id}`} className="salad-card">
      <h2 className="salad-card__title">
        Салат {name}
      </h2>

      <p className="salad-card__text">
        Специи: {isSpicy ? 'посолено, поперчено' : 'нет специй'}
      </p>

      <p className="salad-card__text">
        Диетическое: {dietType}
      </p>

      <p className="salad-card__text">
        Соус: {sauce}
      </p>

      <p className="salad-card__text">
        Вес: {weight}
      </p>

      <p className="salad-card__text">
        Годен к употреблению до {convertedDate}
      </p>
    </NavLink>
  )
};
