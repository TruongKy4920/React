import Button from "./Button";
function App(){
    return <div>
        <div><Button primary rounded>Click there</Button></div>
        <div><Button success outline>Click here</Button></div>
        <div><Button secondary rounded>Click 1</Button></div>
        <div><Button danger outline>Click 2</Button></div>
        <div><Button warning rounded>Click 3</Button></div>
    </div>;
}
export default App;