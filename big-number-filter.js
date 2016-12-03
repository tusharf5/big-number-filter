(function() {

    var POWER_MAP_EN = [{
        key: 'Q',
        value: Math.pow(10, 15)
    }, {
        key: 'T',
        value: Math.pow(10, 12)
    }, {
        key: 'B',
        value: Math.pow(10, 9)
    }, {
        key: 'M',
        value: Math.pow(10, 6)
    }, {
        key: 'K',
        value: 1000
    }];
    var POWER_MAP_JP = [{
        key: 'kei',
        value: Math.pow(10, 16)
    }, {
        key: 'cho',
        value: Math.pow(10, 12)
    }, {
        key: 'oku',
        value: Math.pow(10, 8)
    }, {
        key: 'man',
        value: Math.pow(10, 4)
    }, {
        key: 'sen',
        value: 1000
    }];

    function bigNumberFilter(number, options) {

        // If the passed number is falsy return undefined
        if (typeof number === 'undefined' || number === null || isNaN(number)) {
            return undefined;
        }

        // If the passed options is empty
        if (typeof options !== 'object' || options === null || options === undefined || isEmpty(options)) {

            // and if the passed number is falsy too return undefined
            if (typeof number === 'undefined' || number === null || isNaN(number)) {
                return undefined;
            } else {
                options = {};
            }

        }

        // The positive number passed to us
        var abs = Math.abs(number);
        // Checking if the number is negative
        var isNegative = number < 0;
        // Number of digits after decimal
        var offset = options['offset'] ? options['offset'] : 1;

        // rounder is the number we multiply our answer with to get proper offset
        var rounder = Math.pow(10, offset);
        var key = '';

        // assigning language maps
        if (options.lang && options.lang == 'en') {
            var POWER_MAP = POWER_MAP_EN;
        }

        if (options.lang && options.lang == 'jp') {
            var POWER_MAP = POWER_MAP_JP;
        }

        // checking from highest number and stopping when num/highest >= 1
        for (var i = 0; i < POWER_MAP.length; i++) {
            var reduced = abs / POWER_MAP[i].value;
            // getting the desired value with desired offset
            // you can use toFixed Method too
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                key = POWER_MAP[i].key;
                break;
            }
        }

        return (isNegative ? '-' : '') + abs + key;
    }

    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    return bigNumberFilter;

})();
