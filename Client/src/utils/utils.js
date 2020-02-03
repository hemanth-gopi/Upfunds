
export function randomInt(min, max) {

    console.log(min + Math.floor((max - min) * Math.random()));
    
	return min + Math.floor((max - min) * Math.random());
}