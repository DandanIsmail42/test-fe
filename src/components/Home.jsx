import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import Search from "./Search";

const Home = () => {
  const [user, setUser] = useState("");
  const [datas, setDatas] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const data = e.target.value;
    setUser(data);
  };
  const searchUser = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/${user}/repos`
    );
    setDatas(response.data);
  };
  useEffect(() => {
    searchUser();
  }, [user]);

  return (
    <div>
      <Container style={{ width: "80%" }}>
        <Search
          handleChange={handleChange}
          user={user}
          searchUser={searchUser}
        />
        {datas.map((d) => {
          return (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>{d.owner.login}</Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#eee" }}
                  className="mb-2"
                >
                  <Stack direction="horizontal" gap={3}>
                    <div>
                      <b>{d.name}</b>
                    </div>
                    <div className="ms-auto">{d.stargazers_count}</div>
                    <div>
                      {" "}
                      <AiFillStar />
                    </div>
                  </Stack>
                  <p> {d.description}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;

{
  /* <Dropdown className="mt-2 d-grid gap-2" size="lg" style={{marginBottom: '20px'}}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" >
              {d.owner.login}
            </Dropdown.Toggle>
    
            <Dropdown.Menu variant="dark" style={{marginBottom: '50px'}}>
            <Card style={{ width: '18rem', backgroundColor: 'grey' }}>
          <Card.Body>
            <Card.Title>{d.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
             {d.description}
            </Card.Text>
          </Card.Body>
        </Card>
            </Dropdown.Menu>
          </Dropdown>  */
}
