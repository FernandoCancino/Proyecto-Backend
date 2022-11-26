// permisos de administrador
const isAdmin = true;

const adminValidationError = ()=>{
    const error = {
        error: -1,
        descripcion: 'no autorizado',
    }
    return error;
}

export const checkAdminRole = (req, res, next) => {
    if (!isAdmin) {
        res.json(adminValidationError());
    } else {
        next();
    }
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Secu