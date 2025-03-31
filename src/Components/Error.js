import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const err = useRouteError();
  return (
    <div style={{ height: '100vh', display: 'flex', placeContent: 'center', flexWrap: 'wrap' }}>
      <div>
        {err.status} : {err.statusText}
      </div>
    </div>
  );
};
