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
                    ">

                    <div>
                        <label htmlFor="title">
                            Book title:
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Jane Eyre"
                            name="title"
                        />
                    </div>

                    <div>
                        <label htmlFor="author">
                            Author's name:
                        </label>
                        <input
                            id="author"
                            type="text"
                            placeholder="Edgar Allan Poe"
                            name="author" />
                    </div>

                    <div>
                        <label htmlFor="title">
                            Number of pages:
                        </label>
                        <input
                            id="pages"
                            type="text"
                            placeholder="324"
                            name="pages" />
                    </div>

                    <div>
                        <fieldset>

                            <legend>Did you read the book?</legend>

                            <label htmlFor="title">
                                Yes
                            </label>
                            <input
                                id="read"
                                type="radio"
                                name="read" />

                            <label htmlFor="title">
                                No
                            </label>
                            <input
                                id="unread"
                                type="radio"
                                name="read" />

                        </fieldset>
                    </div>

                    <Button text="Save" />

                </form >
            </Modal>

        </div >
    )
}