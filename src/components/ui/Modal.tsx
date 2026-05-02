import Button from "./Button";
import {X} from 'lucide-react';

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
                bg-bg-primary/70
                flex 
                justify-center 
                items-center 
                z-50"
        >
            <div
                className="
                    bg-bg-secondary 
                    border
                    border-border-subtle
                    shadow-lg
                    shadow-bg-primary
                    rounded-lg 
                    p-6 
                    relative"
                onClick={(e) => e.stopPropagation()}
                
            >
                <Button icon={<X />} onClick={onClose} variant="danger" className="absolute top-2 right-2 p-1 rounded-full" />
                {children}
            </div>
        </div>
    )
}