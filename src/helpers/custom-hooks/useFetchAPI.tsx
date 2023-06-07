import useSWR from 'swr';

const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    const data = await response.json();
    return data;
  } catch (error:any) {
    throw new Error('Failed to fetch data', error);
  }
};

const useFetchAPI = (url:string) => {
  const { data, error, isValidating } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    isFetching: isValidating,
  };
};

export default useFetchAPI;

