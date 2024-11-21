/*

DOM (Document Object Model)
---------------------------
- The Document Object Model (DOM) is a programming interface for HTML and XML documents.
  It represents the page so that programs can change the document structure, style, and content.
  The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.



  -Getting Elements:
   ------------------

    - getElementById():
        - returns an element object representing the element whose id property matches the specified string.
        - ex:
            const element = document.getElementById('id');

    - getElementsByClassName():
        - returns a collection of elements with the specified class name.
        - ex:
            const elements = document.getElementsByClassName('class');

    - getElementsByTagName():
        - returns a collection of elements with the specified tag name.
        - ex:
            const elements = document.getElementsByTagName('tag');

    - querySelector():
        - returns the first element that matches a specified CSS selector in the document.
        - ex:
            const element = document.querySelector('selector');

    - querySelectorAll():
        - returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
        - ex:
            const elements = document.querySelectorAll('selector');



    - Add Classes:
    ---------------
        - classList.add():
            - adds one or more class names to an element.
            - ex:
                element.classList.add('class');

    - Remove Classes:
    ------------------
        - classList.remove():
            - removes one or more class names from an element.
            - ex:
                element.classList.remove('class');  

    - Toggle Classes:
    ------------------
        - classList.toggle():
            - toggles between a class name for an element.
            - ex:
                element.classList.toggle('class');  

    -----------------------------------------------------------------------------------------------------------------------------------










*/