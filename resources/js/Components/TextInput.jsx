import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', svgIcon, className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="relative flex flex-col items-start ">
            <input
                {...props}
                type={type}
                className={
                    'pl-10 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 rounded-md shadow-sm placeholder:text-gray-400 ' +
                    className
                }
                ref={input}
            />
            {svgIcon && (
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {svgIcon}
                </div>
            )}
            
        </div>
    );
});
