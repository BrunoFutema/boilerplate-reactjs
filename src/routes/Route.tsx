import React from 'react';
import { Route as ReactRoute, RouteProps, Redirect } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';
import { AuthLayout } from '@pages/_layouts/AuthLayout';
import { DefaultLayout } from '@pages/_layouts/DefaultLayout';

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<RouteProps>;
}

const RouteWrapper: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { signed } = useAuth();

  if (isPrivate && !signed) return <Redirect to="/login" />;

  if (!isPrivate && signed) return <Redirect to="/" />;

  const Layout = !signed ? AuthLayout : DefaultLayout;

  return (
    <ReactRoute
      {...rest}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export { RouteWrapper as Route };
