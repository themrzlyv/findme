import authRouters from "./ui/pages/Authentication/authRoutes";
import postRoutes from "./ui/pages/Post/postRoutes";

const mainRoutes = {
  home: '/findme',
  auth: '/findme/auth/*',
  post: '/findme/post/*',

  ...postRoutes,
  ...authRouters,
}

export default mainRoutes;