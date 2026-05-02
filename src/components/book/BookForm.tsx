import Button from "../ui/Button";
import Modal from "../ui/Modal";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function ({ isOpen, onClose }: Props) {
    return (
        <div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <form
                    className="
                        bg-bg-secondary
                        flex 
                        flex-col
                        p-3
                        space-y-4
                    ">

                    <div className="space-x-2">
                        <label htmlFor="title">
                            Book title:
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder=" ''Jane Eyre'' "
                            name="title"
                            className="
                                px-3
                                border
                                border-transparent
                                rounded-2xl
                                focus:outline-none 
                                focus:border-accent-primary
                            "
                        />
                    </div>

                    <div className="space-x-2">
                        <label htmlFor="author">
                            Author's name:
                        </label>
                        <input
                            id="author"
                            type="text"
                            placeholder=" ''Edgar Allan Poe'' "
                            name="author" 
                            className="
                                px-3
                                border
                                border-transparent
                                rounded-2xl
                                focus:outline-none 
                                focus:border-accent-primary
                            "
                            />
                    </div>

                    <div className="space-x-2">
                        <label htmlFor="title">
                            Number of pages:
                        </label>
                        <input
                            id="pages"
                            type="text"
                            placeholder=" ''324'' "
                            name="pages" 
                            className="
                                px-3
                                border
                                border-transparent
                                rounded-2xl
                                focus:outline-none 
                                focus:border-accent-primary
                            "
                            />
                    </div>

                    <div>
                        <fieldset className="flex gap-2">

                            <legend>Did you read the book?</legend>

                            <input
                                id="read"
                                type="radio"
                                name="read" 
                                />
                            <label htmlFor="title" className="mr-5">
                                Yes
                            </label>

                            <input
                                id="unread"
                                type="radio"
                                name="read" />
                            <label htmlFor="title">
                                No
                            </label>

                        </fieldset>
                    </div>

                    <Button text="Save" />

                </form >
            </Modal>

        </div >
    )
}