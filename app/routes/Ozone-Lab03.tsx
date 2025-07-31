 // Filename Ozone-Lab03.tsx
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
 export default function MyProfile(){
    return (
        <>
        <Profile />
        <div className="flex items-center m5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
        <Contact 
        label="OzenoØ13" 
        link="https://twitter.com/Ozeno013" 
        icon="/images/twitter.png"
        />
        <Contact 
        label="Ratthanun" 
        link="https://www.facebook.com/ratthanun.rukkarn.9/?locale=th_TH" 
        icon="/images/facebook.png"
        />
        <Contact 
        label="Ozeno013" 
        link="https://www.instagram.com/ozeno013" 
        icon="/images/instagram.png"
        />
        </div>
        </div>
        <div className="ps-5 pe-5 pt-3 pb-3 bg-red-600 rounded w-16 flex justify-center mt-5">
        <a href="/">Back</a>
        </div>
        <Footer title="2025 Ratthanun Rukkarn. All Right Reserved." />
        </>
    );
 }