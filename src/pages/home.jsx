import { Col, Row } from "react-grid-system";
import Title from "../components/Title";
import Text from "../components/Text";
import { SelectorsBox } from "../components/SelectorsBox";
import { Icon } from "../components/Icon";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Divider }  from "../components/Divider";


export const Home = () => (
  <>
    <Col sm={12}>
      <Row align="center">
        <Col sm={6}>
          <Title>Reports</Title>
        </Col>
        <Col sm={6} >
          <Text size="small" align="right" color="primary">
            <Icon icon={faDownload} marginright="5px"/>
            Download
          </Text>
        </Col>
      </Row>
      <Divider />
    </Col>

    <Col sm={12}>
    <Row >
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
      </Row>
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



