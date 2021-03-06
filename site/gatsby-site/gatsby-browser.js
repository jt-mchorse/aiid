export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. ` + `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};

import 'bootstrap/dist/css/bootstrap.css';

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const { pathname } = location;

  if (pathname !== '/apps/discover') {
    window.scrollTo(0, 0);
  }

  return false;
};
