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
            this.container.addEventListener('scroll',
                _.throttle(this.scrollHandler, 150));
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
        if (!this.pointbox) {
            this.pointbox = document.createElement('div');
            this.pointbox.classList.add('point-box');
            this.pointbox.style.width = this.options.width;
            this.pointbox.style.height = "20px";
            this.elem.appendChild(this.pointbox);
        }
        this.pointbox.innerHTML = '';

        for (let i = 0; i < this.points.length; i++) {
            let point = document.createElement('div');
            point.classList.add('point-box__point');
            point.onclick = this.scrollTo.bind(null, this.points[i].x);

            if (this.points[i].active) point.classList.add('active');

            this.pointbox.appendChild(point);
        }
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

    /**
     function scrollHandler in Cardslider class
     public
     */
    scrollHandler = () => {
        let scrollLeft = this.container.scrollLeft;
        let activeIndex = Math.ceil(1 + (scrollLeft / this.container.clientWidth)) - 1;
        if (this.points && this.points[activeIndex] && !this.points[activeIndex].active) {
            for (let i = 0; i < this.points.length; i++) {
                this.points[i].active = false;
            }
            this.points[activeIndex].active = true;
            this.#createPoint();
        }
    }

    scrollTo = (x) => {
        this.container.scrollLeft = x;
    }

}

window.asteroid = {};
window.asteroid.Cardslider = Cardslider;

export default Cardslider;