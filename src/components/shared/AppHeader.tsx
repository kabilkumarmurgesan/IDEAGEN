import React from "react";
import { Header, Box } from "@ideagen/helix-plus-ui-lib";

function AppHeader({ isEdit }: any) {
  return (
    <Box>
      <Header
        dataId="header"
        header={isEdit ? "Edit Authentication" : "Manage Tenant"}
      />
    </Box>
  );
}

export default AppHeader;
