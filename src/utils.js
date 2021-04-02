/*
    Factory Pattern is remove to dependency and conditional statement
*/
export class OptionFactory {

    /**
    * method 
    * static validate
    * @param options
    */
    static validate(options) {
        for (let name in options) {
            let obj = eval('new ' + name + 'Factory()');

            if (obj.validate) obj.validate(options[name]);
            else throw new Error(name + " is not option..");
        }
    }
}

export class widthFactory {
    /**
    * method 
    * validate
    * @param value string
    */
    validate(value) {
        if (typeof value !== 'string') throw Error('width type must have to string');
    }
}

export class heightFactory {
    /**
    * method 
    * validate
    * @param value string
    */
    validate(value) {
        if (typeof value !== 'string') throw Error('height type must have to string');
    }
}

export class isPointFactory {
    /**
    * method 
    * validate
    * @param value boolean
    */
    validate(value) {
        if (typeof value !== 'boolean') throw Error('isPoint type must have to boolean');
    }
}

export class imagesFactory {
    /**
    * method 
    * validate
    * @param value Array
    */
    validate(value) {
        if (!Array.isArray(value)) throw Error('images type must have to array');
    }
}