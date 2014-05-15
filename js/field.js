
var Field = function ( element, x, y){

this.isMine = false;
this.isRevealed = false;
this.isEmpty = false;
this.isFlagged = false;
this.x = x;
this.y = y;
this.mineCount = 0;
this.element = element;

};


Field.prototype.setFlagged = function(value) {
var field = this;
field.element.toggleClass('flag' , value);
field.isFlagged = value;

};

Field.prototype.setRevealed = function (value) {
var field = this;
field.toggleClass('hidden',!value);
field.isRevealed = value;

};


Field.prototype.setEmpty = function(value) {
 var field = this;
 field.isEmpty = value;

};

Field.prototype.setMine = function(value){
var field = this;
field.isMine = value;
field.element.toggleClass('mine', value);

};

Field.prototype.setMineCount = function (value){
	var field = this;
    field.mineCount = value;
    field.setText(value);


};

Field.prototype.setText = function(value){
$('<span />').text(value).appendto(this.element);
return this;
};
