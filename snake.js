function Snake(){
    //The snake has an x,y and it's speed;
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 1;
    this.tail = [];

    this.update = function(){
        // shifts the tail to the last position as the snake;
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y); 

        // Increases snake speed;
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    this.show = function(){
        fill(255);
        // shifts the tails over to it's last position
        for (let i = 0; i < this.tail.length - 1; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        fill(255);
        // draws snake in white;
        rect(this.x, this.y, scl, scl);
    }

    this.dir = function(x, y){
        //function to use arrow keys;
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos){
        //checks if the snake is at the same position as the food;
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function(){
        // checks if the snake it's at the same position as it's tail;
        for (let i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            // if the pixel distance is less than 1, resets the tail and total;
            if(d < 1){
                this.total = 0;
                this.tail = [];
            }
        }
    }
}