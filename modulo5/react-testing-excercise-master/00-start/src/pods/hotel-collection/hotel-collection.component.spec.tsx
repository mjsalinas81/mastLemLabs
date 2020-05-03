import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';

describe('hotel-collection.component specs', () => {
  it('should display the hotel with given name', () => {

    // Arrange
    const hotelCollectionProps = [
      {
        id: 'testId',
        picture: 'testPicture',
        name: 'testName',
        description: 'testDescription',
        rating: 1,
        address: 'testAdress',
      },
    ];

    // Act
    const { getByTestId } = render(<HotelCollectionComponent hotelCollection={hotelCollectionProps} />);
   
    // Assert
    const element = getByTestId('hello-comp'); 

    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('DIV');
    expect(element).toBeInTheDocument();
  });
});
