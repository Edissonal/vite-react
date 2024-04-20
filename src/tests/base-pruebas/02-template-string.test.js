import { getSaludo } from "../../../base-pruebas/02-template-string";


describe('pruebas en el archivo temklati sstring', () => {
    test('should Get saludo debe retornar "Hola fernando"', () => {
        const name = 'Fernando';
        const message = getSaludo(name);
        
        expect(message).toBe(`Hola ${name}`);

    })
    
    })