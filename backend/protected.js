import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export async function getServerSideProps(ctx) {
  const supabase = createServerSupabaseClient(ctx)
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: session.user
    }
  }
}

export default function ProtectedPage({ user }) {
  return <div>Welcome, {user.email}</div>
}
