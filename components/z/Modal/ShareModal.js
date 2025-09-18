"use client";
import React from "react";
export function ShareModal({ open, children, className, close }) {
  const dialogRef = React.useRef(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      dialog.classList.add("modal-show");
      dialog.classList.remove("modal-hide");
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) {
        dialog.classList.add("modal-hide");
        dialog.classList.remove("modal-show");
        setTimeout(() => dialog.close(), 200); // match animation time
      }
      document.body.style.overflow = "";
    }
  }, [open]);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = "";
      close?.();
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [close]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) close?.();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className={`relative xs:w-11/12 xs:max-w-10/12 w-full p-4 m-auto rounded-xl shadow-lg transition-all duration-200 ease-out ${className}`}
    >
      
      <div>{children}</div>

      <style jsx>{`
        dialog {
          opacity: 0;
          transform: translateY(20px) scale(0.96);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        dialog.modal-show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        dialog.modal-hide {
          opacity: 0;
          transform: translateY(20px) scale(0.96);
        }
        dialog::backdrop {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        dialog.modal-show::backdrop {
          opacity: 1;
        }
        dialog.modal-hide::backdrop {
          opacity: 0;
        }
      `}</style>
    </dialog>
  );
}
