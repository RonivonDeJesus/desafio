Essa API foi construida no intuito de permitir que o cliente envie fotos categorizadas. N�o permitindo que sejam enviadas 
fotos iguais, mesmo sendo em categorias diferentes. No mometno � permitido a inser��o das seguintes categorias: "animal", "pessoa", 
"paisagem", "objeto". 
As imagens s�o inseridas utilizando a o tipo de conte�do multipart/form. 

Foram utilizadas os seguintes frameworks no desenvolvimento dessa API: 

 -express
 -multer
 -dotenv
 -aws-sdw
 -jimp
 -mongoose
 -multer-s3
 -nodemon

A API permite que seja adicionado no formato multipart/form, uma imagem que ser� enviada para o reposit�rio da amazon(S3), adicionando 
tamb�m a categoria a que essa imagem pertence. No momento apenas � permitido o envio de imagens, o consulta vir� em umas das poss�veis 
atualiza��es dessa API. 