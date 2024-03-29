const Picture = require("../models/Picture");

const fs = require("fs");

exports.create = async (req, res) => {

    try{
        const {name} = req.body;
        const file = req.file;
        const picture = new Picture({
            name,
            src: file.path,
        });

        await picture.save();
        res.json({picture, msg: "imagem salva com sucesso!"})
        
    }catch (error){
        res.status(500).json({message: "Erro ao salvar imagem."});
    }

}

exports.findAll = async(req, res) =>{
    try{
        const pictures = await Picture.find();

        res.json(pictures)
    }catch (error){
        res.status(500).json({
            message: "erro ao buscar imagens. "
        });
    }

}

exports.remove = async (req, res) =>{
    try{
        const picture = await Picture.findByIdAndDelete(req.params.id);

        if(!picture){
            return res.status(404).json({message: "imagem não encontrada"});
        }

        fs.unlinkSync(picture.src);


        res.json({message: "Imagem removida com sucesso!"});
    }catch (error){
        res.status(500).json({message: "error ao excluir imagem."});
    }
}