// Logic to calculate the price of a parking ticket based off duration of stay and model of car and the time of day.

const parking = {
  calculatePrice: function (duration, carModel, timeOfDay) {
    let price = 0;
    if (carModel === "compact") {
      price += 2.0;
    } else if (carModel === "large") {
      price += 3.0;
    } else if (carModel === "motorcycle") {
      price += 0.5;
    }
    if (timeOfDay === "morning") {
      price += 0.5;
    } else if (timeOfDay === "afternoon") {
      price += 0.75;
    } else if (timeOfDay === "evening") {
      price += 1.0;
    }
    price += duration * 0.25;
    return price;
  },

  isValidDuration: function (duration) {
    return duration > 0 && duration < 24;
  },

  isValidCarModel: function (carModel) {
    return (
      carModel === "compact" ||
      carModel === "large" ||
      carModel === "motorcycle"
    );
  },

  isValidTimeOfDay: function (timeOfDay) {
    return (
      timeOfDay === "morning" ||
      timeOfDay === "afternoon" ||
      timeOfDay === "evening"
    );
  },

  isValidParkingTicket: function (duration, carModel, timeOfDay) {
    return (
      this.isValidDuration(duration) &&
      this.isValidCarModel(carModel) &&
      this.isValidTimeOfDay(timeOfDay)
    );
  },

  calculateParkingTicket: function (duration, carModel, timeOfDay) {
    if (this.isValidParkingTicket(duration, carModel, timeOfDay)) {
      return this.calculatePrice(duration, carModel, timeOfDay);
    } else {
      return "Invalid parking ticket";
    }
  },
};

export default parking;
