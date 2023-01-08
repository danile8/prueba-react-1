import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MiApi = () => {
  const [result, setResult] = useState([]);
  const [byCity, setByCity] = useState("");
  const [order, setOrder] = useState("ASC");

  const getData = async () => {
    const response = await fetch("https://api.openbrewerydb.org/breweries");
    const data = await response.json();
    setResult(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <input
        className="m-2"
        type="text"
        placeholder="Search by City"
        onChange={(e) => setByCity(e.target.value)}
        value={byCity}
      ></input>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>

      <div>
        <Row>
          {result
            .sort(
              order === "DESC"
                ? (a, b) => {
                    if (a.city > b.city) {
                      return -1;
                    }
                    if (a.city < b.city) {
                      return 1;
                    }
                    return 0;
                  }
                : (a, b) => {
                    if (a.city < b.city) {
                      return -1;
                    }
                    if (a.city > b.city) {
                      return 1;
                    }
                    return 0;
                  }
            )
            .filter((item) => {
              return item.city
                .toLowerCase()
                .includes(byCity.toLocaleLowerCase());
            })
            .map((brewery) => {
              return (
                <Col xs={4} md={4}>
                  <Card
                    className="m-4"
                    key={brewery.id}
                    style={{ width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title className="text-dark">
                        {brewery.name}
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{brewery.street}</ListGroup.Item>
                      <ListGroup.Item>{brewery.city}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href={brewery.website_url}>Website</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
};
export default MiApi;
