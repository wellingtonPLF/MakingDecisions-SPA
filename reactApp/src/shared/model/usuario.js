class Usuario{

    constructor(iduser, name, email, password, decisions) {
        this._iduser = iduser;
        this._name = name;
        this._email = email;
        this._password = password;
        this._decisions = decisions;
    }

    get iduser() {
        return this._iduser;
    }

    set iduser(value) {
        this._iduser = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get decisions() {
        return this._decisions;
    }

    set decisions(value) {
        this._decisions = value;
    }
}

export default Usuario;
