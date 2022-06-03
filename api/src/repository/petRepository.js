import { con } from './connection.js';

export async function inserirPet (pet) {
    const comando = `INSERT TO tb_pets (id_usuario,nm_pet,ds_animal,ds_raca,ds_idade,ds_genero,ds_endereco,ds_telefone)
                    VALUES (?,?,?,?,?,?,?,?)`

    const [respostas] = await con.query (comando, [pet.usuario,pet.nome,pet.raca,pet.idade,pet.genero,pet.endereco])
    pet.id = respostas.insertId;

    return pet;
}


export async function listarTodosPets () {
    const comando = `SELECT id_pet      id,
                    nm_pet            nome,
                    ds_endereco   endereco,
                    ds_raca           raca,
                    ds_idade         idade,
                    ds_genero       genero,
                    ds_telefone   telefone,
                    id_usuario     usuario 
                    FROM tb-pet
                    WHERE id_id =       ?`

    const [linhas] = await con.query (comando, [id]);
    return linhas [0];
}

export async function buscarPorRaca (raca) {
    const comando = `SELECT id_pet       id,
                    nm_pet             nome,
                    ds_endereco   endereco,
                    ds_raca           raca,
                    ds_idade         idade,
                    ds_genero        genero
                    FROM tb_pets
                    WHERE ds_raca   like ?`;

    const [linhas] = await con.query (comando, [`%${nome}%`]);
    return linhas;
}

export async function removerPet (id) {
    const comando = `DELETE FROM tb_pets
                      WHERE id_pet = ?`;

    const [resposta] = await con.query (comando,[id]);
    return resposta.affectedRows;
}

export async function alterarPet (id,pet) {
    const comando = `UPDATE tb_pets
                    SET nm_pet  	= ?,
                        ds_animal 	= ?,
                        ds_endereco = ?,
                        ds_raca 	= ?,
                        ds_idade    = ?,
                        ds_genero 	= ?,
                        ds_telefone = ?,
                    WHERE id_pet    = ?`

    const [resposta] = await con.query(comando, [pet.usuario,pet.nome,pet.animal,pet.raca,pet.idade,pet.genero,pet.endereco,id]);
    return resposta.affectedRows;
}