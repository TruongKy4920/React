function Button({children,primary,secondary,success,warning,danger,outline,rounded}){
    return <button className="px-3 py-1.5 bg-blue-700 text-white border border-green-500">{children}</button>;
}
export default Button;