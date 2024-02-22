class BankAccount {
    constructor(owner, balance) {
        this.owner = owner; //口座所有者
        this.balance = balance; //口座残高
    }

    //getBalance()メソッド: getBalance() { ... }で口座残高を取得するメソッドが定義されています。このメソッドは、this.balanceを返します。
    getBalance() {
        return this.balance;
    }
    //口座残高に入金する
    deposit(amount) {
        this.balance += amount;
        return `口座に${amount}円入金しました。`        
    }
    //口座残高から引き出す
    withdraw(amount) {
        if(amount > this.balance) {
            return "口座残高が足りません";
        } this.balance -= amount 
            return `口座から${amount}円出金しました。`;
        }
    
    //口座の所有者と残高を出力する
    toString()  {
       return `口座の所有者：${this.owner}\n 口座残高${this.balance}`;
    }
}

const account = new BankAccount("田中太郎", 1000000);
console.log(account.toString());

console.log(account.deposit(100000));
console.log(account.getBalance());

console.log(account.withdraw(10000));
console.log(account.getBalance());

console.log(account.withdraw(20000000));




