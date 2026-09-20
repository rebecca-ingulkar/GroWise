import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { Auth0Provider, AppState } from '@auth0/auth0-react'

import routes from './routes'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()
const onRedirectCallBack = (appState?: AppState) => {
  router.navigate(appState?.returnTo || '/')
}

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('app') as HTMLElement

  createRoot(rootEl).render(
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
      onRedirectCallback={onRedirectCallBack}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
