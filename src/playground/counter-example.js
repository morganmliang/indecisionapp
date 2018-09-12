console.log('Ápp.js is running!');

//if statements
//ternary operator
//logical and operator

//create app object title/subtitle
//user title/subtitle in the template
//render template
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}


// JSX - Javascript XML
const template = (
     <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);   



let user = {
    //name: 'Andrew',
    age: 17,
    location: 'New York'
}

const userName = 'Mike';
const userAge = 27;
const userLocation = 'New York';

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

let count = 0;
const addOne = () => {
    count++;
    console.log('addOne',count);
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
}
const reset = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
}
const templateTwo = (
    <div>
        <h1> Count: {count}</h1>
        <button onClick={addOne}>+1</button>  
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
console.log(templateTwo);

var appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={addOne}>+1</button>  
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()