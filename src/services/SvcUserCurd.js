/* A Detailed Bind Example Can Also Been Viewed AT /src/helpers/Encryptor.js */
async function modifyUsersModel({ userModel }, arg) {

    const model = userModel;

    console.log("bindExample > Unmodified model >", model);

    const modifiedModel = {
        ...model,
        ...arg,
    }

    console.log("bindExample > Modified model >", modifiedModel);

    return modifiedModel;
}




module.exports = function SvcUserCurd(opts) {

    const { mdlUserCurd, db } = opts;

    const userExists = async ({ id }) => {

        const { exists } = mdlUserCurd;

        const userExists = await db.primary.task(async (tx) => await tx.one(exists, {id: id}));

        return userExists;
    };

    const userGet = async ({id}) => {
        const { exists, get } = mdlUserCurd;

        const userExists = await db.primary.task(async (tx) => await tx.one(exists, {id: id}));

        if(userExists.exists == 1){
            const userGet = await db.primary.task(async (tx) => await tx.one(get, {id: id}));
            return userGet;
        }
        return userExists;
    };


    const userCreate = async (params) => {
        const { exists, create } = mdlUserCurd;

        const createUser = await db.primary.task(async (tx) => await tx.one(create, params));
        const userExists = await db.primary.task(async (tx) => await tx.one(exists, {id: createUser.id}));

        return userExists;
    };

    const userDelete = async ({id}) => {
        const { exists, deleteSQL } = mdlUserCurd;

        const userExists = await db.primary.task(async (tx) => await tx.one(exists, {id: id}));
        if(userExists.exists == 1){
            const userDelete = await db.primary.task(async (tx) => await tx.one(deleteSQL, {id: id}));
            return userDelete;
        }
        return userExists;
    };

    const userUpdate = async (params) => {
        const { exists, update } = mdlUserCurd;

        const userExists = await db.primary.task(async (tx) => await tx.one(exists, {id: params.id}));
        if(userExists.exists == 1){
            const updateUser = await db.primary.task(async (tx) => await tx.one(update, params));
            return updateUser;
        }
        return userExists;
    };

    return {
        userExists,
        userGet,
        userCreate,
        userDelete,
        userUpdate,
        modifyUsersModel: modifyUsersModel.bind(null, {
            userModel: opts.mdlUserCurd,
        }),
    }
}