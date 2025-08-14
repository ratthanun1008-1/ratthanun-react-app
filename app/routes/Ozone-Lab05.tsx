import Header from "./components/Header";
import Footer from "./components/Footer";
import { myTermProject } from "./data/termProject";
import { useState } from "react";

export default function MyTermProject(){

  const [isTeam, setIsTeam] = useState(null);

  const handleTeam = (isTeam: any) => {
    setIsTeam(isTeam);
  }

    const myPage ="Ratthanun Term Project";
    const myName ="Ratthanun Rukkarn";
    const myStudID ="026730491008-1";
   

    const tpSingle = myTermProject.filter(tpTmp => {
      if (isTeam === null)
        return tpTmp.tpTeam === true || tpTmp.tpTeam === false
      else
        return tpTmp.tpTeam === isTeam
    });

    // function handleClick (){
    //  alert("คุณได้เลือกโปรเจค");
    // }
    const handleClick_b = (tpId: any, ind: any) => {
      let myOut = "";
      let myObj = myTermProject[ind]

      myOut+= "[ ข้อมูลโปรเจค ]\n";
      myOut+= "รหัส (ID): "+myObj.tpId+"\n";
      myOut+= "รายวิชา (Subject): "+myObj.tpSubj+"\n";
      myOut+= "รูปภาพ (Images): "+myObj.tpCover+"\n";
      myOut+= "ลิงค์ (Link): "+myObj.tpUrl+"\n";
      myOut+= "\n-- Thank You --";

      // alert("คุณได้เลือกโปรเจค รหัส:"+tpId+ "!");
      alert(myOut);
    }

    const termProj = tpSingle.map((tpObj, index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300">
    <div className="w-32 p-1">
    <img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj.tpSubj+" ID: " +tpObj.tpId} />
    </div>
    <div className="p-4 col-span-3 mb-auto">
    <h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSubj}</h2>
    <p className="text-gray-600 text-sm mt-2">{tpObj.tpTitle}</p>
    </div>
    <div className="p-4 mb-auto">
    <a href="#" className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2"
    onClick={() => handleClick_b(tpObj.tpId, index)}
    >Preview</a>
    </div>
    </div>
    );
    return (
        <>
      <Header title={myPage}/>  
      <p className="text-xl m-3 text-center">
        Name: {myName} Student ID: ({myStudID})
      </p>

      <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2x1 border border-gray-300 flex justify-center grid-cols-3 gap-2 mb-1">
      <button className="w-50 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
      onClick={() => handleTeam(null)}>
        [A] All
        </button>
        <button className="w-50 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
        onClick={() => handleTeam(true)}>
        [T] Team
        </button>
        <button className="w-50 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
        onClick={() => handleTeam(false)}>
        [S] Single
        </button>
      </div>
      <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2x1 border border-gray-300">
      {termProj}
      </div>

      <h3 className="w-1/2 mx-auto rounded-2xl flex justify-center">
      จำนวน {myTermProject.length} รายการ
      </h3>
      <div className="ps-5 pe-5 pt-3 pb-3 bg-red-600 rounded w-16 flex justify-center mt-5">
        <a href="/">Back</a>
        </div>
      <Footer title="2025 Ratthanun Rukkarn. All Right Reserved." />
        </>
    );
}