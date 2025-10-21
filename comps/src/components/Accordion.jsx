function Accordion({items}){
    const re_render=items.map((item,id)=>{
        return (
        <div key={item.id}>
            <div>{item.label}</div>
            <div>{item.content}</div>
        </div>);
    });
    return (
        <div>{re_render}</div>
    );
}
export default Accordion;