import { myTermProject } from "./data/termProject";
import { useParams } from "@remix-run/react";

export default function ProjView(){
    const { tpid } = useParams();

    const tpTmp = myTermProject.filter((item) => { return item.tpId === Number(tpid) 
    }).map((tpObj, index) =>
        <>
            <p>รหัสโปรเจค: {tpObj.tpId}</p>
            <p>รายวิชา: {tpObj.tpTitle}</p>
            <p>ชื่อวิชา: {tpObj.tpSubj}</p>
            <p>ภาพ: {tpObj.tpCover}</p>
            <p>url: {tpObj.tpUrl}</p>
        </>
    );

    if(tpTmp.length === 0){
        return "***ไม่พบข้อมูล***";
    }

    return(
        <>
            you choose the term project : {tpid}
            {tpTmp}
        </>
    );
}