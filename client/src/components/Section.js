import React from "react";
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

const Section = ({ data }) => {
  return (
    <SectionDiv color={data.color}>
      <H2 color={data.color}>{data.title}</H2>
      <Table>
        <thead>
          <TitleRow color={data.color}>
            <Heading></Heading>
            <Heading>Glycemic Index</Heading>
            <Heading>Inflammatory Status</Heading>
            <Heading>&#9888;</Heading>
            <Heading></Heading>
          </TitleRow>
        </thead>
        <tbody>
          {data.items.map((item, index) => {
            return <Row key={index} data={item} />;
          })}
        </tbody>
      </Table>
    </SectionDiv>
  );
};

export default Section;
