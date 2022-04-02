Essa API foi construida no intuito de permitir que o cliente envie fotos categorizadas. Não permitindo que sejam enviadas 
fotos iguais, mesmo sendo em categorias diferentes. No mometno é permitido a inserção das seguintes categorias: "animal", "pessoa", 
"paisagem", "objeto". 
As imagens são inseridas utilizando a o tipo de conteúdo multipart/form. 

Foram utilizadas os seguintes frameworks no desenvolvimento dessa API: 

 -express
 -multer
 -dotenv
 -aws-sdw
 -jimp
 -mongoose
 -multer-s3
 -nodemon
 
No momento toda a APi está no localhost, sendo assim é preciso adicionar as credenciais do seu db e da AWS.  

A API permite que seja adicionado no formato multipart/form, uma imagem que será enviada para o repositório da amazon(S3), adicionando 
também a categoria a que essa imagem pertence. No momento apenas é permitido o envio de imagens, o consulta virá em umas das possíveis 
atualizações dessa API. 
