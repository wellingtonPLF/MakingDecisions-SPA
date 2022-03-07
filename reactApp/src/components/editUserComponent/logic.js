import React, {Component, useEffect} from 'react';
import UsuarioNull from "../../shared/solid/nullObject/UsuarioNull";
import usuarioService from "../../shared/service/usuarioService";
import UsuarioEditLayout from "./screen";
import SessionStorageUtil from "../../shared/utils/sessionStorage"

class UserEditComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: new UsuarioNull(),
        }

        this.setUser = this.setUser.bind(this)
        this.changeUser = this.changeUser.bind(this)
    }

    componentDidMount() {
        usuarioService.pesquisarPorId(SessionStorageUtil.getToken()).then(
            it => {
                this.setState({usuario: it})
            }
        )
    }

    setUser(userAtr, event){
        if(userAtr === 'name'){
            this.setState({usuario: {...this.state.usuario, name: event.target.value}})
        }
        else if (userAtr === 'email'){
            this.setState({usuario: {...this.state.usuario, email: event.target.value}})
        }
        else if (userAtr === 'password'){
            this.setState({usuario: {...this.state.usuario, password: event.target.value}})
        }
        else{
            this.setState({usuario: {...this.state.usuario}});
        }
    }

    changeUser(){
        usuarioService.atualizar(this.state.usuario).then(
            it => {}
        )
    }

    render() {
        const {usuario} = this.state;

        return (
            <>
                <UsuarioEditLayout user={usuario} inputUser={this.setUser} userChange={this.changeUser}/>
            </>
        );
    }
}

export default UserEditComponent;
