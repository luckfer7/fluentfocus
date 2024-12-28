export default function Paragraph({ children, className, ...props }) {
    return(
        <p className={` font-Raleway ${className}` } {...props}>{children}</p>
    )
}