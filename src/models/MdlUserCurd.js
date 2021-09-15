module.exports = function MdlUsers() {
    return {
        get: 'SELECT * FROM usersdetail WHERE id=${id}',
        deleteSQL: 'DELETE FROM usersdetail WHERE id=${id} RETURNING id',
        exists: 'SELECT COUNT(id) AS exists FROM usersdetail WHERE id=${id}',
        create: 'INSERT INTO usersdetail(firstname,lastname,gender,address,cellno) VALUES (${firstname},${lastname},${gender},${address}, ${cellno}) RETURNING id',
        update: 'UPDATE usersdetail SET firstname=${firstname},lastname=${lastname},gender=${gender},address=${address},cellno=${cellno} WHERE id=${id} RETURNING id'
    }
}

