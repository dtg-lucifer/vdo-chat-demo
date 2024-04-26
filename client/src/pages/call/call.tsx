import { useNavigate, useParams } from "react-router-dom";
import styles from "./call.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import RoomPage from "../room";

const Call = () => {
  const { id } = useParams<{ id?: string }>();
  const [link, setLink] = useState<string>("");
  const [roomID, setRoomID] = useState<string>("");
  const linkInputRef = useRef<HTMLInputElement>(null);
  const navigateTo = useNavigate();

  const generateLink = useCallback(() => {
    const id = Math.random().toString(36).substring(2, 10);
    setLink(`http://localhost:3000/call/${id}`);
  }, []);

  const handleClickCopyButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    navigator.clipboard.writeText(linkInputRef.current?.value!);
  };
  
  const handleClickJoinButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(roomID);

    if (roomID.includes("/call/")) {
      const newId = roomID.split("/").pop() as string;
      console.log(newId);
      navigateTo(`/call/${newId}`);
    } else {
      console.log(roomID);
      navigateTo(`/call/${roomID}`);
    }
  };

  useEffect(() => {
    generateLink();
  }, [generateLink]);

  return (
    <main className={styles.main__wrapper}>
      {
        id ? (
          <RoomPage id={id} />
        ) : (
          <>
            <div className={styles.createcall__wrapper}>
              <span>
              Can't find a link ?? <span>Create a new one here</span>
              </span>
              <span>
                <input
                  type="text"
                  disabled
                  placeholder="Link will appear here"
                  value={link}
                  ref={linkInputRef}
                />
                <button onClick={handleClickCopyButton}>Copy !</button>
              </span>
            </div>
            <div className={styles.joincall__wrapper}>
            <span>
              <span>Already have a id ???</span> Join the desired room
            </span>
            <span>
              <input
                type="text"
                placeholder="Enter the code or the link"
                onChange={(e) => {
                  setRoomID(e.target.value);
                }}
                onPaste={(e) => {
                  setRoomID(e.clipboardData.getData("text"));
                  console.log(e.clipboardData.getData("text"));
                }}
                value={roomID}
              />
              <button onClick={handleClickJoinButton}>Join</button>
            </span>
            </div>
          </>
        )
      }
    </main>
  );
};

export default Call;
