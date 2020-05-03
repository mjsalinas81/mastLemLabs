import * as React from 'react';
import {render,fireEvent} from '@testing-library/react';
import {TextField} from './text-field';

describe("TextField component specs", () => {
   it("should display de component with the given props", () => {
     // Arrange
     const props = {
       input: {
         name: "Manuel",
         onChange: jest.fn(),
         value: "valor",
         onBlur: jest.fn(),
         onFocus: jest.fn()
       },
       meta: "",
       "data-testid": "testid",
       "data-testid-div": "testDivId"
     };
 
     // Act
     const { getByTestId } = render(<TextField {...props} />);
 
     const element = getByTestId("testid") as HTMLInputElement;

     fireEvent.change(element, { target: { value: 'new_value' }});

     // Assert
     expect(element).toBeInTheDocument();
     expect(element.textContent).not.toBeNull();
     expect(element.textContent).toEqual("");
     expect(element.hasAttribute(`name`)).toBeTruthy;
     expect(element.hasAttribute(`value`)).toBeTruthy;
     expect(element.name).toEqual("Manuel");
     expect(element.value).toEqual("valor");

     expect(props.input.onChange).toHaveBeenCalled();
   });

  /*
   it("should display de component with the given props and mui-error", () => {

    // Arrange
    const props = {
      input: {
        name: "Manuel",
        onChange: jest.fn(),
        value: "valor",
        onBlur: jest.fn(),
        onFocus: jest.fn()
      },
      meta: {
        error: true,
        touched: true,
      },
      "data-testid": "testid",
      "data-testid-div": "testDivId"
    };

    // Act
    const { getByTestId} = render(<TextField {...props} />);

    const element = getByTestId("testid") as HTMLInputElement;
    const errorClass=  getByTestId("testDivId").firstChild as HTMLParagraphElement;

    // Assert
     expect(element).toBeInTheDocument();
     expect(element.textContent).not.toBeNull();
     expect(element.hasAttribute(`name`)).toBeTruthy;
     expect(element.hasAttribute(`value`)).toBeTruthy;

    expect(errorClass.className).toContain("Mui-error");
  });
  
*/
 });