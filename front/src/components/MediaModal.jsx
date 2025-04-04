// src/components/MediaModal.jsx
import React from "react";
// Si usas tu CSS global (index.css), no necesitas importar un archivo extra.
// Si decides separar, puedes importar el archivo de estilos aquí.
// import "./MediaModal.css";

/**
 * MediaModal: Muestra una imagen o video en un modal centrado.
 * @param {boolean} isOpen - Determina si se debe mostrar el modal.
 * @param {string} mediaSrc - URL del medio a mostrar.
 * @param {string} mediaType - Tipo de medio: "image" o "video".
 * @param {function} onClose - Función para cerrar el modal.
 */
const MediaModal = ({ isOpen, mediaSrc, mediaType, onClose }) => {
  // Si no está abierto, no renderizamos nada.
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Evita que el clic en el contenido cierre el modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        {mediaType === "image" ? (
          <img src={mediaSrc} alt="Vista completa" className="modal-media" />
        ) : (
          <video src={mediaSrc} controls className="modal-media" />
        )}
      </div>
    </div>
  );
};

export default MediaModal;
