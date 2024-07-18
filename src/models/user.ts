export type User = {
    id: Number
    username: String
    password: String
    role: Role
    created_at: Date
    updated_at: Date
}

type Role = 'user' | 'admin'