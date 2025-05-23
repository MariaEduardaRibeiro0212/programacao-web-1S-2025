const express = require (`express`);
const mustacheExpress = require(`mustache-express`);
const app = express();

app.engine(`html`, mustacheExpress());
app.set(`view engine`, `html`);
app.set(`views`, __dirname + `/views`);
app.use(express.urlencoded({extended: true}));

app.get(`/`, (req, res)=>{
    res.render(`index.html`);
});

app.post('/agendar_consulta', (req, res)=>{
    let dados_consulta = req.body;
    let erro_form = false;
    let campos_invalidos = []
    let dataProcessamento = new Date();
    let data_invalida = false;

    if(dados_consulta.nome.length == 0){
        erro_form = true;
        campos_invalidos.push("Nome");
    }

    if(dados_consulta.sobrenome.length == 0){
        erro_form = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        erro_form = true;
        campos_invalidos.push("CPF");
    }
    if(dados_consulta.data_nascimento.length == 0){
        erro_form = true;
        campos_invalidos.push("Data de Nascimento");
    }
    if(dados_consulta.telefone.length == 0){
        erro_form = true;
        campos_invalidos.push("Telefone");
    }

    if(dados_consulta.cep.length == 0){
        erro_form = true;
        campos_invalidos.push("CEP");
    }

    if(dados_consulta.endereco.length == 0){
        erro_form = true;
        campos_invalidos.push("Enderço");
    }

    if(!dados_consulta.clinica || dados_consulta.clinica === ""){
        erro_form = true;
        campos_invalidos.push("Clínica");
    }

    if(!dados_consulta.especialidade || dados_consulta.especialidade === ""){
        erro_form = true;
        campos_invalidos.push("Especialidade");
    }

    if(!dados_consulta.data_consulta || dados_consulta.data_consulta.length == 0){
        erro_form = true;
        campos_invalidos.push("Data da Consulta")

    } 
    if(dados_consulta.data_consulta && new Date(dados_consulta.data_consulta) < dataProcessamento){
        erro_form = true;
        data_invalida = true;
    }

    if(dados_consulta.hora_consulta.length == 0){
        erro_form = true;
        campos_invalidos.push("Hora da Consulta")
    }


    res.render('index.html', {erro_form, campos_invalidos, data_invalida});
});


const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App rodando na porta " + PORT);
});
