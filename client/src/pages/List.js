import React, { useEffect, useState } from "react";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      await fetch("/api/getList")
        .then((res) => res.json())
        .then((list) => setList(list));
    };
    getList();
  }, []);
  
  return (
    <>
      <h1>List Items</h1>
      {list.length ? (
        <div>
          {list.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )}
    </>
  );
};

export default List;
