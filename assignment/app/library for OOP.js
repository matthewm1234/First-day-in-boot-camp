function Car (name, model, type){
	this. name =name 
	this. model =model 
	this. type =type
	this.numOfWeels=4
this.numOfDoors =5 
Car.prototype.startEngine=function (){
	return 'CAR ENGINE ATIVATED... adjust the gear to move...,have a pleasant day... '
Car.prototype.stopEngine=function (){
	return'Thanks for the ride'
}
} 
}
