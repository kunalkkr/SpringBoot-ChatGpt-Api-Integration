import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {AiService} from "Frontend/generated/endpoints";

export default function AiChat(){

    const [prompt, setPrompt] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    async function send(){
        AiService.getCompletion(prompt).onNext(token => setResponse(res => res + token));
    }

    return (
     <div className="p-m">
         <div>
            <TextField placeholder="What would you like to do?" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
            <Button onClick={send}>Send</Button>
         </div>
         <p>
             {response}
         </p>
     </div>
    );

}