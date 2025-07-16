import { Col } from "react-grid-system";
import Title from "../components/Title";
import { SelectorsBox } from "../components/SelectorsBox";


export const Main = () => (
    <>
      <Col sm={12}>
        <Title/>
      </Col>

      <Col sm={4} >
        <SelectorsBox>
          Timeframe:
        </SelectorsBox>
      </Col>

      <Col sm={4} >
        <SelectorsBox>
          People:
        </SelectorsBox>
      </Col>

      <Col sm={4} >
        <SelectorsBox>
          Topic:
        </SelectorsBox>
      </Col>

      <Col sm={6}>
        <p>Figs</p>
      </Col>

      <Col sm={6}>
        <p>Charts</p>
      </Col>

      <Col sm={6}>
        <p>Weakest Topics</p>
      </Col>

      <Col sm={6}>
        <p>Strongest Topics</p>
      </Col>

      <Col sm={6}>
        <p>User Leaderboard</p>
      </Col>
      <Col sm={6}>
        <p>Groups Leaderboard</p>
      </Col>
</>

);



