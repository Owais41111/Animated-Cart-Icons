# 🛒 Animated Cart Icons

A playful and interactive set of **animated SVG icons** built with **HTML**, **CSS**, and **JavaScript**. These animations mimic actions you'd typically find in e-commerce platforms, such as **adding to cart**, **saving for later**, **marking as favorite**, and **gifting** items — all presented with smooth transitions and colorful fruit-themed designs! 🍎🍋🍉

## 🌟 Demo Features

This project includes four separate icon demos, each demonstrating unique interactions:

### 🛒 Cart Icons
- Clickable SVG shopping carts
- Add fruit (apple, lime) with fun animations
- Checkmark confirmation and item count indicator

### ⭐ Save for Later
- Stylized star icons
- Glowing stroke effects and check animations
- Supports multiple animation styles

### 🎁 Gift Box
- Animated gift boxes with bow-drawing effects
- Fruit "popping out" as gifts (lemon, lime)
- Lid lift and bow animations using SVG paths

### ❤️ Favorite Heart
- Beating heart icon on click
- Loader dots animate before completing the action
- Drawn heart animation using stroke-dasharray

## 🛠️ Technologies Used

- **HTML5** for layout and SVG rendering
- **CSS3** for styling, transitions, and keyframe animations
- **JavaScript** for toggling active icon states and triggering animations
- **Google Fonts** (Nunito) for clean, rounded UI text
- **jQuery** for DOM interaction (via CDN, although minimally used)

## 🎮 How It Works

Each icon is wrapped inside an `.icon-hook` anchor tag. When clicked:
1. JavaScript toggles an `.active` class.
2. CSS animations respond based on this class.
3. The result is a smooth, interactive user experience!

```js
icons = document.querySelectorAll('.icon-hook');

for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function(event) {
    event.preventDefault();
    var icon = this;
    var currentClass = icon.getAttribute('class'); 
    if (currentClass.indexOf('active') > -1) {
      icon.setAttribute('class', currentClass.replace(' active', ''));
    } else {
      icon.setAttribute('class', currentClass + ' active');
    }
  }, false);
}
```

## 📂 File Structure

```
/project-root
│
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # JS for toggle interactivity
└── assets/         # (Optional) for storing custom SVGs or images
```

## 🚀 Getting Started

To see it in action:

1. **Clone the repo**
   ```bash
   git clone https://github.com/Owais41111/Animated-Cart-Icons
   cd animated-cart-icons
   ```

2. **Open `index.html` in your browser**  
   No build tools or servers required — it's all vanilla HTML/CSS/JS.

## 💡 Customization Tips

- Want new icons? Replace the SVGs in each `.contain-icon`.
- Modify timing and transitions in `@keyframes` inside `style.css`.
- Hook into the animation completion with JS if integrating into a larger app.

## 📸 Screenshots

> You can embed visuals or record a screen demo here using a `.gif` or `.mp4` to show off the animations.

## 🧑‍💻 Author

Made with ❤️ and fruit by [Ejaz Ahmed](https://github.com/Owais41111)

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 🍊 Made for fun and UI inspiration!

```
