import { divisao, cursos, influencer, maxAluno } from "./index.js";

test("verifica se o segundo argumento é zero", () => {
  expect(() => divisao(10, 0)).toThrow(Error);
});

test("verifica se o curso de soldagem está ativo", () => {
  const fraseDoDia = "o sol está escaldande em maceió";
  expect(cursos).toContain("eletronica");
  expect(fraseDoDia).toContain("sol");
});

//*matcher responsável por veriicar as propriedades de um objeto
test("verificar se a propriedade triguinho existe no objeto influencer", () => {
  expect(influencer).toHaveProperty("triguinho");
  expect(influencer).not.toHaveProperty("BET");
  expect(influencer).toHaveProperty("endereco.cidade", "Hellcife");
});

//*matcher responsável por verificar valor maior e menor
test("verificar numero maximo e mínimo", () => {
  expect(maxAluno).toBeGreaterThan(25); 
});

