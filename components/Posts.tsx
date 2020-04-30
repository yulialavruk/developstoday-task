// import React from "react";
import styled from "styled-components";
import { PostType } from "../interfaces/index";
import { PostsItem } from "./PostsItem";

type Props = {
  posts: PostType[];
};

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <PostsWrapper>
      {posts.map((post: PostType) => (
        <div key={post.id}>
          <PostsItem post={post} />
        </div>
      ))}
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
