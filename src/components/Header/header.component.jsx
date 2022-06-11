import "./header.style.scss";

import { Container, Navbar, Row } from "react-bootstrap";

export default function Header() {
  return (
      <Navbar className="header" bg="primary">
        <Container fluid>
          <div
            className="mx-auto my-auto py-5 text-white"
          >
            EpiSound
          </div>
        </Container>
      </Navbar>
  );
}
