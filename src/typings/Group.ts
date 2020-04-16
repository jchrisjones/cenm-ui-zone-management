export type Group = {
  id: string
  name: string
  description?: string | null
  autoEnroll: boolean
  provider?: string | null | undefined
  users: string[] | null
  admin: boolean
}
