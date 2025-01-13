import Category from "./Single filter/Category";
import Color from "./Single filter/Color";
import Size from "./Single filter/Size";
import { SubmitFilter } from "./Single filter/SubmitFilter";

const Filter = () => {
   return (
     <div className="py-2 gap-5 flex">
       <Category/>
       <Color/>
       <Size/>
       <SubmitFilter/>
     </div>
   );
 };
 
 export default Filter;
 