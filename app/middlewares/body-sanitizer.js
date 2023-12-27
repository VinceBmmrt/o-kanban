const sanitizer = require('sanitizer');

const bodySanitizer = (request, response, next) => {
    if (request.body) {
        // la boucle for... in permet d'accéder aux clés d'un objet
        for (let propName in request.body) {
            // console.log('Avant', request.body[propName]);
            request.body[propName] = sanitizer.escape(request.body[propName]);
            // console.log('Apres', request.body[propName]);
        }
    }
    // on pourrait faire la même chose avec request.query et request.params
    next();
}

module.exports = bodySanitizer;