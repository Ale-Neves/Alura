import React from 'react';
import App, { calcularNovoSaldo } from './App'
import { render, screen} from '@testing-library/react';

describe('Componente pricipal', () => {

    describe('Quando eu abro o app do banco', () => {
        test('A Label do nome do banco', () => {
            render(<App/>);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })
        test('A Label saldo', () => {
            render(<App/>);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })
        test('A Label do botão Realizar operação', () => {
            render(<App/>);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })

    describe('Quando eu realizo uma transação', () => {
        test('Saque, o valor vai ser diminuido', () => {
            
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(100);
        });
    })
})