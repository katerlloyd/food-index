import React, { useState } from "react";
import styled from "styled-components";
import Section from "../components/Section";

const Width = styled.div`
  margin: 0 20%;
`;

const H1 = styled.h1`
  color: black;
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

const Home = () => {
  const [sortType, setSortType] = useState("");

  const search = (word) => {};

  const sectionData = [
    {
      title: "Rice",
      color: "204, 133, 0",
      items: [
        { name: "Brown rice", gi: 50, status: "Anti-inflammatory", notes: "" },
        { name: "White rice", gi: 72, status: "Inflammatory", notes: "" },
      ],
    },
  ];

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

      {sectionData.map((section, index) => {
        return <Section key={index} data={section} />;
      })}
    </Width>
  );
};

export default Home;
