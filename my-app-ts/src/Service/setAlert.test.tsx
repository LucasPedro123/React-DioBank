import { setAlert } from "./setAlert";

describe('Validar se houve um Alert', ()=>{
    const mock = jest.fn();
    window.alert = mock;

    it('Exibe o Alert de Bem vindo!', ()=>{
        setAlert()
        expect(mock).toHaveBeenCalledWith('Bem vindo!')

    })
})