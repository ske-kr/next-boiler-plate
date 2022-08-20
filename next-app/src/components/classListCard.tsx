import Link from "next/link";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

export default function ClassListCard({ gymList }: any) {
  return (
    <Card className="mt-5">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs lg="4" style={{ margin: 0, padding: 0 }}>
            <Image
              src={gymList.image}
              alt="pushup picture"
              className="img-fluid"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{gymList.name}</Card.Title>
              <Card.Text>{gymList.exercise_type}</Card.Text>
              <Button variant="primary">
                <Link
                  href={{
                    pathname: `/classes/${gymList.id}`,
                    query: gymList.id,
                  }}
                >
                  Go
                </Link>
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
