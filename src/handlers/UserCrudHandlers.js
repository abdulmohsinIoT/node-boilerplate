function UserCrudHandlers(opts) {

    const { logger, svcUserCurd } = opts;

    const getUsers = async (request, reply) =>{
        const id = request.params.id;
        const userGet = await svcUserCurd.userGet({id});

        reply.send({ ok: true, userGet });
    }

    const addUser = async (request, reply) =>{
        const body = request.body;

        const userAdded = await svcUserCurd.userCreate({
            firstname: body.firstname,
            lastname: body.lastname,
            gender: body.gender,
            address: body.address,
            cellno: body.cellno
        });
        reply.send({ ok: true ,userAdded });
    }

    const updateUser = async (request, reply) =>{
        const body = request.body;
        const id = request.params.id;

        const userUpdate = await svcUserCurd.userUpdate({
            firstname: body.firstname,
            lastname: body.lastname,
            gender: body.gender,
            address: body.address,
            cellno: body.cellno,
            id: id
        });
        reply.send({ ok: true ,userUpdate });
    }

    const deleteUser = async (request, reply) =>{
        const id = request.params.id;
        const userDelete = await svcUserCurd.userDelete({id});

        reply.send({ ok: true, userDelete });
    }


    return {
        getUsers,
        addUser,
        updateUser,
        deleteUser,
    }
}

module.exports = UserCrudHandlers;