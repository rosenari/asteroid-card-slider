import { OptionFactory } from "./utils";

class Cardslider {
    constructor(elem, options) {

        try {
            //Init Dom Element;
            this.elem = document.getElementById(elem);

            //Init Options
            this.options = {
                width: options.width || "360px",
                height: options.height || "150px",
                isAuto: options.isAuto || false,
                isPoint: options.isPoint || false,
                images: options.images || []
            }

            this.render();
        } catch (err) {
            throw err;
        }

    }

}


window.Cardslider = Cardslider;