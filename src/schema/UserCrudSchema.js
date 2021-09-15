function UserCrudSchema(opts) {

    const {
        userCrudHandlers,
        Joi
    } = opts;

    const getUsers = ({ fastify }) => {
        return {
            method: 'GET',
            url: '/getUsers/:id',
            schema: {
                params: Joi.object().keys({
                    id: Joi.number().required(),
                }).options({allowUnknown: true})
            },
            handler: userCrudHandlers.getUsers
        }
    }

    const addUser = ({ fastify }) => {
        return {
            method: 'POST',
            url: '/addUser',
            schema: {
                body: Joi.object().keys({
                    firstname: Joi.string().required(),
                    lastname: Joi.string().required(),
                    gender: Joi.string().required(),
                    address: Joi.string().required(),
                    cellno: Joi.string().required(),
                }).options({allowUnknown: true})
            },
            handler: userCrudHandlers.addUser
        }
    }

    const updateUser = ({ fastify }) => {
        return {
            method: 'PUT',
            url: '/updateUser/:id',
            schema: {
                params: Joi.object().keys({
                    id: Joi.number().required(),
                }).options({allowUnknown: true}),
                body: Joi.object().keys({
                    firstname: Joi.string().required(),
                    lastname: Joi.string().required(),
                    gender: Joi.string().required(),
                    address: Joi.string().required(),
                    cellno: Joi.number().required(),
                }).options({allowUnknown: true})
            },
            handler: userCrudHandlers.updateUser
        }
    }

    const deleteUser = ({ fastify }) => {
        return {
            method: 'DELETE',
            url: '/deleteUser/:id',
            schema: {
                params: Joi.object().keys({
                    id: Joi.number().required(),
                }).options({allowUnknown: true})
            },
            handler: userCrudHandlers.deleteUser
        }
    }

    return {
        getUsers,
        addUser,
        updateUser,
        deleteUser,
    }
}

module.exports = UserCrudSchema;