# Exercises: Animation

## The Cat Walk

Who needs Milan when you have JavaScript?

Start with this webpage, which has a single `img` tag of an animated GIF of a cat walking.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dancing Cats</title>
    <style>
      .dancing-cat {
        position: absolute;
      }
    </style>
  </head>
  <body>
    <img
      src="http://www.anniemation.com/clip_art/images/cat-walk.gif"
      class="dancing-cat"
    />
  </body>
</html>
```

### Steps

- Create a new Javascript file and link to it with a `script` tag at the bottom
- Create a variable to store a reference to the `img` DOM Node
- Change the style of the `img` to have a `"left"` position of `"0px"`, so that it starts at the left hand side of the screen
- Create a function called `catWalk` that moves the cat 10 pixels to the right of where it started, by changing the `"left"` style property.
- Call that function every `50` milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

  - Hint: `setTimeout` or `setInterval` might come in handy here!

### Bonuses

**Bonus #1:** When the cat reaches the right-hand of the screen, restart them at the left hand side (`"0px"`). They should keep walking from left to right across the screen, forever and ever.

**Bonus #2:** When the cat reaches the right-hand side of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. If you want to make it actually look like it is walking backwards - try setting the `transform` property to `scaleX(-1)`

**Bonus #3:** When the cat reaches the middle of the screen, replace the `img`'s `src` with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the `img`'s `src` with the original image and have it continue the walk.

**Bonus #4:** Do whatever you want! Add more images, more animations, etc.
