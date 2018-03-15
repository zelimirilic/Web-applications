const Product = () => {
    return <li> My Product </li>
}

const ShoppingList = () => {
    return (
        <ul>
            <Product />
        </ul>
    )
}

const App = () => {
    return (
        <div>
            <h1>Hi from React!</h1>
        </div>
    )
}

const rootElement = document.querySelector(".root");

ReactDOM.render(<App />, rootElement)