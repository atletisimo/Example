class Rectangle{
    //setup objects=thats what constructor does

    constructor(_width,_height,_color) {
console.log("Rectangle is created");
//lets define instance propeties
        this.width=_width;
        this.height=_height;
        this.color=_color;

}
//create method i.e function that will calculate sth
    getArea(){
        return this.width*this.height;
    }
    printDescription(){
        document.write(`i am rectangle of ${this.width}*${this.height} ` );
        document.write(`My color is:${this.color}`);
}


}


//to call the constructor
let myRectangle1=new Rectangle(5,3,'blue');
//calling the method


document.write(myRectangle1.printDescription());