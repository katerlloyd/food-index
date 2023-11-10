import React, { useState } from "react";
import styled from "styled-components";

const Heading = styled.th`
  border-right: 1px solid lightgrey;
  border-collapse: collapse;
  padding: 0.25rem 1rem;
`;

const TR = styled.tr`
  border-bottom: 1px solid lightgrey;
  ${(props) => `background-color: ${props.color}`};
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

const Icon = styled.span`
  font-weight: bold;
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
    if (data.status === "Pro-inflammatory") {
      return <Icon style={{ color: "red" }}>&#9888;</Icon>;
    } else if (data.gi === 0) {
      return <Icon style={{ color: "green" }}>&#10003;</Icon>;
    } else if (0 < data.gi && data.gi <= 55) {
      return <Icon style={{ color: "green" }}>&#10003;</Icon>;
    } else if (55 < data.gi && data.gi <= 69) {
      return <Icon style={{ color: "orange" }}>&#9888;</Icon>;
    } else if (data.gi >= 70) {
      return <Icon style={{ color: "red" }}>&#9888;</Icon>;
    }
  };

  const getRowColor = () => {
    return "white";
    //   if (data.status === "Pro-inflammatory") {
    //     return "#f5c4c4";
    //   } else if (data.gi === 0) {
    //     return "#f2f2f2";
    //   } else if (0 < data.gi && data.gi <= 55) {
    //     return "#daf5c4";
    //   } else if (55 < data.gi && data.gi <= 69) {
    //     return "#f5eec4";
    //   } else if (data.gi >= 70) {
    //     return "#f5c4c4";
    //   }
  };

  return (
    <>
      <TR color={getRowColor()}>
        <Heading>{data.name}</Heading>
        <Cell>{data.gi}</Cell>
        <Cell>{data.status || "-"}</Cell>
        <Symbol>{getSymbol()}</Symbol>
        <Arrow onClick={() => setExpanded(!expanded)}>
          {expanded ? <span>&#9651;</span> : <span>&#9661;</span>}
        </Arrow>
      </TR>
      {expanded && (
        <TR color={getRowColor()}>
          <CellNotes colSpan="5">{data.notes || "None"}</CellNotes>
        </TR>
      )}
    </>
  );
};

export default Row;
