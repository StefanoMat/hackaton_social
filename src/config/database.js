module.exports = {
  database: 'CEP',
  host: 'localhost',
  username: 'sa',
  password: 'gvdasa',
  dialect: 'mysql',
  operatorAliases: false, //ajusta de comportamento
  define: {
    timestamps: true, //adiciona 2 colunas em todas as tabelas created add, e update add  (gerenciando a criação e ultima data de manipulação de dados)
    underscored: true, //para o uso de letras minusculas e _ para colunas
    undescoredAll: true //para o uso de letras minusculas e _ para tabelas
  }
}
