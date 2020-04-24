import React from "react";
// import Link from "next/link";
import Layout from "../../components/Layout";
import { PostsDetails } from "../../components/PostsDetails";

const PostsPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <PostsDetails />
  </Layout>
);

export default PostsPage;
