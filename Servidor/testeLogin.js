const express = require("express");
const bcrypt = require("bcrypt")
const banco = require("./tbanco")
const jwt = require("jsonwebtoken")
const router = express.Router();

router.use(express.json());

router.post("/", async(req, res) => {

    try{
        
        const{email,senha,nome,numeroAp,criarConta} = req.body
        if(criarConta != ""){

        if(!email || !senha || !nome || !numeroAp){
            return res.status(400).json({
                erro:"Todos os valores devem ser prenchidos"
            })
        }  
        const [usuarios] = await banco.promise().query(
            "SELECT cli_id FROM clientes WHERE cli_email = ?",
            [email]
        )
    
        if(usuarios.length > 0){
            return res.status(409).json({
                erro:"O email deste usuario ja foi cadastrado"
            })
        }
        const senhaHash  = await bcrypt.hash(senha,10)

           const[info]=await banco.promise().query(
            "INSERT INTO clientes(cli_email,cli_senha,cli_nome,cli_ProdId) VALUE(?,?,?,?)",
            [email,senhaHash,nome,numeroAp]
        )
        const [usuario]= await banco.promise().query(
            "SELECT * FROM clientes WHERE cli_email = ?",
            [email]
        )
        const userLogin = usuario[0]

         const token = jwt.sign(
                {
                    id:info.insertId,
                    email:userLogin.cli_email
                },
                "ChaveComMolho",
                {
                    expiresIn:"1m"
                }
            )

              

         return res.json({
            mensagem:"Usuario criado com sucesso",
            token:token
        })
    }else{
         if(!email || !senha){
            return res.status(400).json({
                erro:"Todos os valores devem ser prenchidos"
            })
        }


          const [numeroId] = await banco.promise().query(
                "SELECT cli_id FROM clientes"
            )

    if(numeroId.length > 0){
        const [usuarios] = await banco.promise().query(
            "SELECT cli_id FROM clientes WHERE cli_email = ?",
            [email]
        )
    
        if(usuarios.length === 0){
            return res.status(409).json({
                erro:"O email deste usuario não foi cadastrado"
            })
        }
    }
       
        

       const [hasUser] =  await banco.promise().query(
            "SELECT * FROM clientes WHERE cli_email = ?",
            [email]
        )
if(hasUser.length>0){
        
    const userCadastro = hasUser[0]

        const senhaCorreta = await bcrypt.compare(
    senha,
    userCadastro.cli_senha
);
if(senhaCorreta){
      
            const token = jwt.sign(
                {
                    id:userCadastro.cli_id,
                    email:userCadastro.cli_email
                },
                "ChaveComMolho",
                {
                    expiresIn:"1m"
                }
            )

        

        return res.json({
            mensagem:"Conta localizada com sucesso",
            token:token
        })
    }
    }
    }

    }catch(erro){
     console.error("Erro ao cadastrar usuario:",erro)

     res.status(500).json({
        erro:"Erro interno do servidor"
     })

    }

});
router.get("/verificar-sessao", (req, res) => {

    const auth = req.headers.authorization;

    if (!auth) {
        return res.status(401).json({
            erro: "Token não enviado"
        });
    }

    const partes = auth.split(" ");

    const token = partes[1];

    try {

        const usuario = jwt.verify(
            token,
            "ChaveComMolho"
        );

        return res.json({
            autenticado: true,
            usuario: usuario
        });

    } catch (erro) {

        return res.status(401).json({
            erro: "Token inválido ou expirado"
        });
    }
});
module.exports = router;


