// An application api to get user information for a restaurant about a specific meal
import fs from "fs";
// sign up a user for a restaurant
// input: restaurant id, user id, password, first name, last name, email, phone number, address, city, state, zip code
// output: user id
export const signUp = function (
  restaurantId,
  userId,
  password,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  city,
  state,
  zipCode
) {
  var user = {
    restaurantId: restaurantId,
    userId: userId,
    password: password,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    city: city,
    state: state,
    zipCode: zipCode,
  };
  // save user to local file system
  try {
    fs.writeFileSync(`./data/users/${userId}.json`, JSON.stringify(user));
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// sign in a user for a restaurant
// input: restaurant id, user id, password
// output: user id
export const signIn = function (restaurantId, userId, password) {
  // read user from local file system
  try {
    var user = JSON.parse(fs.readFileSync(`./data/users/${userId}.json`));
    if (user.restaurantId === restaurantId && user.password === password) {
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get user information for a restaurant
// input: restaurant id, user id
// output: user id
export const getUser = function (restaurantId, userId) {
  // read user from local file system
  try {
    var user = JSON.parse(fs.readFileSync(`./data/users/${userId}.json`));
    if (user.restaurantId === restaurantId) {
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get all users for a restaurant
// input: restaurant id
// output: array of users
export const getAllUsers = function (restaurantId) {
  // read all users from local file system
  var users = [];
  try {
    var files = fs.readdirSync(`./data/users`);
    files.forEach(
      function (file) {
        var user = JSON.parse(fs.readFileSync(`./data/users/${file}`));
        if (user.restaurantId === restaurantId) {
          users.push(user);
        }
      }.bind(this)
    );
    return users;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// update user information for a restaurant
// input: restaurant id, user id, password, first name, last name, email, phone number, address, city, state, zip code
// output: user id
export const updateUser = function (
  restaurantId,
  userId,
  password,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  city,
  state,
  zipCode
) {
  // read user from local file system
  try {
    var user = JSON.parse(fs.readFileSync(`./data/users/${userId}.json`));
    if (user.restaurantId === restaurantId) {
      user.password = password;
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.phoneNumber = phoneNumber;
      user.address = address;
      user.city = city;
      user.state = state;
      user.zipCode = zipCode;
      fs.writeFileSync(`./data/users/${userId}.json`, JSON.stringify(user));
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// delete user information for a restaurant
// input: restaurant id, user id
// output: user id
export const deleteUser = function (restaurantId, userId) {
  // read user from local file system
  try {
    var user = JSON.parse(fs.readFileSync(`./data/users/${userId}.json`));
    if (user.restaurantId === restaurantId) {
      fs.unlinkSync(`./data/users/${userId}.json`);
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// register a meal for a restaurant
// input: restaurant id, meal id, name, description, price, image
// output: meal id
export const registerMeal = function (
  restaurantId,
  mealId,
  name,
  description,
  price,
  image
) {
  var meal = {
    restaurantId: restaurantId,
    mealId: mealId,
    name: name,
    description: description,
    price: price,
    image: image,
  };
  // save meal to local file system
  try {
    fs.writeFileSync(`./data/meals/${mealId}.json`, JSON.stringify(meal));
    return meal;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get meal information for a restaurant
// input: restaurant id, meal id
// output: meal id
export const getMeal = function (restaurantId, mealId) {
  // read meal from local file system
  try {
    var meal = JSON.parse(fs.readFileSync(`./data/meals/${mealId}.json`));
    if (meal.restaurantId === restaurantId) {
      return meal;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get all meals for a restaurant
// input: restaurant id
// output: array of meals
export const getAllMeals = function (restaurantId) {
  // read all meals from local file system
  var meals = [];
  try {
    var files = fs.readdirSync(`./data/meals`);
    files.forEach(
      function (file) {
        var meal = JSON.parse(fs.readFileSync(`./data/meals/${file}`));
        if (meal.restaurantId === restaurantId) {
          meals.push(meal);
        }
      }.bind(this)
    );
    return meals;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// update meal information for a restaurant
// input: restaurant id, meal id, name, description, price, image
// output: meal id
export const updateMeal = function (
  restaurantId,
  mealId,
  name,
  description,
  price,
  image
) {
  // read meal from local file system
  try {
    var meal = JSON.parse(fs.readFileSync(`./data/meals/${mealId}.json`));
    if (meal.restaurantId === restaurantId) {
      meal.name = name;
      meal.description = description;
      meal.price = price;
      meal.image = image;
      fs.writeFileSync(`./data/meals/${mealId}.json`, JSON.stringify(meal));
      return meal;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// delete meal information for a restaurant
// input: restaurant id, meal id
// output: meal id
export const deleteMeal = function (restaurantId, mealId) {
  // read meal from local file system
  try {
    var meal = JSON.parse(fs.readFileSync(`./data/meals/${mealId}.json`));
    if (meal.restaurantId === restaurantId) {
      fs.unlinkSync(`./data/meals/${mealId}.json`);
      return meal;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// register a menu for a restaurant
// input: restaurant id, menu id, name, description, image
// output: menu id
export const registerMenu = function (
  restaurantId,
  menuId,
  name,
  description,
  image
) {
  var menu = {
    restaurantId: restaurantId,
    menuId: menuId,
    name: name,
    description: description,
    image: image,
  };
  // save menu to local file system
  try {
    fs.writeFileSync(`./data/menus/${menuId}.json`, JSON.stringify(menu));
    return menu;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get menu information for a restaurant
// input: restaurant id, menu id
// output: menu id
export const getMenu = function (restaurantId, menuId) {
  // read menu from local file system
  try {
    var menu = JSON.parse(fs.readFileSync(`./data/menus/${menuId}.json`));
    if (menu.restaurantId === restaurantId) {
      return menu;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get all menus for a restaurant
// input: restaurant id
// output: array of menus
export const getAllMenus = function (restaurantId) {
  // read all menus from local file system
  var menus = [];
  try {
    var files = fs.readdirSync(`./data/menus`);
    files.forEach(
      function (file) {
        var menu = JSON.parse(fs.readFileSync(`./data/menus/${file}`));
        if (menu.restaurantId === restaurantId) {
          menus.push(menu);
        }
      }.bind(this)
    );
    return menus;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// update menu information for a restaurant
// input: restaurant id, menu id, name, description, image
// output: menu id
export const updateMenu = function (
  restaurantId,
  menuId,
  name,
  description,
  image
) {
  // read menu from local file system
  try {
    var menu = JSON.parse(fs.readFileSync(`./data/menus/${menuId}.json`));
    if (menu.restaurantId === restaurantId) {
      menu.name = name;
      menu.description = description;
      menu.image = image;
      fs.writeFileSync(`./data/menus/${menuId}.json`, JSON.stringify(menu));
      return menu;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// delete menu information for a restaurant
// input: restaurant id, menu id
// output: menu id
export const deleteMenu = function (restaurantId, menuId) {
  // read menu from local file system
  try {
    var menu = JSON.parse(fs.readFileSync(`./data/menus/${menuId}.json`));
    if (menu.restaurantId === restaurantId) {
      fs.unlinkSync(`./data/menus/${menuId}.json`);
      return menu;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
// register a restaurant
// input: restaurant id, name, description, image
// output: restaurant id
export const registerRestaurant = function (
  restaurantId,
  name,
  description,
  image
) {
  var restaurant = {
    restaurantId: restaurantId,
    name: name,
    description: description,
    image: image,
  };
  // save restaurant to local file system
  try {
    fs.writeFileSync(
      `./data/restaurants/${restaurantId}.json`,
      JSON.stringify(restaurant)
    );
    return restaurant;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get restaurant information for a restaurant
// input: restaurant id
// output: restaurant id
export const getRestaurant = function (restaurantId) {
  // read restaurant from local file system
  try {
    var restaurant = JSON.parse(
      fs.readFileSync(`./data/restaurants/${restaurantId}.json`)
    );
    return restaurant;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// get all restaurants
// input: none
// output: array of restaurants
export const getAllRestaurants = function () {
  // read all restaurants from local file system
  var restaurants = [];
  try {
    var files = fs.readdirSync(`./data/restaurants`);
    files.forEach(
      function (file) {
        var restaurant = JSON.parse(
          fs.readFileSync(`./data/restaurants/${file}`)
        );
        restaurants.push(restaurant);
      }.bind(this)
    );
    return restaurants;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// update restaurant information for a restaurant
// input: restaurant id, name, description, image
// output: restaurant id
export const updateRestaurant = function (
  restaurantId,
  name,
  description,
  image
) {
  // read restaurant from local file system
  try {
    var restaurant = JSON.parse(
      fs.readFileSync(`./data/restaurants/${restaurantId}.json`)
    );
    restaurant.name = name;
    restaurant.description = description;
    restaurant.image = image;
    fs.writeFileSync(
      `./data/restaurants/${restaurantId}.json`,
      JSON.stringify(restaurant)
    );
    return restaurant;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// delete restaurant information for a restaurant
// input: restaurant id
// output: restaurant id
export const deleteRestaurant = function (restaurantId) {
  // read restaurant from local file system
  try {
    var restaurant = JSON.parse(
      fs.readFileSync(`./data/restaurants/${restaurantId}.json`)
    );
    fs.unlinkSync(`./data/restaurants/${restaurantId}.json`);
    return restaurant;
  } catch (err) {
    console.log(err);
    return null;
  }
};
