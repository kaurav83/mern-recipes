import { useState, useEffect, useCallback } from 'react';
import request from 'axios';

import { getSaladsList } from '../../api';
import { ISalad } from '../../types';

import { SaladCard } from '../SaladCard/SaladCard';

export const SaladDashboard = () => {
  const [saladList, setSaladList] = useState<ISalad[]>();

  useEffect(() => {
    getAllSalads();
  }, []);

  const getAllSalads = useCallback(async () => {
    try {
      const { data } = await getSaladsList();

      setSaladList(data);
    } catch (err) {
      if (request.isAxiosError(err)) {
        console.log(err.message);
      }
    }
  }, []);

  return (
    <>
      {saladList && saladList.map(
        (salad) => <SaladCard key={salad._id} {...salad} />)
      }
    </>
  )
};
