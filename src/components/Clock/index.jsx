import React from 'react'

 class Clock extends React.Component {

    constructor(props){
        super(props)

        console.log('Passou o construtor');

        this.state = {

            time:new Date().toLocaleString(), //js
        };
    }

    componentDidMount(){
        console.log('Componente montou');

        setInterval(() => {
            this.setState({
                    time: new Date().toLocaleString(),
            })
        },1000);
    }

    shouldComponentUpdate(){
        console.log('Componente vai atualizar? ');
        return true;
    }

    componentWillUpdate(){
        console.log('compoente deve atualizar');
    }

    componentDidUpdate(){
        console.log('componenete atualizou');
    }

     render () {
        console.log ('componente no render');

        const name  = this.props.name;
        const phrase = this.props.phrase;
        const time = this.state.time;

         return (
             <div>
            <h1>React is cool, {name} </h1>
            <h2>{phrase}</h2>
            <h3>{time}</h3>
            </div>
        )
    }
 }

// 
// const Clock = function () {
//         return <h1>React is cool, name</h1>
// }

//aero function
//const Clock = () = { return }

export default Clock