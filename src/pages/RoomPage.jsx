import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage=()=>{
    const {roomId}=useParams();
    const myMeeting=async (element)=>{
        const appID=663389475;
        const serverSecret="6bae40f741d0f766695a1aa121a5080a";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Alok Ranjan Jha");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
container:element,
sharedLinks:[
    {
        name:'copy Link',
        url:`http://localhost:3000/room/${roomId}`
    }
],
scenario:{
    mode:ZegoUIKitPrebuilt.OneONoneCall
},
showScreenSharingButton:false,
        });
    }
    return <div>
        <div ref={myMeeting}></div>
    </div>
};

export default RoomPage;
