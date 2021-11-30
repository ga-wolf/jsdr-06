# International Space Station

Your task is to show the current position of the International Space Station.

To do this, you'll use [the Open Notify ISS Location Now API](http://open-notify.org/Open-Notify-API/ISS-Location-Now/).

The process will be:

- Make the `fetch` request to the API
- Wait for that request to come back
- Wait for the request data to be turned from JSON into a JS object
- Work with the data!
  - Use DOM Manipulation to add the latitude and longitude that is returned from the API to the page

**Hint**: I'd suggest setting up some HTML that JS then updates, rather than having to do lots of `document.createElement`s.

## Bonuses

### Bonus One: Updating the current latitude and longitude

Instead of just showing the latitude and longitude when the page first loads, update them at a regular interval (for example, every second).

**Hint**: You'll have to make another API request, as well as use something like `setTimeout` or `setInterval`

### Bonus Two: Showing the current position with Google Maps

When the page first loads, use the [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript) to show the current position of the ISS using a [Marker](https://developers.google.com/maps/documentation/javascript/markers) (something that Google Maps provides).

### Bonus Three: Update the position with Google Maps

At regular intervals, update the position of that marker in your embedded Google Maps.

### Bonus Four: Use a custom marker for ISS on Google Maps

Find out how to use a custom marker with the Google Maps API. Maybe use an image of the ISS?

### Bonus Five: Make it pretty, plus whatever else you want

Now it is the time for you to add whatever you want! Make the page pretty, add some [facts about the ISS](https://www.nasa.gov/feature/facts-and-figures), anything!

## Resources

- [API Documentation](http://open-notify.org/Open-Notify-API/ISS-Location-Now/)
- JavaScript functions/methods you'll likely need:
  - [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) and [.json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
  - [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) or [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- Google Maps
  - [Documentation](https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript) - Make sure you create an API key!
