import { useState, useEffect } from "react";
import MessageCard from "../MessageCard";
import { GET , DELETE} from "../../utils/api";
import "./index.css";

const MessageCardList = ({
  isRenderedList,
  setRenderedList,
}) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    GET("messages").then((data) => setMessageList(data));
  }, [isRenderedList]);

  return (
    <div className="MessageCardList">
      {messageList.length ? (
        messageList.map((message) => (
          <MessageCard
          textContent={message}
            isRenderedList={isRenderedList}
            deleteBtn={() =>
                DELETE('messages', message.id).then(() => setRenderedList(!isRenderedList))
              }
            key={message.id}
          
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MessageCardList;
