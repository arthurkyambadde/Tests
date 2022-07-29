import Parking from "./parking_utils";

describe("Tests for parking object", () => {
  //tests for calculatePrice function
  test("if the car model parked in the parking is compact and its in the evening", () => {
    expect(Parking.calculatePrice(0, "compact", "evening")).toBe(3);
  });
  test("if the car model parked in the parking is compact and its in the morning", () => {
    expect(Parking.calculatePrice(0, "compact", "morning")).toBe(2.5);
  });
  test("if the car model parked in the parking is compact and its in the evening", () => {
    expect(Parking.calculatePrice(0, "compact", "afternoon")).toBe(2.75);
  });

  test("if the car model parked in the parking is large and its in the evening", () => {
    expect(Parking.calculatePrice(0, "large", "evening")).toBe(4);
  });
  test("if the car model parked in the parking is large and its in the morning", () => {
    expect(Parking.calculatePrice(0, "large", "morning")).toBe(3.5);
  });
  test("if the car model parked in the parking is large and its in the afternoon", () => {
    expect(Parking.calculatePrice(0, "large", "afternoon")).toBe(3.75);
  });

  test("if the car model parked in the parking is motorcycle and its in the evening", () => {
    expect(Parking.calculatePrice(0, "motorcycle", "evening")).toBe(1.5);
  });
  test("if the car model parked in the parking is motorcycle and its in the morning", () => {
    expect(Parking.calculatePrice(0, "motorcycle", "morning")).toBe(1);
  });
  test("if the car model parked in the parking is motorcycle and its in the afternoon", () => {
    expect(Parking.calculatePrice(0, "motorcycle", "afternoon")).toBe(1.25);
  });

  //end of tests for calculatePrice function

  //Tests for isValidDuration method
  test("Parking.isValidDuration method tests wether a car has parked for a valid duration which is between 0 and 24 but not 0 nor 24 or a value outside the limits", () => {
    expect(Parking.isValidDuration(0)).toBe(false);
    expect(Parking.isValidDuration(24)).toBe(false);
    expect(Parking.isValidDuration(5)).toBe(true);
    expect(Parking.isValidDuration(23.5)).toBe(true);
    expect(Parking.isValidDuration(0.5)).toBe(true);
    expect(Parking.isValidDuration(15)).toBe(true);
  });

  //End of Tests for isValidDuration method

  //Tests for isValidCarModel

  test("Tests whether Parking.isValidCarModel method returns true for valid car model", () => {
    expect(Parking.isValidCarModel("compact")).toBe(true);
    expect(Parking.isValidCarModel("large")).toBe(true);
    expect(Parking.isValidCarModel("motorcycle")).toBe(true);
    expect(Parking.isValidCarModel("small")).toBe(false);
    expect(Parking.isValidCarModel("kyombo")).toBe(false);
  });

  //End of Tests for isValidCarModel

  //Tests for isValidTimeOfDay method

  test("Tests whether Parking.isValidTimeOfDay method returns true for valid time of the day", () => {
    expect(Parking.isValidTimeOfDay("morning")).toBe(true);
    expect(Parking.isValidTimeOfDay("afternoon")).toBe(true);
    expect(Parking.isValidTimeOfDay("evening")).toBe(true);
    expect(Parking.isValidTimeOfDay("night")).toBe(false);
    expect(Parking.isValidTimeOfDay("dawn")).toBe(false);
  });

  //End of Tests for isValidTimeOfDay method

  //Tests for isValidParkingTicket method

  test("Tests whether isValidParkingTicket method returns true for valid parking ticket", () => {
    expect(Parking.isValidParkingTicket(10, "compact", "evening")).toBe(true);
    expect(Parking.isValidParkingTicket(10, "large", "evening")).toBe(true);
    expect(Parking.isValidParkingTicket(10, "motorcycle", "evening")).toBe(
      true
    );
    expect(Parking.isValidParkingTicket(10, "compact", "afternoon")).toBe(true);
    expect(Parking.isValidParkingTicket(10, "compact", "night")).toBe(false);
    expect(Parking.isValidParkingTicket(10, "posh", "evening")).toBe(false);
  });

  //End of Tests for isValidParkingTicket method

  //Test whether calculateParkingTicket method returns the right price for a valid parking ticket

  test("Test wether Parking.calculateParkingTicket method returns the right price of the parking ticket", () => {
    expect(Parking.calculateParkingTicket(10, "compact", "evening")).toBe(5.5);
    expect(Parking.calculateParkingTicket(10, "large", "evening")).toBe(6.5);
    expect(Parking.calculateParkingTicket(10, "large", "morning")).toBe(6);
    expect(Parking.calculateParkingTicket(10, "motorcycle", "evening")).toBe(4);
  });
});

// calculateParkingTicket: function (duration, carModel, timeOfDay) {
//     if (this.isValidParkingTicket(duration, carModel, timeOfDay)) {
//       return this.calculatePrice(duration, carModel, timeOfDay);
//     } else {
//       return "Invalid parking ticket";
//     }
//   },
