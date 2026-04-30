type Props = {
    text: string;
}

export default function Button({text} : Props){
    return(
        <button 
        className="
            bg-accent-primary 
            p-2 
            m-2 
            cursor-pointer
        ">
            {text}
        </button>
    )
}