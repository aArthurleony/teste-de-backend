import { areaQuadrado, listaDeFrutas } from "./funcao.js";

test("Verifica área do quadrado", () => {
  expect(areaQuadrado(10)).toBe(100);
  expect(areaQuadrado(5)).toBe(25);
  expect(areaQuadrado(20)).toBe(400);
  expect(areaQuadrado(25)).toBe(625);
});

test("compara strings", () => {
  expect("leony").toBe("leony");
});

test("Verifica se tem Banana", ()=>{
    expect(listaDeFrutas()).toContain("Banana")
})