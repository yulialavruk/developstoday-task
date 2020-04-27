import React, { useState, MouseEvent } from "react";
import { Textarea, Button, Input } from "./ui/ui";

type PostPropsNew = {
  createPost: (title: string, body: string) => void;
};

export const PostsNew: React.FC<PostPropsNew> = ({ createPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onCreatePosts = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (title && body !== "") {
      createPost(title, body);
      setTitle("");
      setBody("");
    }
  };

  return (
    <div>
      <h3>Title:</h3>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h3>Body:</h3>
      <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <Button type="submit" onClick={onCreatePosts}>
        Submit
      </Button>
    </div>
  );
};
