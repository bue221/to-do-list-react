import React,{ Component  } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { todo } from './todo';
import Formulario from './components/Formulario'

class App extends Component{
	constructor(){
		super();
		this.state= {
			todo

		};
		this.agregar = this.agregar.bind(this);
	}
	agregar(todo){
		this.setState({
			todo: [...this.state.todo, todo]
		})
	}

	eliminar(index){
		if(window.confirm('estas seguro de eliminar?')){
		this.setState({
			todo: this.state.todo.filter((e,i)=>{
				return i !== index
			}) 
		})
	}
	}
	render(){
		const todo = this.state.todo.map((todo, i)=>{
			return(
				<div className="col-md-4" key={i}>
					<div className="card mt-4">
						<div className="card-header">
							<h3>{todo.titulo}</h3>
							<span className="badge badge-pill badge-danger ml-2">
								{todo.prioridad}
							</span>
						</div>
						<div className="card-body">
							<p>{todo.contenido}</p>
							<p>
								<mark>{todo.persona}</mark>
							</p>
						</div>
						<div className="card footer">
							<button className="btn btn-danger" onClick= {this.eliminar.bind(this, i)} >
								Eliminar
							</button>
						</div>
					</div>

				</div>
				);

		})
		return(
			<div className="App">
				<Nav 
				titulo ="Task"
				ntareas = {this.state.todo.length}	
				/>
					<div className="container">				
						<div className="row mt-4">
							<div className="col-md-3">
									<img src={logo} className="App-logo" alt="logo" />
									<Formulario onAdd= {this.agregar}/>
									
							</div>
							<div className="col-md-9">
								<div className="row">
								{ todo }
								</div>
							</div>

					</div>
				</div>
			</div>

			);
}
}

export default App;
