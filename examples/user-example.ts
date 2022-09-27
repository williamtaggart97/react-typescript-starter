interface User {
    name: string;
    id: number;
}

const user: { name: string, id: number } = {
    name: "Hayes",
    id: 0,
};

type CustomArrayType = (User | string)[];

function getAdminUser(): User {
    // return user;
}

function getUsers(): CustomArrayType {
    return;
}

function filterUsers(users: CustomArrayType) {
    users.forEach(user => {
        if (typeof user === 'string') {
            user; // take a look at the hover state
        } else {
            user; // and here
        }
    })
}


/****
 * 
 * WITH GENERICS
 * 
 */


type CustomArrayTypeGeneric<T> = (T | string)[];

const getUsers2: () => CustomArrayTypeGeneric<> = () => {
    return [];
}

