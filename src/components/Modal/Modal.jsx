import { ConteinerModal, Default } from "./style/modal";

export default function Modal({ show, onClose, event }) {
    return (
        <Default show={show} onClick={onClose}>
            {show && (
                <ConteinerModal>
                    {/* Conteúdo do modal */}
                    <img src={event.image} alt="" />
                    <h3>{event.nome}</h3>
                    {/* Restante do conteúdo do modal */}
                </ConteinerModal>
            )}
        </Default>
    );
}