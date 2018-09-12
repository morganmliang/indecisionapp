class IndecisionApp extends React.Component {
    render () {
        const title = 'Indecision';  
        const subtitle = 'Put your life in the hands of the computer';
        const options=['Things one', 'Thing two', 'Thing three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}> What should I do?</button>
            </div>
        );
    }
}



class Options extends React.Component {
    handleRemoveAll (){
        alert('Remove all');
    }
    
    render() {
        return (
            <div>            
                <button onClick={this.handleRemoveAll}>RemoveAll</button>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            </div>
            
        );

    }
}

//Option -> Option compnent here 
class Option extends React.Component {
    render () {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                AddOption component here
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));