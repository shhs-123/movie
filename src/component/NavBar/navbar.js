import { Layout, Menu } from 'antd';
import React from 'react';

const { Header } = Layout;

const items = [{
  key: 'Home',
  label: (<a href='/'> Home </a>)
}]

const Navbar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />

      </Header>
    </Layout >
  );
};
export default Navbar;