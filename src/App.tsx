import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import { posts } from "./data/posts";

export default function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map((post) => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                  />
            )})
          }
        </main>
      </div>
    </div>
  );
}