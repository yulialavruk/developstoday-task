// import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/actions";
import Layout from "../../components/Layout";
import { PostsNew } from "../../components/PostsNew";
import { StateType } from "../../reducers/reducer";

type StateToPropsType = {
  isFetching: boolean;
};

type DispatchToPropsType = {
  createPost: (title: string, body: string) => void;
};

type Props = StateToPropsType & DispatchToPropsType;

const PostsNewPage: React.FC<Props> = ({ createPost }) => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <PostsNew createPost={createPost} />
    </Layout>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createPost: (title: string, body: string) =>
      dispatch(createPost(title, body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsNewPage);
