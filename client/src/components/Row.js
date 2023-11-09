import React, { useState } from "react";
import styled from "styled-components";

const Heading = styled.th`
  border-collapse: collapse;
  padding: 0.25rem 1rem;
`;

const TR = styled.tr`
  border-bottom: 1px solid lightgrey;
  /* :hover {
    background-color: rgba(204, 133, 0, 0.6);
  } */
`;

const CellNotes = styled.td`
  border-collapse: collapse;
  padding: 0.25rem 1rem;
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
`;

const Arrow = styled.td`
  text-align: center;
  border-left: 1px solid lightgrey;
  border-collapse: collapse;
  padding: 0.25rem 1rem;
  color: grey;
  cursor: pointer;
`;

const Row = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const getSymbol = () => {
    if (data.gi === 0) {
      return (
        <span style={{ color: "blue", fontWeight: "bold" }}>&#10003;</span>
      );
    } else if (0 < data.gi && data.gi <= 55) {
      return (
        <span style={{ color: "green", fontWeight: "bold" }}>&#10003;</span>
      );
    } else if (55 < data.gi && data.gi <= 69) {
      return (
        <span style={{ color: "orange", fontWeight: "bold" }}>&#9888;</span>
      );
    } else if (data.gi >= 70) {
      return <span style={{ color: "red", fontWeight: "bold" }}>&#9888;</span>;
    }
  };

  const symbol = getSymbol();

  return (
    <>
      <TR>
        <Heading>{data.name}</Heading>
        <Cell>{data.gi || "-"}</Cell>
        <Cell>{data.status || "-"}</Cell>
        <Symbol>{symbol}</Symbol>
        <Arrow onClick={() => setExpanded(!expanded)}>
          {expanded ? <span>&#9651;</span> : <span>&#9661;</span>}
        </Arrow>
      </TR>
      {expanded && (
        <TR>
          <CellNotes colSpan="5">{data.notes || "None"}</CellNotes>
        </TR>
      )}
    </>
  );
};

export default Row;
