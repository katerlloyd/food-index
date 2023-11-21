import React, { useState } from "react";
import styled from "styled-components";

const Heading = styled.th`
  border-right: 1px solid lightgrey;
  border-collapse: collapse;
  padding: 0.25rem 1rem;
  text-align: left;
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
  padding: 0.25rem;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${(props) => `color: rgba(${props.textColor}, 1)`};
  ${(props) => `border: 1px solid rgba(${props.color}, 1)`};
  ${(props) => `background-color: rgba(${props.color}, 0.25)`};
  border-collapse: collapse;
  border-radius: 0.25rem;
  text-align: center;
  padding: 0 0.5rem;
  margin: 0 auto;
  width: fit-content;
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
    if (data.gi >= 70 || data.gl >= 20) {
      return <Icon style={{ color: "red" }}>&#10007;</Icon>;
    } else if (
      (55 < data.gi && data.gi <= 69) ||
      (10 < data.gl && data.gl <= 19)
    ) {
      return <Icon style={{ color: "orange" }}>&#10003;</Icon>;
    } else if (
      (0 <= data.gi && data.gi <= 55) ||
      (0 <= data.gl && data.gl <= 10)
    ) {
      return <Icon style={{ color: "green" }}>&#10003;</Icon>;
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

  const getGIBoxColor = () => {
    if (data.gi >= 70) {
      return "255, 0, 0";
    } else if (55 < data.gi && data.gi <= 69) {
      return "255, 165, 0";
    } else if (0 <= data.gi && data.gi <= 55) {
      return "90, 163, 0";
    } else {
      return "255, 255, 255";
    }
  };

  const getGLBoxColor = () => {
    if (data.gl >= 20) {
      return "255, 0, 0";
    } else if (10 < data.gl && data.gl <= 19) {
      return "255, 165, 0";
    } else if (0 <= data.gl && data.gl <= 10) {
      return "90, 163, 0";
    } else {
      return "255, 255, 255";
    }
  };

  const getStatusBoxColor = () => {
    // if (data.status === "Pro-inflammatory") {
    // return "255, 0, 0";
    //  } else if (data.status === "Non-inflammatory") {
    //    return "255, 165, 0";
    // } else if (data.status === "Anti-inflammatory") {
    //   return "90, 163, 0";
    // } else {
    return "0, 0, 0";
    // }
  };

  return (
    <>
      <TR color={getRowColor()}>
        <Heading>{data.name}</Heading>
        <Cell>
          <Box color={getGIBoxColor()}>{data.gi === -1 ? "" : data.gi}</Box>
        </Cell>
        <Cell>
          <Box color={getGLBoxColor()}>{data.gl === -1 ? "" : data.gl}</Box>
        </Cell>
        <Cell>
          <Box textColor={getStatusBoxColor()}>{data.status || ""}</Box>
        </Cell>
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
