import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom';

function VideoRoom() {
let {roomId}=useParams()
const myMeeting = async (element) => {
  try {
    await navigator.mediaDevices.getUserMedia({ video: true, audio: true }); // Request permissions

    const appID = 137382132;
    const serverSecret = "904b0d4aac7237a69f874ad01cd8ee94";
    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "sam abiodun"
    );

    const zp = ZegoUIKitPrebuilt.create(KitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `${window.location.origin}/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  } catch (error) {
    console.error("Device access denied:", error);
  }
};

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom
