import axios from 'axios';
import { useCallback, useState } from 'react';
import { BoosterCard } from '../model/BoosterCard';
import { SetCode } from '../model/SorceryCard';

export function useFetchBoosters(setCode: SetCode, count: number) {
  const [boosters, setBoosters] = useState<BoosterCard[][]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
    
  const fetchBoosters = useCallback(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fourcores.xyz/api/boosters?setCode=${setCode}&count=${count}`);
        setBoosters(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
              
    };
    fetch();
  }, [setCode, count]);

  return { fetchBoosters, boosters, loading, error };
}