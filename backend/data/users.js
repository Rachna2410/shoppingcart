import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Rachna',
    email: 'rachna@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'himani',
    email: 'himani@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users;