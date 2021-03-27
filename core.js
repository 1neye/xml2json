const fs = require('fs')
const xml2js = require('xml2js')
const util = require('util')
const parser = new xml2js.Parser()
const http = require('http')


function onRequest(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain;'});
    fs.readFile('regions.xml', null, function (error, data) {
        parser.parseString(data, (err, result) => {
            if (error) {
                response.writeHead(404);
                response.write('Bla bla');
            } else {
                response.write(util.inspect(result, false, null, true))

            }
            response.end();
        })
    })
}
http.createServer(onRequest).listen(8000)

