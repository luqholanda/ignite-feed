import { Post } from "../model/post/Post";

export const posts: Post[] = [
    {
      id: 1,
      author: {
        avatarUrl: "img/02.jpeg",
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
        avatarUrl: "img/04.jpeg",
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
  