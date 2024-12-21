export default function TitleOne({ children, className, ...props }){
    return(
        <h1 className={`  ${className}` } {...props}>
            {children}
        </h1>
    )
}