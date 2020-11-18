function F() {

    var arr = [1, 2, 3];
    this.prefix = "el: "
    var self = this;

    // 1.
    this.test1 = function()
    {
        arr.forEach(function (e) {
            console.log(this.prefix + ":" + e);
        });
    }

    // 2.
    this.test2 =  function()
    {
        arr.forEach(function (e) {
            console.log(self.prefix + ":" + e);
        });
    }

    // 3.
    this.test3 = function()
    {
        arr.forEach(e => console.log(this.prefix + ":" + e));
    }

    // 4.
    this.test4 = function()
    {
        arr.forEach(e => console.log(self.prefix + ":" + e));
    }


    // 5.
    return function()
    {
        arr.forEach(e => console.log(this.prefix + ":" + e));
    }

    // 6.
    return function()
    {
        arr.forEach(e => console.log(self.prefix + ":" + e));
    }

}
