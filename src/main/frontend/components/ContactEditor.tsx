import Contact from "Frontend/generated/com/example/demo/data/Contact";
import {useForm} from "@vaadin/hilla-react-form";
import ContactModel from "Frontend/generated/com/example/demo/data/ContactModel";
import {Button, TextField} from "@vaadin/react-components";
import {useEffect} from "react";

interface ContactEditorProps {
    contact: Contact;
    onSubmit: (contact: Contact) => Promise<void>;
}

export default function ContactEditor({contact, onSubmit}: ContactEditorProps) {

    const {field, model, submit, read}=useForm(ContactModel,{onSubmit});

    useEffect(()=> {
        read(contact);
    },[contact]);
    return (
        <div className="grid grid-cols-2 gap-s items-baseline">
            <TextField label="Name" {...field(model.name)}/>
            <TextField label="Email" {...field(model.email)}/>
            <TextField label="Phone" {...field(model.phone)}/>
            <Button onClick={submit} theme="primary">Save</Button>
        </div>
    );
};