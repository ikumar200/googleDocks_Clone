import { Editor } from "./editor";
import {Toolbar} from "./toolbar"
interface DocumentIDPageProps{
    params:Promise<{documentId:string}>;
};

const DocumentIdPage=async ({params}:DocumentIDPageProps)=>{
    const {documentId}=await params;
    return(
        <div className="min-h-screen bg-[#FAFBFD]">
            <Toolbar></Toolbar>
                <Editor></Editor>
        </div>
    );
}

export default DocumentIdPage;