import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PostDetail from "./components/PostDetail";
function App() {
  const loadData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Post posts={posts} />
        </Route>
        <Route exact path="/post">
          <Post posts={posts} />
        </Route>
        <Route path="/post/:id">
          <PostDetail posts={posts} />
        </Route>
        <Redirect to="/post" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
