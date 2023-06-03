import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://i.pravatar.cc/300?1",
      name: "Eliane Rebeca Ferreira",
      role: "CTO"
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { id: 3, type: "paragraph", break: true, content: "👉 jane.design/doctorcare" },
      { id: 4, type: "link", break: false, href: "#", content: "#novoprojeto" },
      { id: 5, type: "link", break: false, href: "#", content: "#nlw" },
      { id: 6, type: "link", break: false, href: "#", content: "#rocketseat" },
    ],
    publishedAt: new Date('2023-05-10 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://i.pravatar.cc/300?2",
      name: "Kamilly Aline Teixeira",
      role: "CFO"
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { id: 3, type: "paragraph", break: true, content: "👉 jane.design/doctorcare" },
      { id: 4, type: "link", break: false, href: "#", content: "#novoprojeto" },
      { id: 5, type: "link", break: false, href: "#", content: "#nlw" },
      { id: 6, type: "link", break: false, href: "#", content: "#rocketseat" },
    ],
    publishedAt: new Date('2023-05-08 20:00:00')
  },
]

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
                author={post.author.name} 
                authorAvatar={post.author.avatarUrl} 
                role={post.author.role} 
                publishedAt={post.publishedAt} 
                content={post.content} />
            )})
          }
        </main>
      </div>
    </div>
  );
}
