'use client'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Subscription App</h1>
      <LoginLink>Login</LoginLink>
    </main>
  )
}
