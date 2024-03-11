import { Globes } from '../../components/Globe/Globe';
import { Header } from '../../components/Header';

export const Home = () => {
  return (
    <div>
      <Header.Root>
        <Header.Title>Power2Go</Header.Title>
        <Header.Search />
        <Header.Switch />
      </Header.Root>
      <Globes />
    </div>
  );
};
