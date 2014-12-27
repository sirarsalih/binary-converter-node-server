var request = require('request');

describe("Integer to binary conversion.",function(){

    var input = "543";
    var output = "1000011111";

    it("Should respond " + output + " when " + input + " is provided.", function(done) {
        request("http://localhost:1337/toBinary?val=" + input, function(error, response, body){
            expect(body).toEqual(output);
            done();
        });
    });

});

describe("Float to binary conversion.",function(){

    var input = "43.765";
    var output = "1000010001011110000111101011100";

    it("Should respond " + output + " when " + input + " is provided.", function(done) {
        request("http://localhost:1337/toBinary?val=" + input, function(error, response, body){
            expect(body).toEqual(output);
            done();
        });
    });

});

describe("Hex to binary conversion.",function(){

    var input = "A4FBCD4E";
    var output = "10100100111110111100110101001110";

    it("Should respond " + output + " when " + input + " is provided.", function(done) {
        request("http://localhost:1337/toBinary?val=" + input, function(error, response, body){
            expect(body).toEqual(output);
            done();
        });
    });

});