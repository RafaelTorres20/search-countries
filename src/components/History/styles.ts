import styled from 'styled-components';

const Root = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 15%;
  z-index: 10;
  background-color: rgba(45, 52, 54, 0.5);
  border-radius: 10px;
  height: 300px;
  margin-bottom: 2%;
  margin-left: 2%;
`;

const Head = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #fff;
  font-size: 20px;
  color: white;
  display: flex;
  font-weight: bold;
  justify-content: center;
`;

const HeadButton = styled.button`
  background-color: white;
  width: auto;
  font-weight: bold;
  color: #2d3436;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = styled.div`
  background-color: white;
  width: 90%;
  font-weight: bold;
  color: #2d3436;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const List = styled.div`
  overflow-y: scroll;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 100px;
    width: 7px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
    width: 3px;
    border-radius: 100px;
  }
`;

export const Styles = { Root, Title, Button, List, Head, HeadButton };
