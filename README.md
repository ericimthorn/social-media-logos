#Social media logos (small icons)
*New logo's will be added when I need them*

The file `icons.eps` contains my `20px x 20px` renditions of various social media icons in white.
I tried to keep all the different style-guides in mind, but I have taken some liberties to keep uniformity.
I have taken the SoundCloud icon form their embedded player because the larger one does not work in small sizes.

The `css` foler contains:
  - The icons in `svg` inside `css/icons`
  - A *svg sprite* inside `css/sprite` with complementary css files inside `css/css`.   
The css files and the sprite is created with `gulp` + `gulp-svg-sprite` from the files inside `css/icons`.   
There is no png fallback so the browser support is IE9+.   
The project documentation on gulp-svg-sprite can be found here:  
<https://github.com/jkphl/gulp-svg-sprite/blob/master/README.md#basic-example>

Gulp outputs `.css`, `.styl` (Stylus) and `.scss` (SASS/SCSS)

Links to the style guides can be found here:
  - Facebook <https://www.facebookbrand.com/>
  - Google+ <https://developers.google.com/+/branding-guidelines>
  - Instagram <https://www.instagram-brand.com/>
  - LinkedIn <https://brand.linkedin.com/>
  - Pinterest <https://business.pinterest.com/en/brand-guidelines>
  - SoundCloud <https://developers.soundcloud.com/docs/api/buttons-logos>
  - Twitter <https://about.twitter.com/company/brand-assets>
  - WhatsApp <https://www.whatsappbrand.com/>
  - YouTube <https://www.youtube.com/yt/brand/nl/downloads.html>
