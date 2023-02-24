import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const Search = ({ handleChange, user, searchUser }) => {
  return (
    <div>
      <InputGroup className="mb-2 mt-4">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
          value={user}
        />
      </InputGroup>
      <div className="d-grid gap-2 mb-3">
        <Button variant="primary" size="lg" onClick={searchUser}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
