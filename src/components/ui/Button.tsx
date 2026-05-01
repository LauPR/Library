type Props = {
    text: string;
    onClick?: () => void;
}

export default function Button({ text, onClick }: Props) {
    return (
        <button
            className="
            bg-accent-primary 
            hover:bg-accent-secondary
            shadow-2xs
            shadow-shadow
            rounded-2xl
            p-2 
            m-2 
            cursor-pointer
        "
        onClick={onClick}
        >
            {text}
        </button>
    )
}