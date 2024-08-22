import "./src/styles/global.css";
export const onClientEntry = () => {
};
export const onRouteUpdate = ({ location, prevLocation }) => {
  sessionStorage.setItem("prevPath", prevLocation ? prevLocation.pathname : null);	  sessionStorage.setItem("prevPath", prevLocation ? prevLocation.pathname : null);
};

// see https://github.com/gatsbyjs/gatsby/issues/38201#issuecomment-1658071105
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  window.history.scrollRestoration = 'manual';
  const currentPosition = getSavedScrollPosition(location, location.key);
  // minimum timeout needs to be somewhat greater than zero the avoid map loading
  // interferance on park pages
  let timeout = 100;
  // use a longer timeout for longer pages so they can finish rendering first
  if (currentPosition && currentPosition.length > 1 && currentPosition[1]) {
    const y = currentPosition[1];
    if (y > (2 * window.innerHeight)) {
      timeout = 750;
    }
  }
  setTimeout(() => {
    window.scrollTo(...(currentPosition || [0, 0]));
  }, timeout);
  return false;
};