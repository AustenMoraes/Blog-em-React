import React, { useState, createContext } from "react";
import Post from "./Post";
import Header from "./Header";
import {ThemeProvider} from './ThemeContext';

export const ThemeContext = createContext();


function App() {
  const [posts, setPosts] = useState([
    {id: Math.random(),title: "Title#1",subtitle: "Sub#1",likes: 202,read: false,},
    {id: Math.random(), title: "Title#2",subtitle: "Sub#2",likes: 202,read: true,},
    {id: Math.random(), title: "Title#3",subtitle: "Sub#3",likes: 202,read: true,},
    {id: Math.random(), title: "Title#4",subtitle: "Sub#4",likes: 202,read: false,},
  ]);

  

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `title#0${posts.length + 1}`,
        subtitle: `sub#0${posts.length + 1}`,
        likes: 202,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <h1 id="idTitulo">Componente App</h1>
      <hr />
      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </ThemeProvider>
  );
}

export default App;
