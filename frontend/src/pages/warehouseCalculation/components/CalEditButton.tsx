// await shelfBoxStorageService.getStoredWareHouseDocumentNo(documentWarehouseNo);

import { Button } from "@radix-ui/themes";
import { TypeCalWarehouse } from "@/types/response/reponse.cal_warehouse";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Calculator, Pencil } from "lucide-react";


const CalEditButton = ({ calWarehouse }: { calWarehouse: TypeCalWarehouse }) => {
    const navigate = useNavigate();
    const buttonRole = calWarehouse?.master_warehouse_id;
    const pathClick =  `${calWarehouse.document_warehouse_no}`
    return (
        <Button className="w-28 flex justify-between" onClick={() => navigate(`/warehouse-calculation/${pathClick}`)} color={buttonRole?'purple':'blue'}>
          {buttonRole ? (
  <div className="flex  grow">
    <Pencil className="w-4 h-4  " />
  <b className="text-[12px] mx-auto">Edit </b>  
  </div>
) : (
  <>
    <Calculator className="w-4 h-4  " />
    <b className="text-[12px]">Calculation</b>
    
  </>
)}
        </Button>
    )
}
export default CalEditButton;