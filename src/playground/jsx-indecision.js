console.log('Ápp.js is running!');

//if statements
//ternary operator
//logical and operator

//create app object title/subtitle
//user title/subtitle in the template
//render template
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const wipeArray = () => {
   

    app.options = [];

    renderApp();

}

// JSX - Javascript XML


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

let visibility = false;

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const toggleVisibility = () => {
    visibility = !visibility;
    if (visibility===true){
        <p>Showing Details</p>
    }else {
        <p></p>
    }
    renderApp();
}




const renderApp = () => {
    const template = (
        <div>
           <h1>{app.title}</h1>
           <p>{app.subtitle}</p>
           <p>{app.options.length> 0 ? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' :'Show details'}</button>
            {
                visibility && (
                    <div>
                    <p>Hey there are some details you can now see!</p>
                    </div>
                )
            }

           <button onClick={wipeArray}>Remove All</button>
           <ol>{
                app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                })           
               //<li>Item one</li>
               //<li>Item two</li>
            }
           </ol>
           <form onSubmit={onFormSubmit}>
               <input type="text" name="option"/>
               <button>Add Option</button>
           </form>
       </div>
   );   
   
    ReactDOM.render(template,appRoot);

}

renderApp();
