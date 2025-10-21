import Accordion from "./components/Accordion";
function App(){
   const arr_accor=[{
    id: 1,
    label: "hello",
    content: "Hi, how are you"
   },
   {
    id: 2,
    label: "What's up",
    content: "yooooooo"
   },
   {
    id: 3,
    label: "Turn down ?",
    content: "4 wat !!!"
   }];
    return <div>
      <Accordion items={arr_accor}></Accordion>
    </div>;
}
export default App;