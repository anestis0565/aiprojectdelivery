import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { logout } from '@/app/actions/auth'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="text-gray-600">
        Signed in as <span className="font-medium text-black">{user.email}</span>
      </p>
      <form action={logout}>
        <button
          type="submit"
          className="bg-black text-white rounded px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Sign out
        </button>
      </form>
    </main>
  )
}
