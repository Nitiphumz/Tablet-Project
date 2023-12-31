module.exports = {
    port:8081,
    db:{
        database: process.env.DB_NAME || 'nvWebblogDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options:{
            dialect: process.env.DIALEC || 'sqlite',
            storage: './nvwebblog-db.sqlite'
        },
    },
    authentication:{
        jwtSecret: 'project vue and node.js'
    }
}