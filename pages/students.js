import React from "react";
import { Box } from "rebass";
import { Typography, PageHeader } from "antd";
import styled from "styled-components";

import { withData } from "utils/withData";

import { Students } from "views/students/Students";

const SPageHeader = styled(PageHeader)`
  margin-bottom: 2rem;
`;

const Page = () => {
  return (
    <Box css={{ maxWidth: "864px", margin: "0 auto", padding: "2rem 1rem" }}>
      <SPageHeader title="Мои студенты" />
      <Students />
    </Box>
  );
};

export default withData(Page);
