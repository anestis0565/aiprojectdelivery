'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { login } from '@/app/actions/auth'

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined)

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <form action={formAction} className="flex flex-col gap-4 w-80 bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold">Sign in</h1>

        {state?.error && (
          <p className="text-red-600 text-sm rounded bg-red-50 px-3 py-2">
            {state.error}
          </p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
          className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          autoComplete="current-password"
          className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          disabled={pending}
          className="bg-black text-white rounded px-4 py-2 text-sm font-medium disabled:opacity-50 hover:bg-gray-800 transition-colors"
        >
          {pending ? 'Signing in…' : 'Sign in'}
        </button>

        <p className="text-sm text-center text-gray-600">
          No account?{' '}
          <Link href="/signup" className="underline text-black">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  )
}
