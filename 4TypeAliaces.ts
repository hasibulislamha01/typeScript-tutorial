type User = {
    readonly _id: string   //readonly is a keyword that is used to prevent any operation on the elelment. You don't want the id to be changed, do you ?
    name: string,
    email: string,
    isSingle: boolean,
    age?: number,  // the question mark make this property as optional. so if type user don't have age value it will not show any error
}

const user1: User = {
    _id: '123',
    name: 'vogaBond',
    email: 'voga@boga.com',
    isSingle: false,
    age: 23
}

const user2: User = {
    _id: '11',
    name: 'bullaBhai',
    email: 'bulla@bul.com',
    isSingle: true,
}

user2.email = 'bulla@gmail.com'

// user2._id = '35'  
//Cannot assign to '_id' because it is a read-only property.ts(2540)


const modifyUser = (userParameter: User): User => {
    return { _id: "", name: "", email: "", isSingle: false, age: 34 };
}



// while working in group you may need to use types coming from different coders and you may need to built such a function that requires such parameters that is provided by 2 or more different fellow coders. Now to manage such scenarios we do this.

// coder 1
type card = {
    cardNumber: string
}

// coder 2
type order = {
    orderId: string
}

type orderDetails = card & order & {
    cvv: number
}
// the & operator combines the types of card and order and orderDetails 