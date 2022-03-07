import Usuario from "../../model/usuario";

class UsuarioNull extends Usuario{

    get iduser() {
        return 0;
    }

    get name() {
        return 'anything';
    }

    get email() {
        return 'example@gmail.com';
    }

    get password() {
        return '@#!%&*';
    }

    get decisions() {
        return [];
    }
}

export default UsuarioNull;
