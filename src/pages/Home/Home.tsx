import { CircularProgress } from '@mui/material';
import { Globes } from '../../components/Globe/Globe';
import { Header } from '../../components/Header';
import { History } from '../../components/History';
import { Table } from '../../components/Table';
import { useSearch } from '../../hooks/useSearch';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

export const Home = () => {
  const { countries, isLoading, error, setValueSearched } = useSearch();
  const [searchs, setSearchs] = useState<any[]>([]);
  const e = error as AxiosError;
  useEffect(() => {
    if (e?.response?.status === 404) {
      toast.warn('No country found with this name', { toastId: 'error' });
    }
    if (e !== undefined && e !== null && e.response?.status !== 404) {
      toast.error('Internal server error', { toastId: 'internal' });
    }
  }, [e]);
  useEffect(() => {
    const searchs = localStorage.getItem('@search');
    if (searchs) {
      setSearchs(JSON.parse(searchs));
    }
  }, []);
  return (
    <div>
      <Header.Root>
        <Header.Title>Power2Go</Header.Title>
        <Header.Search />
        <Header.Switch />
      </Header.Root>
      <Table.Root>
        <Table.Header>
          <Table.Columns>Flag</Table.Columns>
          <Table.Columns>Name</Table.Columns>
          <Table.Columns>Capital</Table.Columns>
          <Table.Columns>Population</Table.Columns>
          <Table.Columns>Currency</Table.Columns>
          <Table.Columns>Languages</Table.Columns>
        </Table.Header>
        <Table.List>
          {isLoading && (
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress style={{ color: 'white' }} size={60} />
            </div>
          )}
          {countries?.map((country) => {
            return (
              <Table.Line key={country.name.common}>
                <Table.Columns>
                  <Table.LineImage src={country.flags.png} />
                </Table.Columns>
                <Table.Columns>{country.name.common}</Table.Columns>
                <Table.Columns>{country.capital}</Table.Columns>
                <Table.Columns>{country.population.toLocaleString()}</Table.Columns>
                <Table.Columns>
                  {Object.values(country?.currencies ?? {})
                    .map((currency) => {
                      return currency.name;
                    })
                    ?.join(', ')}
                </Table.Columns>
                <Table.Columns>
                  {Object.values(country?.languages ?? {})
                    .map((language) => {
                      return language;
                    })
                    ?.join(', ')}
                </Table.Columns>
              </Table.Line>
            );
          })}
        </Table.List>
      </Table.Root>
      <History.Root>
        <History.Head>
          <History.Title>History</History.Title>
          <History.HeadButton onClick={() => {}}>Export to csv</History.HeadButton>
        </History.Head>
        <History.List>
          {searchs?.map((search) => {
            return (
              <History.Button
                key={search.date}
                onClick={() => {
                  setValueSearched(search.value);
                }}
              >
                {search?.value}
              </History.Button>
            );
          })}
        </History.List>
      </History.Root>
      <Globes />
    </div>
  );
};
