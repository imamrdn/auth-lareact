export default function Line({ message, ...props }) {
    return (
        <hr {...props} className="flex-grow h-px bg-gray-300"></hr>
    )
}