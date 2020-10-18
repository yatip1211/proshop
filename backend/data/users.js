import bcrypt from 'bcryptjs'

const users = [
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmi:true
    },
    {
        name:"John Doe",
        email:"john@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmi:true
    },
    {
        name:"jane Doe",
        email:"jane@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmi:true
    }
]

export default users