/*
    Factory Pattern is remove to dependency and conditional statement
*/
export class OptionFactory {
    static validate(options) {
        for (let name in options) {
            let obj = eval('new ' + name + 'Factory()');

            if (obj.validate) obj.validate(options[name]);
            else throw new Error(name + " is not option..");
        }
    }
}

/*
    width
    type : string
*/
export class widthFactory {
    validate(value) {
        if (typeof value !== 'string') throw Error('width type must have to string');
    }
}

/*
    height
    type : string
*/
export class heightFactory {
    validate(value) {
        if (typeof value !== 'string') throw Error('height type must have to string');
    }
}

/*
    isAuto
    type : boolean
*/
export class isAutoFactory {
    validate(value) {
        if (typeof value !== 'boolean') throw Error('isAuto type must have to boolean');
    }
}

/*
    isPoint
    type : boolean
*/
export class isPointFactory {
    validate(value) {
        if (typeof value !== 'boolean') throw Error('isPoint type must have to boolean');
    }
}

/*
    images
    type : Array
*/
export class imagesFactory {
    validate(value) {
        if (Array.isArray(value)) throw Error('images type must have to array');
    }
}