import { _getPropertyModel as _getPropertyModel_1, Email as Email_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, Positive as Positive_1, Size as Size_1, StringModel as StringModel_1 } from "@vaadin/hilla-lit-form";
import type Contact_1 from "./Contact.js";
class ContactModel<T extends Contact_1 = Contact_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(ContactModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { annotations: [{ name: "jakarta.persistence.Id" }], javaType: "long" } }));
    }
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Size_1({ min: 2, max: 50 })], meta: { javaType: "java.lang.String" } }));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Email_1()], meta: { javaType: "java.lang.String" } }));
    }
    get phone(): StringModel_1 {
        return this[_getPropertyModel_1]("phone", (parent, key) => new StringModel_1(parent, key, true, { validators: [new Positive_1()], meta: { javaType: "java.lang.String" } }));
    }
}
export default ContactModel;
