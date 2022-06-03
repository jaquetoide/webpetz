USE petDB;

INSERT INTO tb_usuario (nm_usuario,ds_email,ds_senha) 
	VALUES ('admin','admin@admin.com.br', '1234');
    
-- CSUO1: efetuar login

select id_usuario id,
     nm_usuario nome,
     ds_email  email
	FROM tb_usuario
    WHERE ds_email = 'admin@admin.com.br'
    AND ds_senha  = '1234';

-- CSUO2:: cadastrar novo pet 

INSERT INTO tb_pets (id_usuario,id_pet,nm_pet,ds_animal,ds_endereco,ds_raca,ds_idade,ds_genero,ds_telefone)
	VALUES (1,1,'Fofinha','Gato','Sao-Paulo','Ragdoll',7,'femea',8815-6274);
    
-- CSUO3:: alterar pet

UPDATE tb_pets
 SET nm_pet  	= 'Xubi',
     ds_animal 	= 'Gato',
     ds_endereco = 'Sao-Paulo',
     ds_raca 	= 'Tricolor',
     ds_idade = 5,
     ds_genero 	= 'femea',
     ds_telefone = 5783-5892
WHERE id_pet = 1;



-- CSUO4:: remover pet
DELETE FROM tb_pets
 WHERE id_pet = 1;
 
 
-- CSUO5:: consultar todos os pets

SELECT id_pet        id,
       nm_pet      nome,
      ds_endereco   endereco,
      ds_raca   raca,
      ds_idade   idade,
      ds_genero genero,
      ds_telefone telefone 
FROM tb_pets;

-- CSUO6:: consultar pets por raça 

SELECT id_pet       id,
	   nm_pet       nome,
      ds_endereco   endereco,
      ds_raca   raca,
      ds_idade   idade,
      ds_genero genero
FROM tb_pets
WHERE ds_raca     like '%a%';

-- CSUO7:: consultar pets por id

SELECT id_pet       id,
	   nm_pet      nome,
      ds_endereco   endereco,
      ds_raca   raca,
      ds_idade   idade,
      ds_genero genero,
      ds_telefone telefone 
FROM tb_pets
WHERE id_pet     = 1;
    
    
    
    