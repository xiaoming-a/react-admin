import React, { useState } from 'react';
import { useNavigate,Outlet } from 'react-router-dom'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', 'page1', <PieChartOutlined />),
    getItem('Option 2', 'page2', <DesktopOutlined />)
];

const Home: React.FC = () => {
    // 左侧伸缩标识
    const [collapsed, setCollapsed] = useState(false);
    // 获取头部的颜色
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // 路由跳转
    const navigate = useNavigate()

    // 左侧菜单点击时间
    const handleMenu = (e: { key:string }) => {
        // 路由跳转
        navigate(e.key)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左侧菜单 start  */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu
                    onClick={handleMenu}
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline" items={items} />
            </Sider>
            {/* 右侧内容 start */}
            <Layout className="site-layout">
                {/* 头部 */}
                <Header style={{ padding: '0 0 0 16px', background: colorBgContainer }}>
                    <Breadcrumb style={{ lineHeight:'64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/*内容*/}
                <Content style={{ margin: '16px 16px 0' }}>
                    <Outlet/>
                </Content>
                {/* 底部 */}
                <Footer style={{ textAlign: 'center',lineHeight:'48px',padding:0 }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;
