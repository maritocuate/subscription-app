'use client'
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from '@kinde-oss/kinde-auth-nextjs'

export default function Home() {
  const { isAuthenticated } = useKindeBrowserClient()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Subscription App</h1>
      {isAuthenticated ? (
        <LogoutLink>Logout</LogoutLink>
      ) : (
        <LoginLink>Login</LoginLink>
      )}
    </main>
  )
}
