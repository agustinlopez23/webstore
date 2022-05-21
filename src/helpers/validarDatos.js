import Swal from "sweetalert2";

export const validarDatos = (values) => {
  if (values.nombre.length < 4) {
    Swal.fire({ icon: "error", title: "Nombre Invalido" });
    return false;
  }
  if (values.email !== values.emailConfirm) {
    Swal.fire({ icon: "error", title: "Los emails ingresados no coinciden" });
    return false;
  }
  if (values.telefono.length < 9) {
    Swal.fire({
      icon: "error",
      title: "El Telefono ingresado no es correcto",
    });
    return false;
  }
  return true;
};
