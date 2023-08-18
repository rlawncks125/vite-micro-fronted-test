import Swal, { SweetAlertOptions } from "sweetalert2";
import { InjectionKey } from "vue";

type Alert = (text: string) => void;

export const key = Symbol() as InjectionKey<Alert>;

export default {
  install: (app) => {
    const alert: Alert = (text: string) => {
      Swal.fire({
        title: "success!",
        text,
        icon: "success",
        confirmButtonText: "Cool",
      });
    };

    app.provide(key, alert);
  },
};
