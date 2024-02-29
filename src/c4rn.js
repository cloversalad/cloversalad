
//http://localhost:8080/?c4rn=64823a5feced9b09e9d4aaf5

export function loadC4rn(fishId) {

    function findObjectById(array, id) {
        return _.find(array, { id: id });
    }

    function convertToJSON(jsonString) {
        try {
          var fixedString = jsonString.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
          var jsonArrayString = "[" + fixedString + "]";
          var data = JSON.parse(jsonArrayString);
          var json = JSON.stringify(data);
          return json;
        } catch (error) {
          console.error('Erreur lors de la conversion en JSON :', error);
          return null;
        }
      }



    function testWindowC4rn() {
        let count = 0;
        const interval = setInterval(() => {
          if (window.c4rn !== undefined) {
            c4rnNote()
            clearInterval(interval);
          } else {
            count++;
            if (count === 50) {
              console.log('window.c4rn introuvable après 50 essais.');
              clearInterval(interval);
            }
          }
        }, 50);
      }
      
      testWindowC4rn();
      

      function c4rnNote() {
        const c4rnFish = findObjectById(window.c4rn, fishId);

        if(c4rnFish){
            if(c4rnFish.note !== null){
                document.getElementById("positionNote").innerHTML = c4rnFish.note;
            }

      
            var convertedJSON = convertToJSON(c4rnFish.pos);                    
            if(convertedJSON) {

                const c4rnPos = JSON.parse(convertedJSON);

                c4rnPos.forEach(pos => {
                    const posElem = document.createElement("div");
                    posElem.setAttribute("class", "ccross");
                    posElem.setAttribute("data-fishid", fishId);
                    posElem.setAttribute("style", "background-image:url('./images/c4rn.png')")
                    posElem.style.left = pos.x + "%"
                    posElem.style.top = pos.y + "%"
                    document.getElementById("positions-container").appendChild(posElem);
                    
                })

            }
        }
      }
}

