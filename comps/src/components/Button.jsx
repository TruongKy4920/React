import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest}){
    const classes= className(rest.className,'px-3 py-1.5 border',{
        "bg-blue-700 text-white": primary, 
        "bg-black text-white":secondary,
        "bg-green-600 text-white ":success,
        "bg-yellow-400 text-white":warning,
        "bg-red-600 text-white":danger,
        "rounded-full ":rounded,
        "border-2 border-blue-600 text-blue-600 bg-white":outline && primary
    }); //có thể viết là className('px-3',' py-1.5',v.v..)
    //ở đây ta muốn thống nhất 1 form kích thước của các nút-> nút nào cũng px-3 và py1.5-> cái thứ đổi duy nhất là màu
    //tao classes 2 là vì text white sẽ ghì đè mọi màu text khác-> sử dụng thư viện merge tailwind để không bị nữa
     const classes2= twMerge(className('flex items-center px-3 py-1.5 border',{
        "border-2 border-blue-600 bg-blue-700 text-white": primary, 
        "border-2 border-black bg-black text-white":secondary,
        "border-2 border-green-600 bg-green-600 text-white ":success,
        "border-2 border-yellow-600 bg-yellow-400 text-white":warning,
        "border-2 border-red-600 bg-red-600 text-white":danger,
        "rounded-full ":rounded,
        "bg-white": outline,
        "text-blue-600":outline && primary,
        "text-red-600 ":outline && danger,
        " text-yellow-600 ":outline && warning,
        "text-black ":outline && secondary,
        "text-green-600":outline && success,
        
    })
);
    return <button {...rest} className={classes2}>{children}</button>;
}
export default Button;