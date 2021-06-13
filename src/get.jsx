import Mylist from "./list_component"
import GET from "./GET"
export default function get()
{
    
    GET();
    return (
    <div>
         <div >get page</div>
         <Mylist/>
    </div>
       
    )
}