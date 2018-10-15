module.exports = app => {

    app.get('/', (req, res) => {

        //console.log('URL:' , req.url);
        //console.log('METHOD:', res.method);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá</h1>');

    });

};