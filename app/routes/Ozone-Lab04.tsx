import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MyTermProject(){

    const myPage ="Ratthanun Term Project";
    const myName ="Ratthanun Rukkarn";
    const myStudID ="026730491008-1";
    const myTermProject =[ // {}} = Objects
        {
            tpId: 1,
            tpTitle: "Web Technology",
            tpSubj: "Index of /~026730491008-1",
            tpCover: "/images/projs/TP01.png",
            tpUrl: "http://busitlab.rmutto.ac.th/~026730491008-1/",
            tpTeam: true
        },
        {
            tpId: 2,
            tpTitle: "IT Fundamental",
            tpSubj: "วิดีโอเรื่องโดรน",
            tpCover: "/images/projs/TP02.png",
            tpUrl: "https://drive.google.com/file/d/1lDo_sj30kjfrl4ed50TPs3w2aLZqcKEu/view",
            tpTeam: false
        },
        {
            tpId: 3,
            tpTitle: "Computing Platform Technology",
            tpSubj: "Windows Server",
            tpCover: "/images/projs/TP03.png",
            tpUrl: "https://sites.google.com/rmutto.ac.th/web-windows-server?usp=sharing",
            tpTeam: true
        }
    ];

    const termProj = myTermProject.map((tpObj, index) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300">
    <div className="w-32 p-1">
    <img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj.tpSubj+" ID: " +tpObj.tpId} />
    </div>
    <div className="p-4 col-span-3 mb-auto">
    <h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSubj}</h2>
    <p className="text-gray-600 text-sm mt-2">{tpObj.tpTitle}</p>
    </div>
    <div className="p-4 mb-auto">
    <a href={tpObj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 px-10 py-2">Preview</a>
    </div>
    </div>
    );
    return (
        <>
      <Header title={myPage}/>  
      <p className="text-xl m-3 text-center">
        Name: {myName} Student ID: ({myStudID})
      </p>
      <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2x1 border border-gray-300">
      {termProj}
      </div>
      <div className="ps-5 pe-5 pt-3 pb-3 bg-red-600 rounded w-16 flex justify-center mt-5">
        <a href="/">Back</a>
        </div>
      <Footer title="2025 Ratthanun Rukkarn. All Right Reserved." />
        </>
    );
}