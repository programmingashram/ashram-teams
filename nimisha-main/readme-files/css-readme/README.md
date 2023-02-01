## CSS (Cascading Style Sheet)

#### CSS is the language we use to style an HTML document.

USE CSS
CSS is used to define style for your web pages. Including the design layout and variations in display for different devices and screen sizes.


### CSS Selector

A CSS Selector select the HTML element(s) you want to style.

We can divide CSS selector into three categories:

* Simple Selectors 
* Combinator Selector
* Pseudo Selector

#### Note:- An Id and Class Cannot start with a Number.

### 1. Simple Selectors

Simple Selectors - select elements based in name, id and class.

All CSS Simple Selectors
#id, .class, element.class, *, element, element,element


### 2. Combinator Selectors

A combinator is something that explains the relationship between the selectors.

There are four different combinators in CSS:
* Descendant selector (space)         -  element element
* Child selector (>)                  -  element>element  
* Adjacent sibling selector (+)       -  element+element
* General sibling selector (~)        -  element~element


### 3. Pseudo Selectors

A Pseudo Selectors is used to define a special state of an element.

All Pseudo elements

:active, :checked, :disabled, :empty, :enabled, :first-child, :focus, :hover, :invalid, :link, :nth-child(n), :required, :root, :target, :valid, :visited, ::after, ::before


### Three ways to insert CSS

* External CSS
* Internal CSS
* Inline CSS


#### 1. External CSS

With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.


#### 2. Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the <style> element, inside the head section.


#### 3. Inline CSS

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.


#### The CSS background properties are used to add background effects for elements.

##### CSS Background properties:

* background-color
* background-image
* background-repeat
* background-attachment
* background-position
* background (Shorthand property)


#### opacity/ Transparency

The opacity property Specifies the opecity/ transparency of an element. It can take a value from 0.0 - 1.0 The lower value, the more transparet.

##### Note:- When using the opacity propery to add transparency to the background of an element all of its child element inherit the same transparency. This can make the text inside a fully transparent element hand to read.

If we don't want to apply opacity to child element, use RGBA color

background: rgba(0, 128, 0, 0.3);

0.3 is opacity value.


#### CSS Borders

The CSS border Properties allow you to specify the style-width, and color of an element's border.

To shorten the code, The border property is a shorthand property for the following individual border properties:

* border-width
* border-style(required)
* border-color

exp:- p{
    border: 5px solid red;
}

The border-radius property is used to add rounded borders to an element:


### CSS margins

Margins are used to create space around elements, outside of any defined borders.

margin- Individual sides

CSS has properties for specifying the margin for each side of an element:

* margin-top
* margin-right
* margin-bottom
* margin-left


All the margin properties can have the following value:

* auto- the browser calculates the margin.
* lengh- Specifies a margin in px, pt, cm etc.
* %- Specifies a margin in % of the width of the containing element.
* inherit- Specifies that the margin should be inherited from the parent element.

##### Tip:- Negative values are allowed.

Margin- a shorthand property for setting all the margin properties in one declaration.


##### Padding- 

Padding is used to create space around an element's content, inside of any defined borders.

Padding individul sides:

* padding-top
* padding-right
* padding-bottom
* padding-left

padding shorthand property

To shorthand the code, it is possiable to specify all the padding properties in one property.

##### The CSS height & width properties are used to set the height and width of an element.

##### The CSS max-width property is used to set the maximum width of an element.

CSS height & width value

* auto- This is default. The browser calculates the height & width.
* lengh- Defines the height/ width in px, pt, cm etc.
* %- Defines the height/ width in % of the width of the containing element.
* initial- sets the height/ width to its default value.
* inherit- Defines the height/ width will be inherited from the parent value.


#### The CSS Box-Model

In CSS, the term "box-model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of margin, border, padding and the actual conten. 

Explamintion of the different parts:
* content- The content of the box, where text and images appear.
* padding- clears an area around the content. The padding is transpared.
* border- A border that goes around the padding an content.
* margin- Clears an area outside tha border. The margin is transparent

The Box Model allows us to add a border around elements, and to define space between elements.

#### OUTLINE

An outline is a line drown outsid the elements border.

The outline property is a shorthand property for setting the following individual outline properties

* outline-width
* outline-style(required)
* outine-color


##### The text-align property is used to set the horizontal alignment of a text.

a text can be left or right aligned, centred or justified


#### Text-shadow

the text-shadow property adds shadow to text. In its simplest use, you only specify the horizontal shadow and vertical shadow.
we also can add some color and blur effect.

text-shadow: horizontal, vertical, blur, color;


#### The display property

The "display" specifies if/ how an element is displayed.

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

#### display: none;

Hiding an elements can be done by setting the display property to none. The element will be hidden, and tha page will be displayed as if the element is not there.

#### visibility: hiidden;

also hidden an element
However, the element will still take up the same space as before. The element will be hidden, but still effect the layout.











## CSS
___________________________________

### What is CSS ?

#### CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces.


### How many types of selector ?

#### A CSS Selector select the HTML element(s) you want to style.

We can divide CSS selector into three categories:

* Simple Selectors 
* Combinator Selector
* Pseudo Selector

#### Note:- An Id and Class Cannot start with a Number.

1. Simple Selectors

Simple Selectors - select elements based in name, id and class.

All CSS Simple Selectors
#id, .class, element.class, *, element, element,element


2. Combinator Selectors

A combinator is something that explains the relationship between the selectors.

There are four different combinators in CSS:
* Descendant selector (space)         -  element element
* Child selector (>)                  -  element>element  
* Adjacent sibling selector (+)       -  element+element
* General sibling selector (~)        -  element~element


3. Pseudo Selectors

A Pseudo Selectors is used to define a special state of an element.

All Pseudo elements

:active, :checked, :disabled, :empty, :enabled, :first-child, :focus, :hover, :invalid, :link, :nth-child(n), :required, :root, :target, :valid, :visited, ::after, ::before



### What is the keframes in css ?

#### In CSS, keyframes are used for animations. It gives you more control over the animation you want to perform. The animation is created by gradually changing from one style to another.


### What is pseode Selectors ?

#### Pseudo Selectors

A Pseudo Selectors is used to define a special state of an element.

All Pseudo elements

:active, :checked, :disabled, :empty, :enabled, :first-child, :focus, :hover, :invalid, :link, :nth-child(n), :required, :root, :target, :valid, :visited, ::after, ::before

### What is box Modal ??**

#### In CSS, the term "box-model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of margin, border, padding and the actual conten. 

Explamintion of the different parts:
* content- The content of the box, where text and images appear.
* padding- clears an area around the content. The padding is transpared.
* border- A border that goes around the padding an content.
* margin- Clears an area outside tha border. The margin is transparent

The Box Model allows us to add a border around elements, and to define space between elements.



### What is the dif between outline and border ?? **

#### Border is created inside the element, where as outline is created outside the element. So border is computed along with the width and height of the element, while outline draws outside the element.



### What is the dif between padding and margin ?

#### In HTML, margin and padding are the two elements that are used for spacing-out the elements in the HTML contents. Margin is the outer space of an element in HTML, and padding is the elements’ inner space, but both of the concepts will target the space complexity of the HTML elements.



### What are transform properties in css ?

#### The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.


### What is dif between inline elements and block level elements ?

####  A block-level element is any element that starts a new line (e.g., paragraph) and uses the full width of the page or container. An inline element does not start on a new line. An inline element only takes up as much width as necessary.


### What is Flex box in Css ?

####  is a new layout mode in CSS3. The CSS3 flexbox is used to make the elements behave predictably when they are used with different screen sizes and different display devices. It provides a more efficient way to layout, align and distribute space among items in the container.


### What is dif between display none and visiblity hidden ?

####  display: none;

Hiding an elements can be done by setting the display property to none. The element will be hidden, and tha page will be displayed as if the element is not there.

#### visibility: hiidden;

also hidden an element
However, the element will still take up the same space as before. The element will be hidden, but still effect the layout.


### How can i rotate our html element in to 45 deg ?

#### transform: rotate(angle);


### What is Z-index ? **

#### z-index The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.


### How can we create and element from css wihtout add any html tags in html template?

#### 


### What is overflow ?

#### The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.


### Why we use important ? **

#### The !important rule in CSS is used to add more importance to a property/value than normal. In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!


### What is border radius ?

#### The border-radius property is used to add rounded borders to an element

### What is :nth-child() ?

#### Introduction to CSS Selector nth Child The Nth-child selector in CSS is allowing you to select one or more than one elements based on their given source order. This Nth-child selector is used to style the HTML elements in particular way by applying a formula to the Nth-child in CSS.


### What dif postion absolute and relative ? **

#### Absolute positioning means that the element is taken completely out of the normal flow of the page layout. As far as the rest of the elements on the page are concerned, the absolutely positioned element simply doesn't exist. The element itself is then drawn separately, sort of "on top" of everything else, at the position you specify using the left, right, top and bottom attributes.





## SCSS

_________________________________

### What is Scss ?

#### Scss is a preprocessor, It means simply a program that processes input data and produces an output and then that output will be used in another program.


### How Can i get the outputs from scss / How can i compile scss file.?

#### Compile SCSS to CSS by running the sass command from your terminal. sass input.scss output.css If your source file is inside a folder or you want to place the output inside one, you can pass paths to sass:


### What is the usage of SCSS ? / What is Advantage of SCSS ?

#### SCSS stands for Sassy Cascading Style Sheets or Sassy CSS. It's a superset of the CSS language that adds additional functionality to CSS. These additional elements further offer web developers more flexibility and power when creating web designs. The syntax is the same as CSS, which requires brackets and semicolons in the line endings.


### What is Nesting scss?

#### nesting is the process of placing selectors inside other selectors, The advantage is you define the one rule selector nested inside another selector.


### What is @mixin ?

#### @mixin is the keyword to define the reusable CSS styles, followed by mixin-name mixin-name is a valid identifier for the name of the mixin arguments are optional a group of styles is enclosed in open and closed braces



### How can we use our @mixin();

#### To actually use the mixin in our code, we have to include it where we want the style properties to be. To do that we use the @include rule, followed by the name of the mixin. Syntax: @include



### How can we reuse my class in other class ?

#### it is possible to reuse all properties of another class in scss using the @extend method.


### What is mapping ?

#### the map functions that return a map, will return a new map, and not change the original map. Returns the value for the specified key in the map.

### How can we create var in scss ?

#### Just assign a value to a variable name that starts with a dollar sign ($). Sass (SCSS) Variables are really helpful in reducing repetition and even complex math calculation.



### How can we create global Variables in scss ?**

#### To create a variable with global scope, declare it inside the :root selector. The :root selector matches the document's root element. To create a variable with local scope, declare it inside the selector that is going to use it. The following example is equal to the example above, but here we use the var () function.


### What is import in scss ?**

#### import the CSS file into the SCSS file using the keyword import. The process for importing the regular CSS file into the SCSS file: You can create any number of CSS and SCSS files and you can use them using the keyword ‘import’.

