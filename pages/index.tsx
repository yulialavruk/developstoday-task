// import Link from "next/link";
import Layout from "../components/Layout";
import { Posts } from "../components/Posts";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Posts />
  </Layout>
);

export default IndexPage;
