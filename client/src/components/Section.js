import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Row from "./Row";

const SectionDiv = styled.div`
  ${(props) => `background-color: rgba(${props.color}, 0.1)`};
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
`;

const H2 = styled.h2`
  ${(props) => `color: rgba(${props.color}, 1)`};
  margin: 0;
  padding-bottom: 0.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

const TitleRow = styled.tr`
  ${(props) => `color: rgba(${props.color}, 1)`};
  ${(props) => `background-color: rgba(${props.color}, 0.25)`};
  border-bottom: 1px solid lightgrey;
`;

const Heading = styled.th`
  border-collapse: collapse;
  padding: 0.25rem 1rem;
`;

const Section = ({ data, sortType }) => {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (data.items) {
      let newData = data.items;

      if (sortType === "gi-ascending") {
        newData = sortByGIAscending(data.items);
      } else if (sortType === "gi-descending") {
        newData = sortByGIDescending(data.items);
      }

      setSortedData(newData);
    }
  }, [data, sortType]);

  const sortByGIAscending = (items) => {
    return items.sort((a, b) => {
      return a.gi - b.gi;
    });
  };

  const sortByGIDescending = (items) => {
    return items.sort((a, b) => {
      return b.gi - a.gi;
    });
  };

  return (
    <SectionDiv color={data.color}>
      <H2 color={data.color}>{data.title}</H2>
      <Table>
        <thead>
          <TitleRow color={data.color}>
            <Heading></Heading>
            <Heading>Glycemic Index</Heading>
            <Heading>Inflammatory Status</Heading>
            <Heading>&#10003;</Heading>
            <Heading></Heading>
          </TitleRow>
        </thead>
        <tbody>
          {sortedData?.map((item, index) => {
            return <Row key={index} data={item} />;
          })}
        </tbody>
      </Table>
    </SectionDiv>
  );
};

export default Section;
