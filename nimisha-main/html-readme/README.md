## HTML

HTML is the Standard Markup language for creating web page.


An HTML elements is defined by a start tag, some content, and an end tag.

<tagname> some content.... </tagname>
Some HTML elements have no content ( like the <br> element). These elements are called empty elements. Empty elements do not have an end tag.

#### Attributes are used to provide additional information about HTML elements.

#### HTML image are defined with the <img> tag.


### Nested HTML elements

HTML elements can be nested (this means that elements can contain other elements).

* All HTML elements can have attributes.
* The "href" attribute of <a> specifies the URL of the page the link goes to.
* The "src" attribute of <img> specifies the path to the image to be displayed.
* The "width" and "height" attributes of <img> provide size information for image.
* The "alt" attribute of <img> provides an alternate text for an image.
* The "style" attribute is used to add styles to an elements, such as color, font, size and more.
* The "lang" attribute of the <html> tag declares the language of the web page.
* The "title" attribute defines some extra information about an elements.


### Font size of Heading

* h1  font-size: 24px;
* h2  font-size: 22px;
* h3  font-size: 18px;
* h4  font-size: 16px;
* h5  font-size: 12px;
* h6  font-size: 10px;

HTML heading are title or subtitle that you want to display on webpage.


#### A paragraph always storts on a new line, and is usually a block of text, or block level element.

#### The <hr> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

#### The HTML <br> element defines a line break.

#### The HTML <pre> element defines preformatted text.



### HTML Formatting elements

Formatting elements were designed to display special types of text:

1. <b>      -   Defines Bold text
2. <strong> -   Defines Important text
3. <i>      -   Italic text
4. <em>     -   Emphasized text
5. <mark>   -   market text/ highlighted
6. <small>  -   smaller text
7. <del>    -   Deleted text
8. <ins>    -   inserted text
9. <sub>    -   subscript text
10. <sup>   -   superscript text



#### HTML Quatotion and citation elements.

* <abbr>          Defines as abbreviation or acronym.
* <address>       Defines contact informaion for the author/ owner of a document.
* <bdo>           Defines the text direction.
* <blockquote>    Defines a section that is quoted from another sauce.
* <cite>          Defines the title of a work
* <q>             Defines a short inline quotation



### HTML Comment Tag

<!--Write your comment here --->

Comments are not displayed by the browser, but they can help document your HTML source code.

### HTML Links - Hyperlinks

HTML links are Hyperlinks
we can click on a link and jump to another document


### HTML Links - Different colors

An HTML link is displayed in a differant color depending on whether it has been visited, is unvisited, or is active.


### HTML Links - Create Bookmarks

HTML links can be used to create bookmarks, so that readers can jump to specifec parts of a web page.

* Use the "id" attribute (id="vlaue") to define bookmarks in a page.
* Use the "href" attribute (href="#value") to link to the bookmark.


### HTML Image Syntax

* The HTML <img> tag is used to embed an image in a web page.
* The <img> tag is empty, it contains attributes only, and does not have a clossing tag.
* The <img> tag has two reguired attribute:
    * src - Specifies the path to the image.
    * alt - Specifies an alternat text for the image.


### HTML Image Tags

* <img>   -   Defines an image
* <map>   -   Defines an image map
* <area>  -   Defines a clickable area inside an image map
* <picture>   -   Defines a container for maltiple image resource


### HTML Favicon

A Favicon is a small image displayed next to the page. Title in the browser tab.


### HTML Tables

HTML tables allow web developers to arrange data into rows and columns.

* <table> -   Defines a table.
* <th>    -   Defines a header cell in a table.
* <tr>    -   Defines a row in a table.
* <td>    -   Defines a cell in a table.
* <caption>   -   Defines a table caption.
* <colgroup>  -   Specifies a group of one or more columns in a table for formatting.
* <col>   -   Specifies column properties for each column within a <colgroup> element.
* <thead> -   Groups the header content in a table
* <hbody> -   Group the body content in a table.
* <tfooter>   -   Group the footer content in a table.


#### HTML list

HTML lists allow web developers to group a set of related items in lists.

* <ul>  -   Defines an unordered list.
* <ol>  -   an orderd list
* <li>  -   a list item
* <dl>  -   a description list
* <dt>  -   a term in a description list
* <dd>  -   the term in a description list


#### Block & Inline Element

* There are two display value: block & inline
* A block level elements always starts on a new line and takes up the full width available.
* An Inline element does not start on a new line and it only takes up as much width as necessary.
* The <div> element is a block-level and is often used as container for other HTML elemets elements.
* The <span> elements is an inline container used to mark up a part of a text, or a part of a document


#### Iframes

An HTML iframes is used to display a web page within a web page.

* The HTML <iframe> tag specifies an inline frame
* The src attribute defines the URL of the page to embed.
* Always include a title attribute
* The height & width attributes specify the size of the iframe.
* use border: none; to remove the border around the iframe.


#### HTML Layout elements

##### Semantic Elements

semantic elements = elements with a meaning

* <header>  -   Defines a header for a document or a section.
* <nav> -       Defines a set of navigation links.
* <section> -   Defines a section in document.
* <article> -   Defines an independent, self contained content.
* <aside>   -   Defines content aside from the content(like a sidebar).
* <footer>  -   Defines a footer for document or a section.
* <details> -   Defines additional details that the user. Can open and close an demand.
* <summary> -   Defines a heading for the <details> elements.


#### Forms

An form is used to collect user input. The user input is most ofter sent to a server for processing.

##### <form> elements

The HTML <form> elements can contain one or more of the following form elements: 

* <input>
* <label>
* <select>
* <textarea>
* <button>
* <fieldset>
* <legend>
* <datalist>
* <output>
* <option>
* <optgroup>
    