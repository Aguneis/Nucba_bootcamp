import "./index.css";
import Title from "../title";
import Text from "../text";
import ModalButtonWrapper from "../modal-button-wrapper";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <div className="content-container--title">
        <Title
          title="PROXIMA MENTE"
          color="black"
          fontSize="6.5rem"
          letterSpacing="0.9rem"
        />
        <Text
          text="¡Vamos a celebrar el lanzamiento de nuestro nuevo sitio!"
          color="black"
          fontSize="1.5rem"
          letterSpacing="2px"
        />
      </div>
      <ModalButtonWrapper
        buttonText="Notificarme"
        modalTitle="REGÍSTRATE"
        modalTitleFontSize="2.5rem"
        modalTitleLetterSpacing="3px"
        modalText="Y mira antes que nadie las novedades"
        buttonModalText="Unirse"
        inputPlaceholder="Ingresá tu email aquí"
      />
    </div>
  );
};

export default ContentContainer;
