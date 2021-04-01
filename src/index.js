import "./scss/cardslider.scss";
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
    method render in Cardslider class
    public
    */
    render() {
        let container = document.createElement('div');
        container.style.width = this.options.width;
        container.style.height = this.options.height;
        container.classList.add('container');

        for (let image of this.options.images) {
            let card = this.#createCard(image);
            container.appendChild(card);
        }
        this.elem.appendChild(container);
    }

    /**
    * method createCard in Cardslider class
    * private
    * @returns { Element } return HTMLDivElement
    */
    #createCard(imgSrc) {
        let card = document.createElement('div');
        card.classList.add("card");
        card.style.width = "33%";
        card.innerHTML = `<img src="${imgSrc}" style="height:100%" />`;

        return card;
    }

}


window.Cardslider = Cardslider;