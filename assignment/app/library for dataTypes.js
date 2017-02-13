function dataTypes(d){ 
	// matthew  About typing all expectations for d
if(typeof(d)==="string"){
	return d.length
}
else if (d===null||d===undefined){
	return "no value"
}
else if (d.constructor==Boolean){
	return d
}

else if ((d)<100){
	return 'less than 100'
}
else if (d>100){
	return 'more than 100' 
}
else if (d===100){
	return 'equal to 100'
}
// base of my research d.constructor is used for checking the type of data in 
else if (d.constructor === Array){
	return d[2] }
	
else if (d.constructor === Function){
	f=d(true)
	return f
} 
}
// Please kindly verify my test cases.....Thank you.



