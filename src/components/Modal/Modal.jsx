import "./index.css";
import Button from "../Button";

const Modal = ({
  setIsModalVisible  
  , deleteBtn}) => {
 
  return (
   
      <div className="Modal__overlay" >
	
        <div className="Modal"> 
          <p className="Modal__question">
            "Sei sicuro di voler eliminare il messaggio?"
          </p>
          <div className="modal_Btn">
		  
                    <Button onClick={() => {
                        deleteBtn();
                    }} color='lightseagreen' textContent='Si'/>

					<Button onClick={() => setIsModalVisible(false)} color='red' textContent='No' />
          </div>
        </div>
      </div>
    )
  
};

export default Modal;
