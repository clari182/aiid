import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import config from '../../config.js';
import Footer from './layout/Footer';
import Header from './ui/Header';

const Layout = ({ children, className = '', rightSidebar = null, location = null }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const navConfig = config.sidebar.navConfig;

    setIsCollapsed(navConfig.find((item) => item.url === location.pathname)?.collapsed || false);

    setLoading(false);
  }, [location]);

  if (loading) return <></>;

  return (
    <>
      <Header location={location} />
      <div className="tw-layout">
        <div className="hidden md:block z-2 bg-text-light-gray shadow" data-cy="sidebar-desktop">
          <Sidebar defaultCollapsed={isCollapsed} location={location} />
        </div>
        {config.sidebar.title && (
          <div
            className={'tw-side-bar-title tw-side-bar-show'}
            dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
          />
        )}
        <div id="content" className={'tw-content' + (rightSidebar ? ' xl:pr-5' : '')}>
          <div className={`${className ? className : ''} max-w-full`}>{children}</div>
        </div>
        <div
          className={
            'tw-hidden-mobile tw-[224px] z-0 relative hidden xl:block xl:max-w-sm 2xl:max-w-md'
          }
        >
          {rightSidebar}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
