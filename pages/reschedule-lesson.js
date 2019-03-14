import React from "react";

import { withData } from "utils/withData";

import { Layout } from "components/primitives/Layout";
import { PageHeader } from "components/primitives/PageHeader";

const Page = () => {
  return (
    <Layout>
      <PageHeader title="Перенести занятие" />
    </Layout>
  );
};

export default withData(Page);
