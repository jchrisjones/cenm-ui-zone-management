export type TUser = {
  id: string
  name: string
  email: string
  password?: string | undefined | null
  provider?: string | null
  updatable?: boolean
  enabled?: boolean
  locked?: boolean
  passwordExpired?: boolean
  groups: string[]
  admin: boolean
}
