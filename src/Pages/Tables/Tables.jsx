import React from "react";
import styled from "styled-components";
import Title from "../../Components/Title";
import DevTable from "../../Components/DevTable";
import TableCheckTable from "../../Components/TableCheckTable/TableCheckTable";
import FourColumnTable from "../../Components/FourColumnTable/FourColumnTable";
import NewComplexTable from "../../Components/NewComplexTable/NewComplexTable";

const Tables = () => {
  return (
    <Wrapper>
      <div>
        <span>Home / Tables</span>
        <Title mytitle="Tables" />
      </div>
      <div className="gap-3 min-md:grid min-md:grid-cols-2 space-y-5 min-lg:space-y-0">
        <DevTable />
        <TableCheckTable />
        <FourColumnTable />
        <NewComplexTable />
      </div>
    </Wrapper>
  );
};

export default Tables;

const Wrapper = styled.section`
  background: #f4f7fe;
  padding: 16px;
`;
