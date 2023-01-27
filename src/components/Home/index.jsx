//import styles from "./styles.module.scss";
import { BsParagraph } from "react-icons/bs";
import styled from "styled-components";
import logo from "./drive.png";
const Home = () => {
  const ferrari = [
    "La Ferrari F12",
    "La Ferrari F412",
    "La Ferrari F488",
    "La Ferrari F812",
  ];

  const Main = styled.div`
    height: 900px;
    width: calc(100% + 10px);
    background-color: black;
  `;

  const Paragraph = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    font-style: normal;
    font-size: 20px;
    font-family: Tahoma, sans-serif;
    line-height: 1.5;
  `;

  const Image = styled.div`
    img {
      display: block;
      height: calc(100%);
      width: calc(100%);
      border-top-left-radius: 10px;
    }
  `;
  return (
    <Main>
      <Paragraph>
        Scegli la tua ferrari preferita, ti verrà data la possibilita di
        provarla in pista.
        <br />
        Potrai scegliere tra:
        <br />
        {ferrari.map((lista) => " " + lista + "! ")}
      </Paragraph>

      <Image>
        <img src={logo} alt="React Image" />
      </Image>
    </Main>
  );
};

export default Home;
