import { useState, useEffect, useCallback } from 'react';
import request from 'axios';

import { getSaladsList } from '../../api';
import { ISalad } from '../../types';

import { SaladCard } from '../SaladCard/SaladCard';
import { Loader } from '../../shared/Loader/Loader';

export const SaladDashboard = () => {
  const [saladList, setSaladList] = useState<ISalad[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAllSalads();
  }, []);

  const getAllSalads = useCallback(async () => {
    try {
      const { data } = await getSaladsList();

      setSaladList(data);
      setLoading(false);
    } catch (err) {
      if (request.isAxiosError(err)) {
        console.log(err.message);
      }
    }
  }, []);

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {saladList && saladList.map(
        (salad) => <SaladCard key={salad._id} {...salad} />)
      }
    </>
  )
};
