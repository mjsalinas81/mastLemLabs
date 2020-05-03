import { renderHook, act } from "@testing-library/react-hooks";
import { HotelEntityVm } from "./hotel-collection.vm";
import { useHotelCollection } from "./hotel-collection.hook";
import * as api from './hotel-collection.api';
import { HotelEntityApi } from "./hotel-collection.api";
import * as commonMappers from 'common/mappers';
import * as hotelCollectionMapper from './hotel-collection.mapper';
import * as hotelCollectionVM from './hotel-collection.vm';
import { basePicturesUrl } from "core";

describe("hotel-collection.hook specs", () => {
  it("should return an empty hotelCollection and loadHotelCollection function when it calls it", () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useHotelCollection());

    // Assert
    expect(result.current.hotelCollection).toEqual([]);
    expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
  });


  it("should update hotel collection when it calls setHotelCollection", () => {
    // Arrange
    const hotels: HotelEntityVm[] = [
      {
        id: "testId",
        picture: "testPicture",
        name: "testName",
        description: "testDescription",
        rating: 1,
        address: "testAdress"
      }
    ];
    // Act
    const { result } = renderHook(() => useHotelCollection());

    act(() => {
      result.current.hotelCollection=hotels;
    });

    // Assert
    expect(result.current.hotelCollection).toEqual(hotels);
    
  });

  it("should act when it calls loadHotelCollection", async () => {
    // Arrange
    const hotels: HotelEntityApi[] = [
      {
        id: "idTest",
        thumbNailUrl: 'testUrl',
        name: "testName",
        address1: "testAdress1",
        shortDescription: "testShortDescription"
      } as HotelEntityApi
    ];

   const getHotelCollectionSpy=jest
   .spyOn(api, 'getHotelCollection')
   .mockResolvedValue(hotels);

   const mapToCollectionSpy = jest
   .spyOn(commonMappers, 'mapToCollection');

    const mapFromApiToVmSpy = jest
   .spyOn(hotelCollectionMapper, 'mapFromApiToVm');

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useHotelCollection());
  
    act(() => {
      result.current.loadHotelCollection();
    });
    await waitForNextUpdate();

    // Assert

    const expectedResult: hotelCollectionVM.HotelEntityVm[] = [
      {
        id: hotels[0].id,
        picture: `${basePicturesUrl}${hotels[0].thumbNailUrl}`,
        name: hotels[0].name,
        description:hotels[0].shortDescription,
        rating: hotels[0].hotelRating,
        address: hotels[0].address1,
      },
    ];

    expect(getHotelCollectionSpy).toHaveBeenCalled();
    expect(mapToCollectionSpy).toHaveBeenCalled();
    expect(mapFromApiToVmSpy).toHaveBeenCalledTimes(hotels.length);
    expect(result.current.hotelCollection).toStrictEqual(expectedResult);
  });

});
