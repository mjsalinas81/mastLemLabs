import * as React from "react";
import { render, waitForElement } from "@testing-library/react";
import { HotelCollectionContainer } from "./hotel-collection.container";
import * as hook from "./hotel-collection.hook";

describe("hotel-collection.container specs", () => {
  it("should display the hotel with name when givenname", async () => {

    // Arrange

    const hotelCollection = [
      {
        id: "testId",
        picture: "testPicture",
        name: "testName",
        description: "testDescription",
        rating: 1,
        address: "testAdress"
      }
    ];

    const result = {
      hotelCollection,
      loadHotelCollection: jest.fn()
    };

    const getStub = jest
      .spyOn(hook, "useHotelCollection")
      .mockReturnValue(result);

    // Act
    const { getByText } = render(<HotelCollectionContainer />);
    const element = await waitForElement(() => getByText("testName"));

    // Assert
    expect(getStub).toHaveBeenCalled();
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.hasAttribute(`name`)).toBeTruthy;
    expect(element.textContent).toEqual("testName");
  });
});
