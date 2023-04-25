interface Route {
  route: string
}

export const baseRoute = {
  route: '/',
}

export const URLS: Record<string, Route> = {
  home: {
    route: baseRoute.route,
  },
  notFound: {
    route: '*',
  }
}
