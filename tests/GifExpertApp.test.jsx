import { render, screen } from "@testing-library/react";
import GifExpertApp from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {

    test('debe machear con el snapshot', () => {

        const { container } =  render( <GifExpertApp />);

        expect ( container ).toMatchSnapshot();
      
    });

    test('debe mostart el titulo GifExpertApp', () => {

        render( <GifExpertApp />);
        expect( screen.getByText( 'GifExpertApp' )).toBeTruthy();
      
    });
  
})
