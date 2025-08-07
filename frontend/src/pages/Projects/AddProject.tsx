
import { useState } from 'react'
import { Modal } from '../../components/ui/modal'
import Label from '../../components/form/Label'
import Input from '../../components/form/input/InputField'
import Button from '../../components/ui/button/Button'
import { BoxIcon } from '../../icons'
import MultiSelect from '../../components/form/MultiSelect'
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPEG", "PNG", "GIF", "docx", "docs"];

interface AddProjectProps {
    isOpen: boolean;
    closeModal: () => void;
}

const AddProject = ({ isOpen, closeModal }: AddProjectProps) => {
    const handleSave = () => {
        // Handle save logic here
        console.log("Saving changes...");
        closeModal();
    };

    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const userOptions = [
        { value: "1", text: "Option 1", selected: false },
        { value: "2", text: "Option 2", selected: false },
        { value: "3", text: "Option 3", selected: false },
        { value: "4", text: "Option 4", selected: false },
        { value: "5", text: "Option 5", selected: false },
    ];


    const [file, setFile] = useState<File | File[] | null>(null);
    const handleChange = (file: File | File[]) => {
        setFile(file);
    };

    return (
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Add Project
                    </h4>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                        Update or Add Project details to keep company up-to-date.
                    </p>
                </div>
                <form className="flex flex-col">
                    <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                        <div>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
                                <div className="space-y-6">


                                    <div className=''>
                                        <Label htmlFor="input">Project Name</Label>
                                        <Input type="text" id="input" placeholder='John Doe' />
                                    </div>
                                    <div>
                                        <MultiSelect
                                            label="Assigned User"
                                            options={userOptions}
                                            onChange={(values) => setSelectedValues(values)}
                                        />
                                        <p className="sr-only">
                                            Selected Values: {selectedValues.join(", ")}
                                        </p>
                                    </div>
                                    <div>
                                        <Label htmlFor="file">Files Upload</Label>
                                        <FileUploader
                                            multiple={true}
                                            handleChange={handleChange}
                                            name="file"
                                            types={fileTypes}
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                        <Button
                            size="md"
                            variant="primary"
                            startIcon={<BoxIcon className="size-5" />}
                            onClick={handleSave}
                        >
                            Add
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default AddProject
