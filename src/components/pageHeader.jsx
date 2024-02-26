import GlobalNavbar from "../components/navbar";
import BreadCrumb from "../components/breadcrumb";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function PageHeadder({ pageName }) {
  return (
    <div>
      <Row>
        <Col>
          <GlobalNavbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <BreadCrumb subPage={pageName} />
          </Col>
        </Col>
      </Row>
    </div>
  );
}
