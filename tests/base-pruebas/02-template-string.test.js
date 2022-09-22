import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-template-string.js', () => {
    test('getSaludo debe retornar "Hola nombre"', () => {

        const name = 'Juan';
        const message = getSaludo(name);
        
        expect(message).toBe(`Hola ${name}`)

    });
})