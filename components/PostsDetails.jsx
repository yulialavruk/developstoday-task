import React from "react";
import axios from "axios";

export class PostsDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      posts_details: [],
      isLoading: true,
      comments: "",
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  getPostsDetails = () =>
    axios
      .get(`https://simple-blog-api.crew.red/posts/24`, {
        params: {
          _embed: "comments",
        },
      })
      .then((response) => {
        this.setState({
          posts_details: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  createComments = () =>
    axios
      .post(`https://simple-blog-api.crew.red/comments`, {
        postId: 24,
        body: this.state.comments,
      })
      .then((response) => {
        console.log(response);
        this.setState(
          {
            comments: "",
          },
          () => this.getPostsDetails()
        );
      })
      .catch((error) => {
        console.log(error);
      });

  componentDidMount() {
    this.getPostsDetails();
  }

  render() {
    const { posts_details, isLoading, comments } = this.state;
    return isLoading === true ? (
      <p>...Loading</p>
    ) : (
      <div>
        <h3>{posts_details.title}</h3>
        <p>{posts_details.body}</p>
        <h4>Comments:</h4>
        {posts_details.comments.map((item) => (
          <p key={item.id}>{item.body}</p>
        ))}
        <input
          type="text"
          name="comments"
          value={comments}
          onChange={this.onChange}
        />
        <button type="button" onClick={this.createComments}>
          Submit
        </button>
      </div>
    );
  }
}
