export default function TitleTwo({ children, className, ...props }){
    return(
        <h2 className={`${className}` } {...props}>
            {children}
        </h2>
    )
}