// import Link from "next/link";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/actions";
import Layout from "../components/Layout";
import { Posts } from "../components/Posts";
import { PostType } from "../interfaces/index";
import { StateType } from "../reducers/reducer";

type StateToPropsType = {
  posts: Array<PostType>;
  isFetching: boolean;
};

type DispatchToPropsType = {
  getPosts: () => void;
};

type Props = StateToPropsType & DispatchToPropsType;

const IndexPage: React.FC<Props> = ({ posts, isFetching, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {isFetching ? <p>...Loading</p> : <Posts posts={posts} />}
    </Layout>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    posts: state.posts,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
