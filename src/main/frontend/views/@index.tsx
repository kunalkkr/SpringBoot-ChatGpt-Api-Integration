import { VerticalLayout } from '@vaadin/react-components/VerticalLayout';
import '../styles/styles.css';
import { ContactService } from "Frontend/generated/endpoints";
import {AutoCrud} from "@vaadin/hilla-react-crud";
import ContactModel from "Frontend/generated/com/example/demo/data/ContactModel";

export default function ContactView() {
    return <AutoCrud service={ContactService} model={ContactModel} className="h-full" />;
}
