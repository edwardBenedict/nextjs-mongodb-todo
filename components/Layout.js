import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
  <>
    <Head>
      <title>NotEd App</title>
    </Head>
    <Navbar />
    {props.children}
  </>
);

export default Layout;
