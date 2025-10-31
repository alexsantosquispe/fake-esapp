import { getRandomUserPhoto } from '../store/services/api';
import { useQuery } from '@tanstack/react-query';

export const useGetRandomPhoto = (name: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['photo', name],
    queryFn: () => getRandomUserPhoto(name),
    enabled: !!name
  });

  return {
    photo: data,
    error,
    isLoading
  };
};
