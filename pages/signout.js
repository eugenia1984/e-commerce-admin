import Layout from '@/components/Layout'
import { useSession, signOut } from 'next-auth/react'

export default function SignOut() {
  const { data: session } = useSession()
  return (
    <Layout>
      <div className="bg-white flex-grow mt-2 mb-4 mr-2 rounded-lg p-4">
        <div className="mb-4">
        Logged in as: <span className="font-semibold">{session?.user?.name}</span>
        </div>
        <div>
          <button
            className="bg-blue-900 p-2 px-4 rounded-lg text-white ml-1"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </div>
    </Layout>
  )
}
