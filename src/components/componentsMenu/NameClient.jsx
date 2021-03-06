import React, { Component } from 'react';

class NameClient extends Component {

    //Función que toma el valor del input nombre del cliente
    handleChangeInput = (ev) => {
        const client = ev.target.value;
        this.props.inputNameClient(client);
        console.log(client);
    };

    //Función que toma el valor select de mesa
    handleChangeTableNumber = (ev) => {
        const table = ev.target.value;
        this.props.selectTable(table);
        console.log(table);
    };


    render() {
        return (
            <div className="name-Client">
                <label className="textName">Nombre del cliente</label>
                <input type="text" id="inputClient"  value = {this.props.client} onChange={(ev) => this.handleChangeInput(ev)} />
                <select name="table" className = "select-table" onChange = {(ev) => this.handleChangeTableNumber(ev)}>
                    <option value="">N° Mesa</option>
                    <option value="Mesa 1">Mesa 1</option>
                    <option value="Mesa 2">Mesa 2</option>
                    <option value="Mesa 3">Mesa 3</option>
                    <option value="Mesa 4">Mesa 4</option>
                    <option value="Mesa 5">Mesa 5</option>
                    <option value="Mesa 6">Mesa 6</option>
                    <option value="Mesa 7">Mesa 7</option>
                    <option value="Mesa 8">Mesa 8</option>
                </select>
            </div>

        );
    }
}

export default NameClient;