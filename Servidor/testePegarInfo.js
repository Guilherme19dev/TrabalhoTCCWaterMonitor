const express = require("express");
const banco = require("./tbanco")
const jwt = require("jsonwebtoken")
const router = express.Router();

router.use(express.json())

router.get("/Pegar-info", async(req,res)=>{
try{
      const auth = req.headers.authorization;

    if (!auth || !auth.startsWith("Bearer ")) {
      return res.status(401).json({
        resposta: "Token não enviado"
      });
    }

    const token = auth.split(" ")[1];

    const usuarioToken = jwt.verify(
      token,
      "ChaveComMolho"
    );
     const [usuario]= await banco.promise().query(
            "SELECT cli_email,cli_nome,cli_ProdId FROM clientes WHERE cli_email = ?",
            [usuarioToken.email]
        )
        if (usuario.length<1){
           return res.status(404).json({
            resposta:"Não existe email correspondente"
           })
        }
        console.log(usuario)
        return res.status(200).json({
            resposta:usuario[0]
        })
    }catch(erro){
    console.error("Erro ao consultar o banco:", erro);

    return res.status(500).json({
      resposta: "Erro interno ao buscar os dados do usuário",
    });
    }
})

module.exports = router;