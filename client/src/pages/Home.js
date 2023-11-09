import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const Width = styled.div`
  margin: 0 20%;
`;

const H1 = styled.h1`
  color: black;
`;

const Section = styled.div`
  /* border: 2px dotted rgba(204, 133, 0, 1); */
  border-radius: 1rem;
  background-color: rgba(204, 133, 0, 0.1);
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
`;

const H2 = styled.h2`
  color: rgba(204, 133, 0, 1);
  margin: 0;
  padding-bottom: 0.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const TitleRow = styled.tr`
  color: rgba(204, 133, 0, 1);
  background-color: rgba(204, 133, 0, 0.25);
  border-bottom: 1px solid lightgrey;
`;

const Heading = styled.th`
  border-collapse: collapse;
  padding: 0.25rem 1rem;
`;

const Row = styled.tr`
  border-bottom: 1px solid lightgrey;
  /* :hover {
    background-color: rgba(204, 133, 0, 0.6);
  } */
`;

const CellNotes = styled.td`
  border-collapse: collapse;
  padding: 0.25rem 1rem;
  /* display: none; */
`;

const Cell = styled.td`
  text-align: center;
  border-collapse: collapse;
  padding: 0.25rem 1rem;
`;

const Symbol = styled.td`
  text-align: center;
  border-collapse: collapse;
  padding: 0.25rem 1rem;
  color: red;
`;

const Arrow = styled.td`
  text-align: center;
  border-left: 1px solid lightgrey;
  border-collapse: collapse;
  padding: 0.25rem 1rem;
  color: grey;

  :hover {
    cursor: pointer;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.25rem;
`;

const Select = styled.select`
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

// COMPONENTS TO BUILD
// - Section (heading background color, heading color, section background)
// - Row (background color, expand arrow with notes underneath)
// - Cell (background color)

const Home = () => {
  const [sortType, setSortType] = useState("");
  const [expanded, setExpanded] = useState(false);

  const search = (word) => {
    //
  };

  return (
    <Width>
      <H1>Food Glycemic Index and Inflammation Catalog</H1>
      <p>
        <strong>Glycemic Index:</strong> A way of ranking foods on a scale of 0
        to 100 based on how quickly they increase blood glucose levels over a
        period of about 2 hours. Glucose has a GI of 100 and is used as the
        control.
      </p>
      <ul>
        <li>
          <strong>Low:</strong> 1-55
        </li>
        <li>
          <strong>Medium:</strong> 56-69
        </li>
        <li>
          <strong>High:</strong> 70+
        </li>
      </ul>
      <p>
        <strong>Inflammation:</strong> A response that causes swelling, pain,
        and increased blood flow to the affected tissue, which in this
        particular case is caused by an incorrect reaction where the body
        damages itself.
      </p>
      <ul>
        <li>
          <strong>Anti-inflammatory:</strong> Reduces inflammation
        </li>
        <li>
          <strong>Non-inflammatory:</strong> Has no effect on inflammation
        </li>
        <li>
          <strong>Inflammatory:</strong> Causes inflammation
        </li>
      </ul>

      <Box>
        <Select
          aria-label="Select Sort Type"
          name="sorting"
          id="sorting"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="gi-ascending">Glycemic Index (Ascending)</option>
          <option value="gi-descending">Glycemic Index (Descending)</option>
          <option value="inflammatory-ascending">
            Inflammatory (Ascending)
          </option>
          <option value="inflammatory-descending">
            Inflammatory (Descending)
          </option>
          <option value="alphabetically">Alphabetically</option>
        </Select>
        <div>
          <input type="text" placeholder="Flour" name="search"></input>
          <button onClick={(e) => search(e.target.value)}>Search</button>
        </div>
      </Box>

      <Section>
        <H2>Rice</H2>
        <Table>
          <thead>
            <TitleRow>
              <Heading></Heading>
              <Heading>Glycemic Index</Heading>
              <Heading>Inflammatory Status</Heading>
              <Heading>&#9888;</Heading>
              <Heading></Heading>
            </TitleRow>
          </thead>
          <tbody>
            <Row>
              <Heading>White rice</Heading>
              <Cell>72</Cell>
              <Cell>Inflammatory</Cell>
              <Symbol>&#9888;</Symbol>
              <Arrow onClick={() => setExpanded(!expanded)}>
                {expanded ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
              </Arrow>
            </Row>
            {expanded && (
              <Row>
                <CellNotes colspan="5">Notes</CellNotes>
              </Row>
            )}
            <Row>
              <Heading>Brown rice</Heading>
              <Cell>50</Cell>
              <Cell>-</Cell>
              <Symbol>&#10003;</Symbol>
              <Arrow onClick={() => setExpanded(!expanded)}>
                {expanded ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
              </Arrow>
            </Row>
          </tbody>
        </Table>
      </Section>
    </Width>
  );
};

export default Home;
