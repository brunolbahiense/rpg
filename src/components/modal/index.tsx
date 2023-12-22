import * as C from "./styles";
import { useState } from "react";


const ErrorPopup = () => {
  const [closedModal, setClosedModal] = useState(true);
  
  const handleCloseModal = () => {
    setClosedModal(false)
  };

  return (
    <>
      {closedModal && (
        <C.Container>
          <div className="error-modal">
            <div className="closeBtn">
              <GrFormClose onClick={handleCloseModal} />
            </div>
            <BiBlock className="icon-block" />
            <h1>
              Desculpe, tivemos um problema técnico em nossos sistemas. Por favor,
              recarregue a página, tente novamente mais tarde, ou entre em contato conosco para mais
              informações.
            </h1>
            <a
              href={`https://api.whatsapp.com/send?phone=551150434137&text=Olá`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Nosso WhatsApp
            </a>
          </div>
        </C.Container>
      )}
    </>
  );
};

export default ErrorPopup;
