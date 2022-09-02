import React, { FC } from "react";
import {
  anchorProperties,
  Button,
  Header,
  getNativeProps,
  LinkProps,
} from "@uitk/react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const AppContent = styled.div`
  margin: 24px 32px;
`;

const CurrentRouteWrapper = styled.div`
  padding: 12px 0;
`;

const CurrentRoute = styled.span`
  margin-left: 8px;
`;

const CurrentRouteContainer= () => (
  <CurrentRouteWrapper>
    <strong>Current Route:</strong>
    <CurrentRoute>{useCurrentRoute()}</CurrentRoute>
  </CurrentRouteWrapper>
);


// create hook to return the current route
const useCurrentRoute = () => {
  const { pathname: route } = useLocation();
  return route;
};

// define our custom link so client side routing works
const RoutableLink= item => {
  const { children, url } = item;
  const anchorProps = getNativeProps(item, anchorProperties);
  return (
    <Link to={url} {...anchorProps}>
      {children}
    </Link>
  );
};

// define our navigation config
// Note: do not define this in the body of a function component unless you give
//       it a stable identity via useRef
const globalNavigationConfig = {
  linkAs: RoutableLink,
  links: [
    {
      label: "Home",
      links: [
        { label: "Home page", url: "/" },
      ],
    },
    {
      label: "Reports",
      links: [
        {
          label: "Reports page",
          url: "/reports",
        }
      ],
    },
    { label: "Mapping", url: "/" },
  ],
};

const GlobalHeader= () => (
  <>
    <Header
      globalNavigation={globalNavigationConfig}
      useLocation={useCurrentRoute}
      skipLink={{ id: "main" }}
    />
    {/* <AppContent>
      <CurrentRouteContainer />
      <main tabIndex={-1} id="main">
        <h1>Main Content</h1>
        <Button onPress={() => alert("click")}>Focusable Button</Button>
      </main>
    </AppContent> */}
  </>
);

export default GlobalHeader;