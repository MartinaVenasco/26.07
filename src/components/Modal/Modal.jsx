import "./index.css";
import Button from "../Button";

const Modal = ({
modalVisibility, deleteBtn}) => {
 
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

					<Button onClick = {() => modalVisibility(false)} color='lightseagreen' textContent='Si' />
          </div>
        </div>
      </div>
    )
  
};

export default Modal;
