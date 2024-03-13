import styled from 'styled-components';
import { Country } from '../../models/country';

const Root = styled.div<{ $country: Country | undefined }>`
  position: absolute;
  flex-direction: column;
  bottom: ${({ $country }) => ($country ? '5%' : '150vh')};
  left: 65%;
  height: 45%;
  width: 25%;
  display: flex;
  visibility: ${({ $country }) => ($country ? 'visible' : 'hidden')};
  background-color: rgba(45, 52, 54, 0.8);
  box-sizing: border-box;
  border: 2px solid #ecf0f1;
  z-index: 11;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 700px) {
    bottom: ${({ $country }) => ($country ? 'calc(50% + 80px)' : 'calc(100% + 500px)')};
    height: 250px;
    width: 90%;
    left: 5%;
  }
`;
const Stick = styled.div`
  position: absolute;
  @media screen and (max-width: 700px) {
    top: 100%;
    left: calc(50% - 5px);
    height: 80px;
    width: 2px;
    border-radius: 0px 0px 0 0;
  }
  bottom: 100%;
  left: -60%;
  width: 160%;
  box-sizing: border-box;
  height: 2px;
  background-color: #ecf0f1;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 10px 0 0;
`;

const Image = styled.img<{ $src: string | undefined }>`
  width: 80px;
  height: 60px;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
`;

const Line = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid white;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  cursor: pointer;
`;

const Cell = styled.div`
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Styles = { Root, Stick, Image, Line, Cell };
