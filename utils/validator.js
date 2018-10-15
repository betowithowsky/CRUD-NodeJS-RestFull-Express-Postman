module.exports= {

    user:(app, req, res) => {

        req.assert('nome', 'O Nome é Obrigatorio.').notEmpty();
        req.assert('email', 'O email está invalido.').notEmpty().isEmail();

        let errors = req.validationErrors();

        if(errors) {

            app.utils.error.send(errors, req, res);
            return false;

        }else{

            return true;
            
        }

    }
};