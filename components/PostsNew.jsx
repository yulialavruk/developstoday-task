import React from "react";
import axios from "axios";

export class PostsNew extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      body: "",
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  createPosts = () =>
    axios
      .post(`https://simple-blog-api.crew.red/posts`, {
        title: this.state.title,
        body: this.state.body,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          title: "",
          body: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
          required
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={this.onChange}
          required
        />
        <button type="submit" onClick={this.createPosts}>
          Submit
        </button>
      </div>
    );
  }
}
