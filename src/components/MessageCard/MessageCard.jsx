import Modal from '../Modal';
import './index.css';

import { useState } from 'react';

const MessageCard = ({textContent,  deleteBtn}) => {
 const [isModalVisible, setIsModalVisible] = useState(false);
  
 

  return (
    <div className="MessageCard" >
      <button onClick={() => setIsModalVisible(true)} className="MessageCard__delete">X</button>
      <p className="MessageCard__text">
        { textContent.text }
      </p>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">
          { textContent.sender }
        </p>
        <p className="MessageCard__info--date">
          { textContent.date }
        </p>
      </div>
      {
        isModalVisible && <Modal  deleteBtn={deleteBtn}
          setIsModalVisible={setIsModalVisible} />
      }   
    </div>
  )
}

export default MessageCard;