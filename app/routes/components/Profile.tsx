 export default function Profile(){
return (
    <>
    <h1 className="text-2xl text-neutral-50 text-center bg-red-600">Profile</h1>
    <div className="p-10 bg-yellow-100 rounded">
        <img src="/images/myprofile.jpg" className="rounded-full w-32 shadow-lg border-4 border-neutral-50 mx-auto"/>
        <h2 className="text-xl text-center text-red-900">About Me</h2>
        <p className="text-center border-1 rounded w-1/2 mx-auto p-5">- ชื่อ นายรัฐนันท์ รักการ -</p>
        <p className="text-center">- เกิดวันที่ 3 ตุลาคม พ.ศ. 2548 -</p>
        <p className="text-center">- เกิดที่จังหวัด กรุงเทพมหานคร -</p>
        <p className="text-center">- อำเภอ/เขต ลาดพร้าว -</p>
        <p className="text-center">- เรียนที่: มทร ตะวันออก -</p>
        <p className="text-center">- Student ID: 026730491008-1 -</p> 
   </div>

    </>
    );
 }