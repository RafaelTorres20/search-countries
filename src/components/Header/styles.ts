import styled from 'styled-components';

const Root = styled.div`
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
  color: white;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;

const Search = styled.div`
  color: white;
  width: 60%;
  height: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  border-radius: 100px;
  background-color: #2d3436;
  padding-left: 40px;
  color: white;
  outline: none;
  font-size: 20px;
`;

const Switch = styled.div`
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

export const Styles = { Root, Title, Search, Switch, SearchInput, SwitchButton };
