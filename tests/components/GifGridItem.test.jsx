import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas <GifGridItem />', () => {

    const title = 'Dragon Ball';
    const url = "https://algo.com/";

    test('debe machear el snapshot', () => {
        
        const { container } = render( <GifGridItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
      
    });

    test('debe mostrar la imagen con el URL y el ALt indicado ', () => {

        render( <GifGridItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
      
    })
    
    test('debe mostrar el titulo en un componente ', () => {

        render( <GifGridItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
      
    })
    
})
