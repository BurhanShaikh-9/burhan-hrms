import { Modal } from '../../components/ui/modal'
import Label from '../../components/form/Label'
import Input from '../../components/form/input/InputField'
import Button from '../../components/ui/button/Button'
import Select from '../../components/form/Select'
import { BoxIcon } from '../../icons'
import DatePicker from '../../components/form/date-picker'


interface AddTaskProps {
    isOpen: boolean;
    closeModal: () => void;
}

const AddTask = ({ isOpen, closeModal }: AddTaskProps) => {
    const handleSave = () => {
        // Handle save logic here
        console.log("Saving changes...");
        closeModal();
    };

    const roleOptions = [
        { value: "admin", label: "Admin" },
        { value: "hr", label: "Hr" },
        { value: "employee", label: "Employee" },
    ];
    const statusOption = [
        { value: "completed", label: "Completed" },
        { value: "pending", label: "Pending" },
        { value: "ongoing", label: "On-Going" },
        { value: "discontinued", label: "Discontinued" },
    ];
    const priorityOption = [
        { value: "critical", label: "Critical" },
        { value: "high", label: "High" },
        { value: "medium", label: "Medium" },
        { value: "low", label: "Low" },
    ];


    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };


    return (
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Add Task
                    </h4>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                        Update or Add Task details to keep Projects up-to-date.
                    </p>
                </div>
                <form className="flex flex-col">
                    <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                        <div>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
                                <div className="space-y-6">


                                    <div className='w-full'>
                                        <Label htmlFor="input">Add Task Name</Label>
                                        <Input type="text" id="input" placeholder='John Doe' />
                                    </div>

                                    <div>
                                        <Label htmlFor="input">Project</Label>
                                        <Select
                                            options={roleOptions}
                                            placeholder="Select an option"
                                            onChange={handleSelectChange}
                                            className="dark:bg-dark-900"
                                        />
                                    </div>

                                    <div>
                                        <DatePicker
                                            id="date-picker"
                                            label="Start Date"
                                            placeholder="Select Start Date"
                                            onChange={(dates, currentDateString) => {
                                                // Handle your logic
                                                console.log({ dates, currentDateString });
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <DatePicker
                                            id="date-picker"
                                            label="End Date"
                                            placeholder="Select End date"
                                            onChange={(dates, currentDateString) => {
                                                // Handle your logic
                                                console.log({ dates, currentDateString });
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="input">Select Status</Label>
                                        <Select
                                            options={statusOption}
                                            placeholder="Select an option"
                                            onChange={handleSelectChange}
                                            className="dark:bg-dark-900"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="input">Select Priority</Label>
                                        <Select
                                            options={priorityOption}
                                            placeholder="Select an option"
                                            onChange={handleSelectChange}
                                            className="dark:bg-dark-900"
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

export default AddTask
