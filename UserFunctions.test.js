import * as Restaurant from "./Restaurant";

describe("Tests that User related functions perform there functions as expected", () => {
  test("Tests that the signup function creates a user depending on the Userid", () => {
    const User1 = Restaurant.signUp(
      "R001",
      1111,
      "Arthur",
      "kyambadde",
      "arthurkyambadde9@gmail.com",
      "0772952560",
      "kisaasi",
      "kyebando",
      "kampala",
      "0000"
    );

    expected(User1).toEqual({
      restaurantId: restaurantId,
      userId: "R001",
      password: 1111,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
    });
  });
});
