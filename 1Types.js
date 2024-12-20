// these are the types we see 
/*
    Primitive
        1. string
        2. number
        3. boolean

    Non-primitive
        4. Array
        5. any (TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors)
        6. function
        7. object
        8. union
        9. null
        10. undefined
        11. Enums



        Enum:
        Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure. You can read more about enums in the Enum reference page.


        ------------------ syntax for declaring a variable in typescript -------------------------
        let varableName : type = value;
        const varableName : type = value;
*/
var userName = 'Hasibul';
var age = 24;
var isSingle = true;
console.log(userName, 'is single?', isSingle);
