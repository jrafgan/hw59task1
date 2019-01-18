import React, {Component} from 'react';
import './App.css';
import InputForm from "../components/InputForm";
import imgUrl from '../assets/61848.png'
import ItemList from "../components/ItemList";



class App extends Component {

    newText = '';

    state = {
        movies: [],
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.movies !== nextState.movies;
    }

    componentDidMount() {
        if (localStorage.getItem('movie') === null) return;
        let copy = this.state.movies;
        copy = JSON.parse(localStorage.getItem('movie'));
        this.setState({movies: copy});
    }

    addBtn() {
        const id = Math.random()*1000;
        let copy = this.state.movies;
        copy.push({id: id, text: this.newText});
        this.setState({movies: copy});
        localStorage.setItem('movie', JSON.stringify(copy));
    }

    addNewMovie(event) {
        this.newText = event.currentTarget.value;
    }

    editMovieName(event) {
        const id = event.currentTarget.id;
        let copy = this.state.movies;
        const index = copy.findIndex(item => item.id === parseFloat(id));
        copy[index].text = event.currentTarget.value;
        console.log(copy[index]);
        this.setState({movies: copy})
        localStorage.setItem('movie', JSON.stringify(copy));
    }

    deleteItem(event) {
        const id = event.currentTarget.id;
        const copy = this.state.movies;
        const index = copy.findIndex(item=>item.id === parseFloat(id));
        copy.splice(index, 1);
        localStorage.setItem('movie', JSON.stringify(copy));
        this.setState({movies: copy});
    }

    lSclear() {
        localStorage.clear();
    }

    render() {

        return (
            <div className="App container">
                <div className="input-form">
                    <InputForm onChangeName={this.addNewMovie.bind(this)} addBtn={this.addBtn.bind(this)}/>
                </div>
                <div className="outcomeList">
                    <p>List of Movies to Watch : </p>
                    {this.state.movies.map((item, key) => {
                        return <ItemList id={item.id} name={item.text} imgUrl={imgUrl} key={key}
                                         onClick={this.deleteItem.bind(this)} onChange={this.editMovieName.bind(this)}/>
                    })}
                </div>
                <button className="localStorage" onClick={this.lSclear}>Clear Local Storage</button>
            </div>
        )
    }
}


export default App;
