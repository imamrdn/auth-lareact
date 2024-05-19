export default function Link({ className = '', children, ...props}) {
    return (
        <a {...props}>
            {children} 
        </a>
    )
}