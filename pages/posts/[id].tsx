import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { getPostDetails, createComment } from "../../actions/actions";
import Layout from "../../components/Layout";
import { PostDetails } from "../../components/PostDetails";
import { StateType } from "../../reducers/reducer";
import { PostType } from "../../interfaces/index";

type StateToPropsType = {
  isFetching: boolean;
  post_details: PostType | {};
};

type DispatchToPropsType = {
  getPostDetails: (id: number) => void;
  createComment: (id: number, comment: string) => void;
};

type Props = StateToPropsType & DispatchToPropsType;

const PostPage: React.FC<Props> = ({
  getPostDetails,
  createComment,
  post_details,
  isFetching,
}) => {
  const postId = Number(useRouter().query.id);

  useEffect(() => {
    if (postId) {
      getPostDetails(postId);
    }
  }, [postId]);

  return (
    <Layout title="About | Next.js + TypeScript Example">
      {isFetching ? (
        <p>...Loading</p>
      ) : (
        <PostDetails post={post_details} createComment={createComment} />
      )}
    </Layout>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    post_details: state.post_details,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPostDetails: (id: number) => dispatch(getPostDetails(id)),
    createComment: (id: number, comment: string) =>
      dispatch(createComment(id, comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
