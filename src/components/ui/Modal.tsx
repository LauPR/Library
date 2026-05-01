import Button from "./Button";

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: Props) {

    if (!isOpen) return null;

    return (
        <div
            className="
                fixed 
                inset-0
                bg-bg-primary
                bg-opacity-50 
                flex 
                justify-center 
                items-center 
                z-50"
        >
            <div
                className="
                    bg-bg-secondary 
                    rounded-lg 
                    p-6 
                    relative"
                onClick={(e) => e.stopPropagation()}
                
            >
                <Button text={"vklfejl"} onClick={onClose} />
                {children}
            </div>
        </div>
    )
}