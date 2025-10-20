import Button from "./Button";
function App(){
    return <div>
        <div><Button primary outline rounded>Click there</Button></div>
        <div><Button success outline rounded>Click here</Button></div>
        <div><Button secondary outline rounded>Click 1</Button></div>
        <div><Button danger outline rounded>Click 2</Button></div>
        <div><Button warning outline rounded>Click 3</Button></div>
    </div>;
}
export default App;