import { ReactNode } from "react";
import { Layout, Space, Grid, Button } from "antd";
import Link from "next/link";
import CustomFooter from "./Footer";
import { CSSProperties } from "react";
import { GithubOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

interface LayoutProps {
  children: ReactNode;
  contentStyle?: CSSProperties;
  headerExtra?: any;
}

export default function CustomLayout({
  children,
  contentStyle,
  headerExtra,
}: LayoutProps) {
  const headerHeight = 48;
  const screens = useBreakpoint();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#F7F9FF" }}>
      <Header
        style={{
          textAlign: "right",
          height: headerHeight,
          backgroundColor: "white",
          lineHeight: `${headerHeight}px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Space size="large">
          <Link href="/">
            <img
              src="./logo.png"
              alt="GoGoPool Logo"
              style={{
                color: "red",
                marginTop: "18px",
                height: "36px",
                borderRadius: "50%",
              }}
            />
          </Link>
        </Space>
        <Space>
          {headerExtra}{" "}
          <Button
            size="large"
            type="ghost"
            href="https://twitter.com/dApplingNetwork"
            icon={<TwitterOutlined />}
          />
          <Button
            size="large"
            type="ghost"
            href="https://github.com/alwaysbegrowing/contracts/tree/main"
            icon={<GithubOutlined />}
          ></Button>
        </Space>
      </Header>
      <Content
        style={{
          paddingTop: "24px",
          paddingRight: screens.sm ? 48 : 8,
          paddingLeft: screens.sm ? 48 : 8,
          height: `calc(100% - ${headerHeight}px)`,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ...contentStyle,
        }}
      >
        {children}
        <CustomFooter />
      </Content>
    </Layout>
  );
}
