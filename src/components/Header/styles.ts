import styled from 'styled-components';
const Root = styled.div`
  @media screen and (max-width: 700px) {
    justify-content: space-around;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  flex-direction: row;
  position: absolute;
  top: 0;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  z-index: 10;
  height: 100px;
`;

const Title = styled.div`
  @media screen and (max-width: 600px) {
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 20px;
  }

  color: white;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Search = styled.div`
  @media screen and (max-width: 700px) {
    width: 90%;
    height: 40px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 50%;
  height: 50px;
`;

const SearchButton = styled.button`
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
  width: 50px;
  height: 100%;
  background-color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  color: #2d3436;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const SearchInput = styled.input`
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  background-color: #2d3436;
  padding-left: 40px;
  color: white;
  outline: none;
  font-size: 20px;
`;

const Switch = styled.div`
  @media screen and (max-width: 700px) {
    width: 100px;
    height: 60px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
  width: 10%;
  height: 100%;
`;

const SwitchButton = styled.div<{ $selected: boolean; $leftButton: number }>`
  width: 50%;
  height: 70%;
  background-color: ${({ $selected }) => {
    return $selected ? '#2d3436' : 'white';
  }};
  color: ${({ $selected }) => ($selected ? 'white' : '#2d3436')};
  border-top-left-radius: ${({ $leftButton }) => ($leftButton === 1 ? '10px' : '0px')};
  border-top-right-radius: ${({ $leftButton }) => ($leftButton === 1 ? '0px' : '10px')};
  border-bottom-left-radius: ${({ $leftButton }) => ($leftButton === 1 ? '10px' : '0px')};
  border-bottom-right-radius: ${({ $leftButton }) =>
    $leftButton === 1 ? '0px' : '10px'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Styles = {
  Root,
  Title,
  Search,
  Switch,
  SearchInput,
  SwitchButton,
  SearchButton,
  SearchContainer,
};
