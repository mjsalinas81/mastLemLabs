import * as viewModel from './hotel-collection.vm';
import * as apiModel from './hotel-collection.api';
import * as mapper from './hotel-collection.mapper';
import { basePicturesUrl } from 'core';

describe('pods hotel-collection.mapper specs', () => {
    it('should return a HotelEntityVm when passing a HotelEntityApi', () => {

      // Arrange

      const hotel: apiModel.HotelEntityApi = {
        id: 'testId',
        type: 'testType',
        name: 'testName',
        created: new Date(2020, 3, 1),
        modified: new Date(2020,3, 30),
        address1: 'testAddress1',
        airportCode: 'testAirportCode',
        amenityMask: 1,
        city: 'testCity',
        confidenceRating: 1,
        countryCode: 'testCountryCode',
        deepLink: 'testDeepLink',
        highRate: 1,
        hotelId: 1,
        hotelInDestination: false,
        hotelRating: 1,
        location: {
          latitude: 1,
          longitude: 1,
        },
        locationDescription: 'testLocationDescription',
        lowRate: 1,
        metadata: {
          path: 'testPath',
        },
        postalCode: 1,
        propertyCategory: 1,
        proximityDistance: 1,
        proximityUnit: 'testProximityUnit',
        rateCurrencyCode: 'testRateCurrencyCode',
        shortDescription: 'testShortDescription',
        stateProvinceCode: 'testStateProvinceCode',
        thumbNailUrl: 'testThumbNailUrl',
        tripAdvisorRating: 1,
        tripAdvisorRatingUrl: 'testTripAdvisorRatingUrl',
      };
  
      // Act
      const result: viewModel.HotelEntityVm = mapper.mapFromApiToVm(hotel);
  
      // Assert
      const expectedResult: viewModel.HotelEntityVm = {
        id: hotel.id, 
        picture: `${basePicturesUrl}${hotel.thumbNailUrl}`,
        name: hotel.name, 
        description:hotel.shortDescription,
        rating: hotel.hotelRating,
        address: hotel.address1,
      };
      
      expect(result).toEqual(expectedResult);
    });
  });