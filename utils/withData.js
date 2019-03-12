import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "styles/theme";

export const withData = ComposedComponent =>
  class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`;

    static async getInitialProps(ctx) {
      let composedInitialProps = {};

      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      return {
        ...composedInitialProps
      };
    }

    render() {
      return (
        <ThemeProvider theme={theme}>
          <ComposedComponent {...this.props} />
        </ThemeProvider>
      );
    }
  };
