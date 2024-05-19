export default function Heading({ level = 1, className = '', children, ...props }) {
    const Tag = `h${level}`;
    const textSize = {
        1: 'text-4xl', 
        2: 'text-3xl', 
        3: 'text-2xl', 
        4: 'text-xl',  
        5: 'text-lg',  
        6: 'text-base',
        7: 'text-5xl', 
        8: 'text-6xl', 
        9: 'text-7xl', 
        10: 'text-8xl',
        11: 'text-9xl'
    }[level] || 'text-base';

    return (
        <Tag {...props} className={`font-bold ${textSize} ${className}`}>
            {children}
        </Tag>
    );
}
