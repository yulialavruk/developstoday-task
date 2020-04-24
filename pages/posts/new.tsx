import React from "react";
// import Link from "next/link";
import Layout from "../../components/Layout";
import { PostsNew } from "../../components/PostsNew";

const PostsNewPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <PostsNew />
  </Layout>
);

export default PostsNewPage;
