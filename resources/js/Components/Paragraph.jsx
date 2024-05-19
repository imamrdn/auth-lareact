export default function Paragraph({ className = '', children, ...props }) {
    return (
        <p {...props} className={'text-gray-400 '+ className}>
            {children}
        </p>
    );
}
