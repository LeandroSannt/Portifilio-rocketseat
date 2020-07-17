const express = require("express")
const nunjucks = require("nunjucks")
const mod = require("./data")
const server = express()

server.use(express.static("public"))

server.set ("view engine" , "njk")

nunjucks.configure("views",{
    express:server,
    autoescape :false,
    noCache:true
})

server.get("/",function(req, res){
    const about = 
        {
            avatar_url:"imagens/0.png",
            name:"Rocketseat",
            description: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo no meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa as mesmas tecnologias utilizadas por empresas como: Nubank, Netflix, Uber, Instagram e Airbnb Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores.',
            tecnologias: [    
                {name1:"REACT NATIVE"},
                {name2:"HTM"},
                {name3:"CSS"},
                {name4:"JAVASCRIP"},
                { name5:"REACT "},
                { name6:"NODE"} 
            ],
            links: [
            {name:"Github", url: "https://github.com/Rocketseat", icon:"imagens/octocat.png"},
            {name:"Instagram", url:'https://www.instagram.com/rocketseat_oficial/', icon:"imagens/instagram.png"},
            {name:"Linkedin", url: 'https://www.linkedin.com/school/rocketseat/' , icon:"imagens/linkedin.svg"}       
            ]
        }
    return res.render("about", {about})
})

server.get("/courses",function(req, res){
    const contas =[
    {name:"Github", url: "https://github.com/Rocketseat", icon:"imagens/octocat.png"},
    {name:"Instagram", url:'https://www.instagram.com/rocketseat_oficial/', icon:"imagens/instagram.png"},
    {name:"Linkedin", url: 'https://www.linkedin.com/school/rocketseat/' , icon:"imagens/linkedin.svg"}
    ]
    return res.render("courses",{items: mod,
    contas})
})

server.get("/course/:id", function(req, res){
    const id = req.params.id;

    const course =mod.find(function(course){
            return course.id == id
    })
            return res.render ("course",{item:course})
            
})

server.get("/not-found",function(req, res){
    return res.render("not-found")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log("server is running")

})