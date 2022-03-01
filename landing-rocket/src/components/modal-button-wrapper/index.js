import React, { useState } from "react";
import Button from "../button";
import Modal from "../modal";
import Title from "../title";
import Text from "../text";
import TextInput from "../text-input";

const ModalButtonWrapper = (props) => {
  const {
    buttonText,
    modalTitle,
    modalTextFontSize,
    modalTitleFontSize,
    modalText,
    modalTextColor,
    modalTextLetterSpacing,
    modalTitleColorText,
    modalTitleLetterSpacing,
    buttonModalText,
    inputPlaceholder,
  } = props;

  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [feedback, setFeedback] = useState("");

  const onButtonClick = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setFeedback("");
    setHasError(false);
    setInputValue("");
  };

  const onModalButtonClick = () => {
    const emailValidacion = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputValue) {
      setHasError(true);
      setFeedback("Debe ingresar email");
    } else if (inputValue && emailValidacion.test(inputValue)) {
      setHasError(false);
      setFeedback("Gracias por unirte!");
    } else {
      setHasError(true);
      setFeedback("Email no valido");
    }
  };

  return (
    <div className="modal-button-wrapper">
      <Button buttonText={buttonText} onClick={onButtonClick} />
      <Modal visible={visible} onClose={onClose}>
        <Title
          title={modalTitle}
          fontSize={modalTitleFontSize}
          color={modalTitleColorText}
          letterSpacing={modalTitleLetterSpacing}
        />
        <Text
          text={modalText}
          fontSize={modalTextFontSize}
          color={modalTextColor}
          letterSpacing={modalTextLetterSpacing}
        />
        <TextInput
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={setInputValue}
          hasError={hasError}
          feedback={feedback}
        />
        <Button buttonText={buttonModalText} onClick={onModalButtonClick} />
      </Modal>
    </div>
  );
};

export default ModalButtonWrapper;
