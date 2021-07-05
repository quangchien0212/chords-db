var mysql = require('mysql')
require('dotenv').config()
import db from './db'

const initConnection = (callback) => {
  mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || ''
  }).connect(function(err) {
    if (err) throw err
    console.log('Connected')
    callback()
  })
}

export const seed = () => {
  console.log(db.guitar)
}
console.log('Connecting ...')
initConnection(seed)
