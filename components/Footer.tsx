import { Layout, Button } from "antd";

const { Footer } = Layout;

export default function CustomFooter() {
  return (
    <Footer
      style={{
        backgroundColor: "#F7F9FF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bottom: 0,
        width: "100%",
      }}
    >
      <span>
        Hosted on <a href="https://dappling.network">dAppling</a>
      </span>
    </Footer>
  );
}
