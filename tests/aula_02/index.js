export const divisao = (a, b) => {
  if (b === 0) {
    throw new Error("não pode divisão por zero");
  }

  return a / b;
};

export const cursos = ["eletronica", "t.i", "soldagem", "moda", "mecanica"];

export const influencer = {
  nome: "Doutora deolane",
  idade: "36",
  endereco: {
    cidade: "Hellcife",
    estado: "pernambuco",
  },
  enderecoProvisoria: "Colonia Penal Feminina Bom pastor",
  seguidores: 20000000,
  triguinho: true,
};

export const maxAluno = 30;
