"use strict";

const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";

//это будет работать, так как сам user не изменяется, изменяется только поле user.
