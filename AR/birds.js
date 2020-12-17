var marker = document.getElementById('bird-wall');
var positionZ = 0.300;
var positionY = 0.200;
var positionX = 0;
var scale = 1;

function generateRandomPosition(range){
    return ((range * -1) + Math.floor((Math.random() * range * 2) + 1))/range;
}

function generateRandomScale(index){
    return index + Math.floor((Math.random() * 5) + 1);
}

for(i=1; i<=10; i++){
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('obj-model', {obj: '#bird', mtl: '#bird-mtl'});
    entityEl.setAttribute('scale', {x: scale, y: scale, z: scale});
    entityEl.setAttribute('position', {x: positionX, y: positionY, z: positionZ});
    entityEl.setAttribute('rotation', {x: 0, y: 0, z: 0});

    scale = generateRandomScale(i)
    marker.appendChild(entityEl)
    positionZ = positionZ + 0.300
    positionY = positionY + 0.200
    positionX = generateRandomPosition(1000)
}