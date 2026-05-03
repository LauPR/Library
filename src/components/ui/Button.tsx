import { cn } from "@/lib/utils";

type Props = {
    text?: string;
    type?: 'submit' | 'reset' | 'button';
    icon?: React.ReactNode;
    variant?: 'primary' | 'danger';
    onClick?: () => void;
    className?: string;
}

export default function Button({ text, type = 'button', icon, variant = 'primary', onClick, className }: Props) {

    const variants = {
            primary: "bg-accent-primary hover:bg-accent-secondary active:shadow-none",
            danger: "bg-danger hover:bg-danger-hover text-text-danger active:shadow-none"
    };

    return (
        <button
            className={
                cn(
                    "shadow-md",
                    "shadow-shadow",
                    "rounded-2xl",
                    "p-2",
                    "m-2",
                    "cursor-pointer",
                    variants[variant],
                    className
                )
            }
            onClick={onClick}
            type={type}
        >
            {text}
            {icon}
        </button>
    )
}