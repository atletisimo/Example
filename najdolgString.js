let arr = [
    'above',
    'accept',
    'according',
    'account',
    'across',
    'act',
    'action',
    'activity',
    'actually',
    'add',
    'address',
    'administration',
    'admit',
    'adult',
    'affect',
    'after',
    'again'];
function najdolgString(arr) {

   
    let najdolg = arr[0];
   
    for (let i = 1; i < arr.length; i++) {
        let maxInd = arr[i].length;
        if (maxInd > najdolg.length) {
        
            najdolg = arr[i];
        }
    }
    return najdolg;
}
console.log(najdolgString(arr));
