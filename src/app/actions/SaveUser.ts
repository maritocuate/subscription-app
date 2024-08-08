import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { db } from '@/db'

const saveUser = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user?.id || !user.email) return new Error('User not found')

  const dbUser = await db.user.findFirst({
    where: {
      email: user.email,
    },
  })

  if (!dbUser) {
    // create user in db
    const newUser = await db.user.create({
      data: {
        username: user.given_name as string,
        email: user.email,
      },
    })
  }

  return { success: true }
}

export default saveUser
