CREATE DATABASE petDB;
USE petDB;

CREATE TABLE tb_usuario (

	id_usuario  int primary key auto_increment,
	nm_usuario  varchar(200),
    ds_email   varchar(200),
    ds_senha    varchar(50)
);

CREATE TABLE tb_pets (

    id_pet        int primary key auto_increment,
    id_usuario    int,
    nm_pet        varchar(200),
    ds_animal     varchar(4000),
    ds_endereco   varchar(200),
    ds_raca       varchar(200),
    ds_idade      int,
    ds_genero     varchar(200),
    ds_telefone   varchar(200),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario)
    );