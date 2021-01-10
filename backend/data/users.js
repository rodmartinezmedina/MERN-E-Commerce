import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'johnDoe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Pepe',
    email: 'pepe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
