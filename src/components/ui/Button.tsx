type Props = {
    text: string;
}

export default function Button({text} : Props){
    return(
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
        ">
            {text}
        </button>
    )
}