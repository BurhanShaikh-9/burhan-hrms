// import PageMeta from '../../components/common/PageMeta'
// import PageBreadcrumb from '../../components/common/PageBreadCrumb'
// import Label from '../../components/form/Label';
// import Input from '../../components/form/input/InputField';
// import ComponentCard from '../../components/common/ComponentCard';
// import Select from '../../components/form/Select';
// import Button from '../../components/ui/button/Button';
// import { BoxIcon, EnvelopeIcon } from '../../icons';
// import PhoneInput from '../../components/form/group-input/PhoneInput';




// const AddUser = () => {

//     const roleOptions = [
//         { value: "admin", label: "Admin" },
//         { value: "hr", label: "Hr" },
//         { value: "employee", label: "Employee" },
//     ];
//     const designationOptions = [
//         { value: "marketing", label: "Marketing" },
//         { value: "template", label: "Template" },
//         { value: "development", label: "Development" },
//     ];
//     const countries = [
//         { code: "US", label: "+1" },
//         { code: "GB", label: "+44" },
//         { code: "CA", label: "+1" },
//         { code: "AU", label: "+61" },
//     ];
//     const handleSelectChange = (value: string) => {
//         console.log("Selected value:", value);
//     };
//     const handlePhoneNumberChange = (phoneNumber: string) => {
//         console.log("Updated phone number:", phoneNumber);
//     };

//     return (
//         <div>
//             <PageMeta
//                 title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
//                 description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
//             />
//             <div className="flex justify-between items-center mb-6">

//                 <PageBreadcrumb pageTitle="Add User" />
//             </div>
//             <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
//                 <ComponentCard>
// <div className="space-y-6">
//     <div className='flex gap-6'>

//         <div className='w-full'>
//             <Label htmlFor="input">Name</Label>
//             <Input type="text" id="input" placeholder='John Doe' />
//         </div>
//         <div className='w-full'>
//             <Label htmlFor="input">Email</Label>
//             <div className="relative">
//                 <Input
//                     placeholder="info@gmail.com"
//                     type="text"
//                     className="pl-[62px]"
//                 />
//                 <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
//                     <EnvelopeIcon className="size-6" />
//                 </span>
//             </div>
//         </div>
//     </div>
//     <div>
//         <Label htmlFor="input">Phone</Label>
//         <PhoneInput
//             selectPosition="start"
//             countries={countries}
//             placeholder="+1 (555) 000-0000"
//             onChange={handlePhoneNumberChange}
//         />
//     </div>
//     <div>
//         <Label htmlFor="input">Role</Label>
//         <Select
//             options={roleOptions}
//             placeholder="Select an option"
//             onChange={handleSelectChange}
//             className="dark:bg-dark-900"
//         />
//     </div>
//     <div>
//         <Label htmlFor="input">Designation</Label>
//         <Select
//             options={designationOptions}
//             placeholder="Select an option"
//             onChange={handleSelectChange}
//             className="dark:bg-dark-900"
//         />
//     </div>

//     <Button
//         size="md"
//         variant="primary"
//         startIcon={<BoxIcon className="size-5" />}
//     >
//         Save
//     </Button>
// </div>
//                 </ComponentCard>
//             </div>
//         </div>
//     )
// }

// export default AddUser



import { useState } from 'react'
import { Modal } from '../../components/ui/modal'
import Label from '../../components/form/Label'
import Input from '../../components/form/input/InputField'
import Button from '../../components/ui/button/Button'
import Select from '../../components/form/Select'
import { BoxIcon, EnvelopeIcon, EyeCloseIcon, EyeIcon } from '../../icons'
import PhoneInput from '../../components/form/group-input/PhoneInput'

interface AddUserProps {
    isOpen: boolean;
    closeModal: () => void;
}

const AddUser = ({ isOpen, closeModal }: AddUserProps) => {
    const [showPassword, setShowPassword] = useState(false);
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
    const designationOptions = [
        { value: "marketing", label: "Marketing" },
        { value: "template", label: "Template" },
        { value: "development", label: "Development" },
    ];
    const countries = [
        { code: "PK", label: "+92" },
        { code: "GB", label: "+44" },
    ];
    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };
    const handlePhoneNumberChange = (phoneNumber: string) => {
        console.log("Updated phone number:", phoneNumber);
    };

    return (
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                    <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        Add User
                    </h4>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                        Update or Add user details to keep system up-to-date.
                    </p>
                </div>
                <form className="flex flex-col">
                    <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                        <div>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
                                <div className="space-y-6">


                                    <div className='w-full'>
                                        <Label htmlFor="input">Name</Label>
                                        <Input type="text" id="input" placeholder='John Doe' />
                                    </div>
                                    <div className='w-full'>
                                        <Label htmlFor="input">Email</Label>
                                        <div className="relative">
                                            <Input
                                                placeholder="info@gmail.com"
                                                type="text"
                                                className="pl-[62px]"
                                            />
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                                                <EnvelopeIcon className="size-6" />
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="input">Phone</Label>
                                        <PhoneInput
                                            selectPosition="start"
                                            countries={countries}
                                            placeholder="+1 (555) 000-0000"
                                            onChange={handlePhoneNumberChange}
                                        />
                                    </div>
                                    <div>
                                        <Label>Password</Label>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                            />
                                            <div
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                            >
                                                {showPassword ? (
                                                    <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                                                ) : (
                                                    <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="input">Role</Label>
                                        <Select
                                            options={roleOptions}
                                            placeholder="Select an option"
                                            onChange={handleSelectChange}
                                            className="dark:bg-dark-900"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="input">Designation</Label>
                                        <Select
                                            options={designationOptions}
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

export default AddUser
