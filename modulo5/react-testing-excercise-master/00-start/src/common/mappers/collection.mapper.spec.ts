import * as viewModel from '../../pods/hotel-collection/hotel-collection.vm';
import * as mapper from './collection.mapper';

describe('mapper specs', () => {
  it('should return [] when passing HotelEntityVm[] equals undefined', () => {
    // Arrange
    const hotelEntities: viewModel.HotelEntityVm[] = undefined;
    const mapFn = jest.fn();

    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(hotelEntities,mapFn);

    // Assert
    expect(result).toEqual([]);
    expect(mapFn).not.toHaveBeenCalled();
  });

  it('should return [] when passing HotelEntityVm[] equals null', () => {
    
    // Arrange
    const hotelEntities: viewModel.HotelEntityVm[] = null;
    const mapFn = jest.fn();

    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(hotelEntities,mapFn);

    // Assert
    expect(result).toEqual([]);
    expect(mapFn).not.toHaveBeenCalled();
  });

  it('should return [] when passing HotelEntityVm[]', () => {
    const hotelEntities: viewModel.HotelEntityVm[] = [];
    const mapFn = jest.fn();

    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(hotelEntities,mapFn);

    // Assert
    expect(result).toEqual([]);
    expect(mapFn).not.toHaveBeenCalled();
  });

  it('should return an array with mapped entity when passing an array with one element', () => {
    // Arrange
    const hotelEntity: viewModel.HotelEntityVm = {
        id: 'testId',
        address: 'addressTest',
        description: 'descriptionTest',
        name: 'testName',     
        picture: 'testPicture',
        rating: 4,
      };

    const hotelsEntities: viewModel.HotelEntityVm[] = [hotelEntity];
    const mapFn= jest.fn(() => hotelEntity) ;
    
    // Act
    const result: viewModel.HotelEntityVm[] = mapper.mapToCollection(hotelsEntities,mapFn);

    // Assert
    const expectedResult: viewModel.HotelEntityVm[] = [
      {
        id: hotelEntity.id,
        address:  hotelEntity.address,
        description:  hotelEntity.description,
        name:  hotelEntity.name,    
        picture:  hotelEntity.picture,
        rating:  hotelEntity.rating,
      },
    ];
    expect(result).toEqual(expectedResult);
    expect(mapFn).toHaveBeenCalled();
  });

});