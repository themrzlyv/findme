import postRoutes from "./ui/pages/Post/postRoutes";

const mainRoutes = {
  home: '/findme',
  post: '/findme/post/*',

  ...postRoutes,
}

export default mainRoutes;