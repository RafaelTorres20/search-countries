import styled from 'styled-components';const Root = styled.div`
  @media screen and (max-width: 700px) {
    bottom: calc(50% - 100px);
    left: 5vw;
    height: 30%;
    width: 90vw;
    position: absolute;
    bottom: 20px;
  }
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 15%;
  z-index: 10;
  background-color: rgba(45, 52, 54, 0.5);
  border-radius: 10px;
  height: 300px;
  overflow: hidden;
`;

const Head = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
  color: #fff;
  font-size: 20px;
  color: white;
  display: flex;
  font-weight: bold;
  justify-content: center;
`;

const HeadButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  flex: 1;
`;

const HeadButton = styled.button`
  background-color: white;
  width: auto;
  font-weight: bold;
  color: #2d3436;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-right: 5px;
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

export const Styles = { Root, Title, Button, List, Head, HeadButton, HeadButtons };
