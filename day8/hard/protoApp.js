/*
2. Imagine you are getting the above users collection from a MongoDB database. a.
Create a function called signUp which allows user to add to the collection. If
user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the
application
3. The products array has three elements and each of them has six properties. a.
Create a function called rateProduct which rates the product b. Create a
function called averageRating which calculate the average rating of a product
4. Create a function called likeProduct. This function will helps to like to the
product if it is not liked and remove like if it was liked.
*/

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];
//search user
const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};
//search product
const findProductById = (productId) => {
    return products.find(product => product._id === productId);
};
//signup
const signUp = (username, email, password) => {
    if (findUserByEmail(email)) {
        console.log("User already exists. Please sign in.");
        return;
    }
    const newUser = {
        _id: Math.random().toString(36).substr(2, 6), 
        username,
        email,
        password,
        createdAt: new Date().toLocaleString(),
        isLoggedIn: false
    };
    users.push(newUser);
    console.log("User signed up successfully!");
};
//sign in
const signIn = (email, password) => {
    const user = findUserByEmail(email);
    if (!user) {
        console.log("User not found. Please sign up.");
        return;
    }
    if (user.password === password) {
        user.isLoggedIn = true;
        console.log("User signed in successfully!");
    } else {
        console.log("Incorrect password. Please try again.");
    }
};
//ratings
const rateProduct = (productId, userId, rating) => {
    const product = findProductById(productId);
    if (!product) {
        console.log("Product not found.");
        return;
    }
    product.ratings.push({ userId, rate: rating });
    console.log("Product rated successfully!");
};

const averageRating = (productId) => {
    const product = findProductById(productId);
    if (!product || product.ratings.length === 0) {
        console.log("Product not found or no ratings available.");
        return;
    }
    const totalRating = product.ratings.reduce((acc, curr) => acc + curr.rate, 0);
    const average = totalRating / product.ratings.length;
    console.log(`Average rating for ${product.name}: ${average.toFixed(2)}`);
};

const likeProduct = (productId, userId) => {
    const product = findProductById(productId);
    if (!product) {
        console.log("Product not found.");
        return;
    }
    const userLiked = product.likes.includes(userId);
    if (userLiked) {
        product.likes = product.likes.filter(like => like !== userId);
        console.log("Product unliked successfully!");
    } else {
        product.likes.push(userId);
        console.log("Product liked successfully!");
    }
};
//demonstration
signUp('Ash', 'ash.ketchum@gmail.com', 'pikachuIsmyhomie2');
signIn('alice@gmail.com', 'pikachuIsmyhomie2');
signIn('ash.ketchum@gmail.com', 'pikachuIsmyhomie');
signIn('ash.ketchum@gmail.com', 'pikachuIsmyhomie2');
rateProduct('eedfcf', 'ghderc', 4.5);
averageRating('eedfcf');
likeProduct('aegfal', 'ghderc');
likeProduct('aegfal', 'ghderc');
