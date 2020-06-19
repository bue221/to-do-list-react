import React, { Component } from 'react';

class Formulario extends Component{
	constructor(){
		super();
		this.state = {
			titulo: ' ',
			persona: ' ',
			contenido: ' ',
			prioridad: 'low'
		};
		this.cambio = this.cambio.bind(this);
		this.enviar = this.enviar.bind(this);
	}
	cambio(e) {
		const {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	enviar(e){
		e.preventDefault();
		this.props.onAdd(this.state);
		console.log('envio');
	}
	render(){	
		return(
			<div className="card">
				<form className="card-body" onSubmit={this.enviar}>
					<div className="form-group">
						<input className="form-control" type="text" name="titulo" placeholder="titulo" onChange= {this.cambio} />
					</div>
					<div className="form-group">
						<input className="form-control" type="text" name="persona" placeholder="persona"  onChange= {this.cambio} />
					</div>
					<div className="form-group">
						<input className="form-control" type="text" name="contenido" placeholder="contenido" onChange= {this.cambio}  />
					</div>
					<div className="form-group">

						<select
						name="priority"
						className="form-control"
						value={this.state.priority}
						onChange= {this.cambio} 
						>
						<option>low</option>
						<option>medium</option>
						<option>high</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Save
				</button>
			</form>
		</div>
		);
	}
}


export default Formulario;
