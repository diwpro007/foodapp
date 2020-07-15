import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GN_hY8l9zGYzuYFPqIb6iqevXVsvzTN0woGY9kcQICXTknQb9u0p7ruLBB01EWQjBmccZ5lY42Z0iJSmsqG5DV8nA35lAgYbin1vg1fJFQ9628j_S0c2vsAmXyAMX3Yx",
  },
});
