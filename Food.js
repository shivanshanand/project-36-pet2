    class Food{
        constructor(){
           this.milkimg=loadImage("Milk.png");
         //   milkimg=this.image;
         

            this.foodStock=0;
        }

        display(){
            var x=80,y=100;

            imageMode(CENTER);
            image(this.milkimg,720,220,70,70);

            if(this.foodStock!=0){
                for(var i=0;i<this.foodStock;i=+1){
                    if(i%10==0){
                        x=80;
                        y=y+50;
                    }
                    image(this.milkimg,x,y,50,50);
                    x=x+30;
                }
            }
        }

        updateFoodStock(foodStock){
          this.foodStock=foodStock 
        }

        getFoodStock(){
         return this.foodStock;
        }

    }
