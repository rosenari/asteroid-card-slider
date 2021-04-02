import "./scss/cardslider.scss";
import { OptionFactory } from "./utils";
import _ from 'lodash';

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
            this.container = null;
            this.points = [];

            //validate options
            OptionFactory.validate(options);

            //Init Options
            this.options = {
                width: options.width || "360px",
                height: options.height || "150px",
                isAuto: options.isAuto || false,
                isPoint: options.isPoint || true,
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
        /** createCard */
        let container = document.createElement('div');
        container.style.width = this.options.width;
        container.style.height = this.options.height;
        container.classList.add('slider-wrapper');

        for (let image of this.options.images) {
            let card = this.#createCard(image);
            container.appendChild(card);
        }
        this.container = container;
        this.elem.appendChild(container);

        /** createPoint */
        if (this.options.isPoint) {
            this.resizeHandler();
            window.addEventListener('resize',
                _.debounce(this.resizeHandler, 400));
        };
    }

    /**
    * method createCard in Cardslider class
    * private
    * @returns { Element } return HTMLDivElement
    */
    #createCard(imgSrc) {
        let card = document.createElement('div');
        card.classList.add("slider-wrapper__card");
        card.innerHTML = `<img src="${imgSrc}" style="height:100%" />`;

        return card;
    }

    /**
    method createPoint in Cardslider class
    private
    @returns { Element } return PointElement
    */
    #createPoint() {

        let pointbox = document.createElement('div');
        pointbox.classList.add('point-box');
        pointbox.style.width = this.options.width;
        pointbox.style.height = "20px";

        for (let i = 0; i < this.points.length; i++) {
            let point = document.createElement('div');
            point.classList.add('point-box__point');

            if (this.points[i].active) point.classList.add('active');

            pointbox.appendChild(point);
        }

        this.elem.appendChild(pointbox);
    }

    /**
     function resizeHandler in Cardslider class
     public
     */
    resizeHandler = () => {
        //Calc pointNum
        let pointNum = Math.ceil(this.container.scrollWidth / this.container.clientWidth);

        let temp = new Array(pointNum);

        for (let i = 0; i < temp.length; i++) {
            temp[i] = {
                x: this.container.clientWidth * i,
                active: false,
            };
        }

        if (temp.length > 0) temp[0].active = true;

        if (!this.points || JSON.stringify(temp) != JSON.stringify(this.points)) {
            this.points = temp;
            this.#createPoint();
        }
    }

}

window.asteroid = {};
window.asteroid.Cardslider = Cardslider;

export default Cardslider;