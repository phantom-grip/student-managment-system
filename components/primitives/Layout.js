import React from "react";
import { Box } from "rebass";

export const Layout = ({ children }) => {
  return (
    <Box css={{ maxWidth: "864px", margin: "0 auto", padding: "2rem 1rem" }}>
      {children}
    </Box>
  );
};
