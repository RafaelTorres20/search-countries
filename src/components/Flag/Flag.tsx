import { Country } from '../../models/country';
import { Flag } from './index';

export const CountryFlag = ({ country }: { country: Country | undefined }) => {
  return (
    <Flag.Root>
      <Flag.Image src={country?.flags?.png} field="Country" name={country?.name.common} />
      <Flag.Line>
        <Flag.Cell>
          <Flag.Cell>Capital</Flag.Cell>
          <Flag.Cell>{country?.capital}</Flag.Cell>
        </Flag.Cell>
      </Flag.Line>
      <Flag.Line>
        <Flag.Cell>
          <Flag.Cell>Population</Flag.Cell>
          <Flag.Cell>{country?.population.toLocaleString()}</Flag.Cell>
        </Flag.Cell>
      </Flag.Line>
      <Flag.Line>
        <Flag.Cell>
          <Flag.Cell>Currency</Flag.Cell>
          <Flag.Cell>
            {Object.values(country?.currencies ?? {})
              .map((currency) => {
                return currency.name;
              })
              ?.join(', ')}
          </Flag.Cell>
        </Flag.Cell>
      </Flag.Line>
      <Flag.Line>
        <Flag.Cell>
          <Flag.Cell>Languages</Flag.Cell>
          <Flag.Cell>
            {Object.values(country?.languages ?? {})
              .map((language) => {
                return language;
              })
              ?.join(', ')}
          </Flag.Cell>
        </Flag.Cell>
      </Flag.Line>
    </Flag.Root>
  );
};
