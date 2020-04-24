import React from "react";
import { PostsItem } from "./PostsItem";
import axios from "axios";

export class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  getPosts = () =>
    axios
      .get(`https://simple-blog-api.crew.red/posts`)
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state;
    return posts.map((post) => (
      <div key={post.id}>
        <PostsItem item={post} />
      </div>
    ));
  }
}
