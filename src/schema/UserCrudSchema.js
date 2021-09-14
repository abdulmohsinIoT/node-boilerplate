function UserCrudSchema(opts) {

    const { 
        UserCrudHandlers,
    } = opts;

    const getUsers = ({ fastify }) => {
        return {
            method: 'GET',
            url: '/getUsers',
            handler: UserCrudHandlers.getUsers
        }
    }

    const addUser = ({ fastify }) => {
        return {
            method: 'POST',
            url: '/addUser',
            handler: (request, reply) => {
                return { count: 100 }
            }
        }
    }

    const editUser = ({ fastify }) => {
        return {
            method: 'PUT',
            url: '/editUser/:id',
            handler: (request, reply) => {
                return { count: 100 }
            }
        }
    }

    const deleteUser = ({ fastify }) => {
        return {
            method: 'DELETE',
            url: '/deleteUser/:id',
            handler: (request, reply) => {
                return { count: 100 }
            }
        }
    }

    return {
        getUsers,
        addUser,
        editUser,
        deleteUser,
    }
}

module.exports = UserCrudSchema;