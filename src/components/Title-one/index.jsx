export default function TitleOne({ children, className, ...props }){
    return(
        <h1 className={` font-Raleway ${className}` } {...props}>
            {children}
        </h1>
    )
}