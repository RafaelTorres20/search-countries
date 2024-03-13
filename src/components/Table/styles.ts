import styled from 'styled-components';const Root = styled.div<{ $switch: boolean }>`
  left: ${({ $switch }) => {
    if ($switch) return '20vw';
    return '-100vw';
  }};

  position: absolute;
  bottom: calc(50% - 300px);
  height: 600px;
  width: 60vw;
  padding: 20px;
  display: flex;
  visibility: ${({ $switch }) => ($switch ? 'visible' : 'hidden')};
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(45, 52, 54, 0.5);
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  z-index: 10;
  @media screen and (max-width: 700px) {
    bottom: calc(50% - 100px);
    left: ${({ $switch }) => {
      if ($switch) return '5%';
      return '-100vw';
    }};
    height: 40%;
    width: 90%;
  }
`;

const Header = styled.div`
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
  background-color: #2d3436;
  height: 50px;
  margin-right: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Columns = styled.div`
  @media screen and (max-width: 700px) {
    font-size: 9px;
  }
  color: white;
  display: flex;
  flex: 1;
  max-width: 16.666%;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

const Line = styled.div`
  @media screen and (max-width: 700px) {
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
  display: flex;
  margin-right: 10px;
  width: calc(100% - 10px);
  border-bottom: 2px solid white;
  padding-bottom: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const LineImage = styled.img<{ $src: string }>`
  background-image: url(${(props) => props.$src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 30px;
  width: 40px;
`;

export const Styles = { Root, Header, Columns, List, Line, LineImage };
