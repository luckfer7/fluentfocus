export default function TitleTwo({ children, className, ...props }){
    return(
        <h2 className={` font-Raleway ${className}` } {...props}>
            {children}
        </h2>
    )
}