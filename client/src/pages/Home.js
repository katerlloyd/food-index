import React, { useState } from "react";
import styled from "styled-components";
import Section from "../components/Section";

const { data } = require("../catalog.json");

const Width = styled.div`
  margin: 0 20%;
  padding: 1rem 2rem;
  background-color: white;
`;

const H1 = styled.h1`
  color: black;
  margin: 0;
  padding: 1rem 0;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.25rem;
  gap: 1rem;
`;

const Select = styled.select`
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

const Home = () => {
  const [sortType, setSortType] = useState("gi-ascending");

  const search = (word) => {};

  return (
    <Width>
      <H1>Glycemic Index and Inflammation Catalog</H1>
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
        <strong>Inflammation:</strong> An innate immune response, which in this
        particular case causes unwarranted damage to the body.
      </p>
      <ul>
        <li>
          <strong>Anti-inflammatory:</strong> Reduces inflammation
        </li>
        <li>
          <strong>Non-inflammatory:</strong> Has no effect on inflammation
        </li>
        <li>
          <strong>Pro-inflammatory:</strong> Causes inflammation
        </li>
      </ul>

      <Box>
        <Select
          aria-label="Select Sort Type"
          defaultValue={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="gi-ascending">Glycemic Index - Ascending</option>
          <option value="gi-descending">Glycemic Index- Descending</option>
          {/* <option value="inflammatory-ascending">
            Inflammatory (Ascending)
          </option>
          <option value="inflammatory-descending">
            Inflammatory (Descending)
          </option>
          <option value="alphabetically">Alphabetically</option> */}
        </Select>
        <div>
          <input type="text" placeholder="Flour" name="search"></input>
          <button onClick={(e) => search(e.target.value)}>Search</button>
        </div>
      </Box>

      {data?.map((section, index) => {
        return <Section key={index} {...{ data: section, sortType }} />;
      })}
    </Width>
  );
};

export default Home;
