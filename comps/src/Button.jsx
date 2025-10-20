import className from 'classnames';
function Button({children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded}){
    const classes= className('px-3 py-1.5 border',{
        "bg-blue-700 text-white": primary, 
        "bg-black text-white":secondary,
        "bg-green-500 ":success,
        "bg-yellow-400":warning,
        "bg-red-500":danger,
        "rounded-full":rounded,
        "border-4 border-pink-800":outline
    }); //có thể viết là className('px-3',' py-1.5',v.v..)
    //ở đây ta muốn thống nhất 1 form kích thước của các nút-> nút nào cũng px-3 và py1.5-> cái thứ đổi duy nhất là màu
    return <button className={classes}>{children}</button>;
}
export default Button;