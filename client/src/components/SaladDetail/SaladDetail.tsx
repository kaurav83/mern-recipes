import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, NavLink } from "react-router-dom";
import request from 'axios';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { getSaladById } from '../../api';
import { ISalad } from '../../types';

export const SaladDetail = () => {
  const { id } = useParams();
  const [salad, setSalad] = useState<ISalad>();

  useEffect(() => {
    getAllSalads();
  }, []);

  const getAllSalads = useCallback(async () => {
    try {
      if (id) {
        const { data } = await getSaladById(id);

        setSalad(data);
      }

    } catch (err) {
      if (request.isAxiosError(err)) {
        console.log(err.message);
      }
    }
  }, [id]);

  const convertedDate = useMemo(() => {
    if (salad) {
      const date = new Date(salad.expired);

      return format(date, "d MMMM yyyy", { locale: ruLocale });
    }
  }, [salad]);

  return (
    <>
      <NavLink to='/'>Вернуться на главную</NavLink>

      {salad && (
        <div>
          <h2 className="salad-detail__title">
            Салат {salad.name}
          </h2>

          <p className="salad-detail__text">
            Специи: {salad.isSpicy ? 'посолено, поперчено' : 'нет специй'}
          </p>

          <p className="salad-detail__text">
            Диетическое: {salad.dietType}
          </p>

          <p className="salad-detail__text">
            Соус: {salad.sauce}
          </p>

          <p className="salad-detail__text">
            Вес: {salad.weight}
          </p>

          <p className="salad-detail__text">
            Годен к употреблению до {convertedDate}
          </p>
        </div>
      )}
    </>
  )
};
