// Create a code that could handle a queue on food ordering process, with this specification:
// Create a class to handle queuing process in a file.
// Create file to handle and execute queue class.
// Each queue process takes a random interval from 1-10 seconds.
// Clue : Use while & promise

class Queue {
    
    constructor(){
        this.orderList = [];
    }

    addOrder(order){
        this.orderList.push(order)
    }

    deleteOrder(){
       return this.orderList.shift();
    }

    showOrder(){
        return this.orderList;
    }

    async processOrder(){
        console.info("Memproses Pesanan!")
        while(this.orderList.length > 0){
            let item = await this.deleteOrder();
            let time = Math.floor(Math.random() * 10) + 1;
            setTimeout(() => {
                console.info(`Memproses Pesanan ${item} dalam ${time}`)
            }, time * 1000);
        }
    }

};

export{Queue};