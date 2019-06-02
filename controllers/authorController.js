const authorModel = require('../models/Authors');

const prueba = (req,res) => {
    res.send("Hola mundo");
}

const listAuthors = async (req,res) => {

    const authors = await authorModel.find({is_active:true}); //encuentra todos los autores

    //200 = ok
    return res.status(200).json(authors);

}

const createAuthor = async (req, res) => {
    
    const author = await authorModel.create(req.body).catch(e => res.status(400).json(e)); //indica que el cliente la cagó

    //201 = created
    res.status(201).json(author);

}

const getSingleAuthor = async (req, res) => {

    const {id} = req.params; //esto es igual que esto req.params.id

    const author = await authorModel.findOne({_id:id,is_active:true}).catch(e => res.status(400).json(e)); //busca el author si no está se borró o la cagó el cliente
    if (!author) res.status(404).json({message:"Author not found"}); //validamos si el id(author) existe 
    res.status(200).json(author);
}

const updateAuthor = async (req, res) => {
    
    const {id} = req.params; //esto es igual que esto req.params.id
    //spread object es copiar el contenido de un objeto en otro objeto
    const author = await authorModel.findOneAndUpdate({_id:id,is_active:true},{...req.body},
        {new:true}).catch(e => res.status(400).json(e));
    if (!author) res.status(404).json({message:"Author not found"}); //validamos si el id(author) existe r
    res.status(200).json(author) //aqui mandamos status y un body en el json
}

const deleteAuthor = async(req, res) => {

    const {id} = req.params; //esto es igual que esto req.params.id
    //spread objetc
    const deletedAuthor = await authorModel.findOneAndUpdate({_id:id,is_active:true},
        {is_active:false}).catch(e => res.status(400).json(e));
    if (!deletedAuthor) res.status(404).json({message:"Author not found"}); //validamos si el id(author) existe 
    res.sendStatus(204); //aqui solo mandamos un status
}

const reactiveAuthor = async (req, res) => {

    const {username} = req.body; // el usuario lo recibimos del body
    const activeUser = await authorModel.findOneAndUpdate({username,is_active:false},
                                    {is_active:true},{new:true}); //devuelve el usuario activado
    if (!activeUser) res.status(404).json({message:"Author not found"}); //validamos si el id(author) existe 
    res.status(200).json(activeUser); //aqui solo mandamos un status

}

module.exports = {
    prueba,
    listAuthors,
    createAuthor,
    getSingleAuthor,
    updateAuthor,
    deleteAuthor,
    reactiveAuthor
}