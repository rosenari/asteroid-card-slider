import { OptionFactory } from "./utils";

class Cardslider {
    /**
    * Initialize 
    * @param { Element } elem
    * @param { Object } options
    */
    constructor(elem, options) {

        try {
            //Init Dom Element;
            this.elem = document.getElementById(elem);

            //validate options
            OptionFactory.validate(options);

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

    /**
    * method createCard in Cardslider class
    * private
    * @returns { Element } return CardElement
    */
    #createCard(imgSrc, url) {
        let card = document.createElement(`
            <div onClick="() => { location.href=${url} }">
                <img src="${imgSrc}" style="height:100%" />
            </div>
        `);

        return card;
    }

}


window.Cardslider = Cardslider;