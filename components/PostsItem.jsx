import React from "react";
import Link from "next/link";

export class PostsItem extends React.Component {
  componentDidMount() {}

  render() {
    const { item } = this.props;
    return (
      <Link href={`/posts/${item.id}`}>
        <a>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </a>
      </Link>
    );
  }
}
